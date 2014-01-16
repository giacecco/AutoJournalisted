var MAX_ARTICLES_FETCHED_PER_REQUEST = 5,
    JOURNALISTS_REFS = [
        "aleks-krotoski",
        "charlie-brooker",
        "david-mitchell-1", // on The Observer
        "george-monbiot",
        "mark-henderson", // on The Guardian
        "mark-henderson-1", // on The Observer
        "noel-sharkey",
        "simon-singh", // on The Guardian
        "simon-singh-1", // on The Independent
    ],
    JOURNALISTS = JOURNALISTS_REFS.map(function (ref) {
        return Utilities.jsonParse(UrlFetchApp.fetch("http://journalisted.com/api/getJourno?output=js&journo=" + encodeURIComponent(ref)).getContentText()).results[0];
    }),  
    JOURNALISTS_IDS = Object.keys(JOURNALISTS).map(function (journalistName) { return JOURNALISTS[journalistName].id; }, [ ]).sort();

var db = ScriptDb.getMyDb();

