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
            "title": "Standardisierung",
    },
    "redundancy":{
            "title": "Ausfallsicherheit",
    },
    "growth":{
            "title": "Wachstum"
    },
    "ux": {
			"title": "Besseres Nutzererlebnis",
    },
    "money": {
			"title": "Einnahmen",
    }
};

var techItems = {
    "treats": {
        "title":"Abbau Technischer Schulden",
        "dependsOn": ["sq","ci","cd","ut"]
    },
		"sq": {
			"title": "SonarQube",
			"bonuses": ["stability","clean-code"]
		},
		"ci": {
			"title": "Continuous Integration GitLab",
			"bonuses": ["stability"]
		},
		"cd": {
			"title": "Continuous Deployment",
			"bonuses": ["performance"]
		},
		"ut": {
			"title": "Unit Testing",
			"bonuses": ["stability"]
		},
	"v56": {
        "title":"myty 5.6 (Shop)",
        "dependsOn": ["bundles","coupons","dsgvo","article-ui"]
    },
		"bundles": {
			"title": "Bundles",
			"bonuses": ["standards"]
		},
		"coupons": {
			"title": "Gutscheine/Rabatte",
			"bonuses": ["standards"]
		},
		"dsgvo": {
			"title": "DSGVO",
			"bonuses": ["features"]
		},
		"article-ui": {
			"title": "Artikelverwaltung UI",
			"bonuses": ["ux"]
		},
    "cms": {
        "title": "Inhaltsverwaltung",
        "bonuses": ["ux", "performance"],
		"dependsOn": ["v52eol","v55","ui-ux"]
    },
		"v52eol": {
			"title": "Myty 5.2 EOL",
			"progress": 0.9,
			"costs": 1,
			"dependsOn":["template-compat","static-assets","fm-widgets"]
		},
			"template-compat": {
				"title": "Template Kompatibilitäts Funktionen",
				"progress": 0,
				"bonuses": []
			},
			"static-assets": {
				"title": "Statische Inhalte",
				"progress": 1,
				"bonuses": ["features"]
			},
			"fm-widgets": {
				"title": "Formular-Manager-Widgets",
				"progress": 0.15,
				"bonuses": ["features"]
			},
		"v55": {
			"title": "Myty 5.5",
			"costs": 1,
			"progress":  0.5,
			"bonuses": ["performance", "clean-code"],
			"dependsOn": ["versioning","globaltexts-review"]
		},
			"versioning": {
				"title": "Versionierung Content",
				"bonuses": ["features"]
			},
			"globaltexts-review": {
				"title": "Review globale Texte",
				"bonuses": ["ux","performance"]
			},
		"ui-ux": {
			"title": "UI/UX Inhaltsverwaltung",
			"dependsOn": ["templates","publication"],
			"costs": 10,
		},
			"templates": {
				"title": "Vorlagenverwaltung",
				"dependsOn": ["area-dm","snippet-dm"],
				"bonuses": ["ux"]
			},
			"publication": {
				"title": "Veröffentlichungsverwaltung",
				"dependsOn": ["area-dm","snippet-dm"],
				"bonuses": ["ux"]
			},
				"area-dm": {
					"title": "Area Datenmodell",
					"dependsOn": ["topics"]
				},
				"snippet-dm": {
					"title": "Schnipsel Datenmodell",
					"dependsOn": ["topics"]
				},
					"topics": {
						"title": "Topics",
						"dependsOn": ["navigation"],
						"bonuses": ["clean-code","standards"]
					},
						"navigation": {
							"title": "Navigation",
							"dependsOn": [],
							"bonuses": ["performance","ux","standards","clean-code"]
						},
				
};
