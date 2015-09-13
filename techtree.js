angular.module('TechTree', [])
.controller('TechTreeController', function($scope) {
	var bonuses = {
		"performance": {
			"title": "Performance"
		},
		"clean-code": {
			"title": "Verbesserte Entwicklung"
		},
		"stability": {
			"title": "Verbesserte Stabilität"
		},
		"features": {
			"title": "Neue Funktionen",
		},
		"standards":{
			"title":"Standardisierung",
		},
		"redundancy":{
			"title": "Ausfallsicherheit",
		},
		"user-experience":{
			"title": "Bessere Nutzererfahrung",
		},
		"growth":{
			"title": "Wachstum"
		}
	}
	var techItems = {
		"myty44": {
			"title": "Myty 4.4",
			"costs": 0,
			"progress": 1,
			"bonuses": ["performance", "clean-code"]
		},
		"myty45": {
			"title": "Myty 4.5",
			"progress": 0.9,
			"costs":4,
			"dependsOn": ["myty44"],
			"bonuses": ["performance", "clean-code"]
		},
		"horizontal-scaling": {
			"title": "Horizontale Skalierung",
			"dependsOn": ["myty45"]
	 	},
		"cf-smarty": {
			"title": "CFM: Native Smarty-Integration",
			"dependsOn": ["cf-myty45-migration"],
			"progress":0.43,
			"bonuses":["performance", "clean-code","stability"]
	 	},
		"cf-myty45-migration": {
			"title": "CFM: Myty 4.5 Migration",
			"costs":20,
			"progress": 0.7,
			"dependsOn": ["myty45"]
	 	},
		"myty-bootstrap":{
			"title": "Myty-Bootstrap-Theme",
			"dependsOn": ["myty45"],
			"costs":4,
			"bonuses":["standards"]
		},
		"myty-new-inline-editor":{
			"title": "Neuer Inline-Editor",
			"progress":0.05,
			"dependsOn": ["myty45"],
			"bonuses":["user-experience", "features"],
			"costs":30
		},
		"myty-new-ui":{
			"title": "Neues Myty Interface",
			"dependsOn": ["myty-bootstrap"],
			"bonuses":["user-experience"]
		},
		"cf-doctrine": {
			"title": "Doctrine-Migration",
			"costs": 60,
			"dependsOn": ["myty44"],
			"bonuses": ["performance", "clean-code", "stability"]
	 	},
		"new-navigation": {
			"title": "Neue Navigation",
			"progress":0.3,
			"costs":30,
			"dependsOn": ["myty45"],
			"bonuses": ["performance", "clean-code", "stability", "features"]
		},
		"master-master-replication": {
			"title": "Master-Master-Replikation",
		},
		"cluster-filesystem":{
			"title": "Cluster-Dateisystem",
		},
		"sessions": {
			"title": "Neue Sitzungen",
			"dependsOn": ["myty45"]
		},
		"continues-delivery":{
			"title": "Continues Delivery",
			"dependsOn": ["cf-myty45-migration"],
			"bonuses":["standards"]
		},
		"horizontal-scaling":{
			"title": "Horizontale Skalierung",
			"dependsOn": ["myty45", "sessions", "master-master-replication", "cluster-filesystem", "continues-delivery"],
			"bonuses": ["redundancy","growth"]
		},
		"ab-tests":{
			"title": "AB-Tests",
			"dependsOn":["horizontal-scaling"],
			"bonuses": ["user-experience"]
		},
		"geo-redundance":{
			"title": "GEO-Redundanz",
			"dependsOn":["horizontal-scaling"],
			"bonuses": ["redundancy","growth"]
		}
	};
		
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


