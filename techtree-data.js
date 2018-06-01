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
    },
    "money-saving": {
        "title":"Ausgaben sparen",
    },
    "privacy": {
        "title":"Datenschutz",
    }
};

var techItems = {
    "v56": {
        "title":"myty 5.6 (Shop)",
        "progress":0.6,
        "dependsOn": ["dsgvo", "v55"]
    },
    "bundles": {
        "title": "Shop: Bundles",
        "bonuses": ["standards"],
        "dependsOn": ["v56"],
    },
    "coupons": {
        "title": "Shop: Gutscheine/Rabatte",
        "bonuses": ["standards"],
        "dependsOn": ["v56"],
    },
    "dsgvo": {
        "title": "Shop: DSGVO (5.6)",
        "progress":0.9,
        "bonuses": ["privacy"]
    },
    "article-ui": {
        "title": "Shop: Artikelverwaltung UI",
        "dependsOn": ["v56"],
        "bonuses": ["ux"]
    },
    "v52eol": {
        "title": "Myty 5.2 EOL",
        "progress": 0.9,
        "costs": 1,
        "dependsOn":["template-compat","static-assets","fm-widgets","fm-ux"]
    },
    "template-compat": {
        "title": "Template Kompatibilitäts Funktionen",
        "progress": 1,
        "bonuses": ["standards","money-saving","performance"]
    },
    "static-assets": {
        "title": "Statische Inhalte",
        "costs": 2,
        "progress": 0.8,
        "bonuses": ["money-saving","performance"]
    },
    "fm-widgets": {
        "title": "Formular-Manager-Widgets",
        "costs": 4,
        "progress": 0.15,
        "bonuses": ["features"]
    },
    "fm-ux": {
        "title": "Formular-Manager-UX",
        "costs": 2,
        "bonuses": ["ux"]
    },
    "v55": {
        "title": "Myty 5.5",
        "costs": 1,
        "progress":  0.5,
        "bonuses": ["performance", "clean-code"],
        "dependsOn": ["versioning","globaltexts-review"]
    },
    "versioning": {
        "costs": 1,
        "title": "Versionierung Content",
        "bonuses": ["features"]
    },
    "globaltexts-review": {
        "costs": 1,
        "title": "Review globale Texte",
        "bonuses": ["ux","performance"]
    },
    "ui-ux": {
        "title": "UI/UX Inhaltsverwaltung",
        "bonuses": ["ux"],
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
        "progress":0.2,
        "dependsOn": ["v55"],
        "bonuses": ["performance","ux","standards","clean-code"]
    },
    "treats": {
        "title":"Abbau Technischer Schulden",
        "dependsOn": ["sq","ut"]
    },
    "sq": {
        "title": "SonarQube",
        "bonuses": ["stability","clean-code"]
    },
    "ci": {
        "title": "Continuous Integration GitLab",
        "bonuses": ["stability"]
    },
    /*"cd": {
        "title": "Continuous Deployment",
        "bonuses": ["performance"]
    },*/
    "ut": {
        "title": "Unit Testing",
        "progress":0.3,
        "bonuses": ["stability"],
        "dependsOn": ["ci"],
    },
};
