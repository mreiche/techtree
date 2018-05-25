angular.module('TechTree', [])
.controller('TechTreeController', function($scope) {
	$scope.listItemClassForTechItem = function(techItem, fullStatus) {
		if ((techItem.progress===undefined || techItem.progress===0) && fullStatus === true) {
			return 'list-group-item-danger';
		} else if (techItem.progress === 1) {
			return 'list-group-item-success';
		} else if (fullStatus === true) {
			return 'list-group-item-warning';
		}
	}	
	$scope.showDependencies = function(techItem) {
		var i;
		for (i in $scope.techItems) {
			$scope.techItems[i].active=false;
		}
		for (i in techItem.dependencies) {
			techItem.dependencies[i].active=true;
		}
		techItem.active = true;
	}
	$scope.showAll = function() {
		var i;
		for (i in $scope.techItems) {
			$scope.techItems[i].active=true;
		}
	}
	$scope.resolveDependencies = function() {

		var techTree = [];
		var solvedTechItems={};
		var techItem;
		var i;

		var s = 0;

		while (s < 100) {
		    ++s;
			var dependencyGroup = [];
			var dependenciesSatisfied;
            var depTechItem;
            var depTechItemId;
			for (var techItemId in techItems) {
				var techItemBonuses = [];
				techItem = techItems[techItemId];
				techItem.id = techItemId;
				techItem.active=true;
				if (techItem.bonuses !== undefined) {
					for (i in techItem.bonuses) {
						if (bonuses[techItem.bonuses[i]] !== undefined) {
							techItemBonuses.push(bonuses[techItem.bonuses[i]]);
						}
					}
					if (techItemBonuses.length > 0) {
						techItem.bonuses = techItemBonuses;
					}
				}

                dependenciesSatisfied = true;
				if (techItem.dependsOn!==undefined) {
				    if (techItem.dependencies===undefined) {
				        techItem.dependencies = {};
                    }
                    for (i in techItem.dependsOn) {
                        depTechItemId = techItem.dependsOn[i];
                        if (dependenciesSatisfied===true) {
                            dependenciesSatisfied = (solvedTechItems[depTechItemId] !== undefined);
                        }

                        depTechItem = techItems[depTechItemId];
                        if (depTechItem===undefined) {
                            console.log('dependency ' + depTechItemId + ' not defined');
                        } else {
                            if (depTechItem.leadsTo === undefined) {
                                depTechItem.leadsTo = {};
                            }
                            depTechItem.leadsTo[depTechItemId] = techItem;
                            techItem.dependencies[depTechItemId] = depTechItem;
                        }
                    }
                }
				if (dependenciesSatisfied) {
					dependencyGroup.push(techItem);
				}
			}
			if (dependencyGroup.length===0) {
			    console.log('break here');
			    break;
            }
			techTree.push(dependencyGroup);
			for (i in dependencyGroup) {
				techItem = dependencyGroup[i];
				solvedTechItems[techItem.id] = techItem;
				delete techItems[techItem.id];
			}
		}
		$scope.techTree = techTree;
		$scope.techItems = solvedTechItems;
	}
	
});


