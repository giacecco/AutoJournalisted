var sendJournalistToInstapaper = function (journalistId) {
    var journalists = db.query({ type: "journalist", id: journalistId }),
        journalist = journalists.hasNext() ? journalists.next() : null,
        atLeastOneSent = false;
    if (journalist) {
        Object.keys(journalist.articles).filter(function (articleId) { return journalist.articleIdsSentToInstapaper.indexOf(articleId) == -1; }).forEach(function (articleId) {
            if (UrlFetchApp.fetch("https://www.instapaper.com/api/add", { 
                method: "post", 
                payload: {
                    username: UserProperties.getProperty("INSTAPAPER_USERNAME"),
                    password: UserProperties.getProperty("INSTAPAPER_PASSWORD"),
                    url: journalist.articles[articleId].permalink,
                    title: journalist.articles[articleId].title,
                    selection: "AutoJournalisted",
                }, 
            }).getResponseCode() == 201) {
                atLeastOneSent = true;
                journalist.articleIdsSentToInstapaper = journalist.articleIdsSentToInstapaper.concat(articleId);
            };
        });
        if (atLeastOneSent) db.save(journalist);
    }
}

function sendAllJournalistsToInstapaper () {
    JOURNALISTS_IDS.forEach(function (journalistId) { sendJournalistToInstapaper(journalistId) }); 
}