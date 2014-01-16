function fetchArticlesForNextJournalist () {
    var lastIdIndex = readParameter("lastFetchedJournalistIdIndex")
        nextIdIndex = (lastIdIndex == null) ? 0 : (lastIdIndex + 1 < JOURNALISTS_IDS.length ? lastIdIndex + 1 : 0);
    saveParameter("lastFetchedJournalistIdIndex", nextIdIndex);
    return fetchArticlesForJournalist(JOURNALISTS_IDS[nextIdIndex]);
}

var fetchArticlesForJournalist = function (journalistedId) {
    var journalists = db.query({ type: "journalist", id: journalistedId, }),
        journalist = journalists.hasNext() ? journalists.next() : db.save({ 
            type: "journalist",
            id: journalistedId, 
            articles: { },
            articleIdsSentToInstapaper: [ ],
        });
    Utilities.jsonParse(UrlFetchApp.fetch("http://journalisted.com/api/getJournoArticles?journo=" + journalistedId + "&limit=" + MAX_ARTICLES_FETCHED_PER_REQUEST + "&output=js")).results.forEach(function (article) {
        if (Object.keys(journalist.articles).indexOf(article.id) == -1) {
            // found a new article!
            // TODO: this will grow forever! is it a problem?
            var articleId = "_" + article.id; // note: it looks like Google App Script has issues with hash keys starting by 0-9
            delete article.id;
            journalist.articles[articleId] = article;
            journalist = db.save(journalist);          
        }
    });
    return journalist;
}
