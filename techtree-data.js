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
    "v44": {
            "title": "v4.4",
            "costs": 0,
            "progress": 1,
            "bonuses": ["performance", "clean-code"]
    },
    "v45": {
            "title": "v4.5",
            "progress": 0.9,
            "costs":4,
            "dependsOn": ["v44"],
            "bonuses": ["performance", "clean-code"]
    },
    "bootstrap":{
            "title": "Bootstrap-Theme",
            "dependsOn": ["v45"],
            "costs":4,
            "bonuses":["standards"]
    },
    "new-inline-editor":{
            "title": "Neuer Inline-Editor",
            "progress":0.05,
            "dependsOn": ["v45"],
            "bonuses":["user-experience", "features"],
            "costs":30
    },
    "new-ui":{
            "title": "Neues Interface",
            "dependsOn": ["bootstrap"],
            "bonuses":["user-experience"]
    },
    "continues-delivery":{
            "title": "Continues Delivery",
            "dependsOn": ["v45"],
            "bonuses":["standards"]
    },
    "horizontal-scaling":{
            "title": "Horizontale Skalierung",
            "dependsOn": ["v45", "continues-delivery"],
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