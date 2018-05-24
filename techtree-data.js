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
    },
    "ux": {
        "title": "Besseres Nutzererlebnis",
    },
    "money": {
        "title": "Einnahmen",
    }
};

var techItems = {
    "ci": {
        "title": "Continues Integration",
        "bonuses": ["stability"]
    },
    "treats": {
        "title":"Abbau Technischer Schulden",
        "dependsOn": ["ci"]
    },
    "v55": {
            "title": "Myty 5.5",
            "costs": 4,
            "progress":0.99,
            "bonuses": ["performance", "clean-code"]
    },
    "v52": {
        "title": "Myty 5.2 Feature Freeze",
        "progress": 0.9,
        "dependsOn":["formmanager-widgets"]
    },
    "formmanager-widgets": {
        "title": "Formular-Manager-Widgets",
        "progress":0,
        "bonuses": []
    },
    "ux-content": {
        "title": "UX Inhalte bearbeiten",
        "dependsOn": ["topics"]
    },
    "navigation": {
        "title": "Neue Navigation",
        "dependsOn": ["v55"],
    },
    "topics": {
        "title": "Topics",
        "dependsOn": ["navigation"]
    }
};