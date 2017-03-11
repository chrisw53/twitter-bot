var twitter = require('../statics/twitterAPI_KEY');
var TWITTER_SEARCH_PHRASE = require('../statics/query');

var query = {
    q: TWITTER_SEARCH_PHRASE,
    result_type: "recent",
    lang: 'en'
}

module.exports = function botRetweetInit() {
    twitter.get('search/tweets', query, botRetweet);

    function botRetweet(error, data, response) {
        if (error) {
            console.log('Uh oh, bot cannot find the tweet: ' + error);
        }
        else {
            var id = {
                id: data.statuses[1].id_str
            }

            twitter.post('statuses/retweet/:id', id, botRetweeted);

            function botRetweeted(error, data, response) {
                if (error) {
                    console.log('Uh oh, bot cannot retweet the tweet ' + error);
                }
                else {
                    console.log('The bot just retweeted a tweet by ' + data.retweeted_status.user.name );
                }
            }
        }
    }

    setInterval(botRetweetInit, 30*60*1000);
}