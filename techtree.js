angular.module('TechTree', [])
.controller('TechTreeController', function($scope) {
	function dependenciesSatisfied(techItem, techItems) {
		if (techItem.dependsOn!==undefined) {
			var i;
			var dependency;
			for (i in techItem.dependsOn) {
				dependency = techItem.dependsOn[i];
				if (techItems[dependency] !== undefined) {
					var depTechItem = techItems[dependency];
					if (depTechItem.leadsTo === undefined) {
						depTechItem.leadsTo = {};
					}
					depTechItem.leadsTo[techItem.id] = techItem;
					return false;
				}
			}
		}
		return true;
	}

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
	$scope.showLeadsTo = function(techItem) {
		var i;
		for (i in $scope.techItems) {
			$scope.techItems[i].active=false;
		}
		for (i in techItem.leadsTo) {
			techItem.leadsTo[i].active=true;
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

		while (true) {
			var dependencyGroup = [];
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
				if (dependenciesSatisfied(techItem, techItems)) {
					dependencyGroup.push(techItem);
					var dependencies = {};
					var numDependencies = 0;
					var depTechItem;
					for (i in techItem.dependsOn) {
						depTechItem = solvedTechItems[techItem.dependsOn[i]];
						if (depTechItem !== undefined) {
							dependencies[depTechItem.id] = depTechItem;
							++numDependencies;
						} else {
							console.log('dependency ' + techItem.dependsOn[i] + ' not defined');
						}
					}
					if (numDependencies > 0) techItem.dependencies = dependencies;
				}
			}
			if (dependencyGroup.length===0) break;
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


