var twitter = require('../statics/twitterAPI_KEY');
var TWITTER_SEARCH_PHRASE = require('../statics/query');

var query = {
    q: TWITTER_SEARCH_PHRASE,
    result_type: "mixed",
    lang: 'en'
}

module.exports = function botInit(retweet) {
    twitter.get('search/tweets', query, botSearchInit);

    function botSearchInit(error, data, response) {
        if (error) {
            console.log('Uh oh, bot cannot initialize search: ' + error);
        }
        else {
            var id = {
                id: data.statuses[0].id_str
            };

            twitter.post('statuses/retweet/:id', id, botRetweetInit); 

            function botRetweetInit(error, data, response) {
                if (error) {
                    console.log('Uh oh, bot cannot initialize retweet ' + error);
                }
                else {
                    console.log('Beep de bop de doop, bot initialized');
                }
            };
        }
    };

   retweet;
};