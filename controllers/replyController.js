var twitter = require('../statics/twitterAPI_KEY');
var watson = require('../statics/watsonAPI_KEY');
var swanson = require('./swansonController');
var weather = require('./weatherController');
var joke = require('./jokeController');
var chuck = require('./chuckController');

module.exports = function botReplyInit() {
    var stream = twitter.stream('statuses/filter', { track: '@Felicia_Bot' });

    stream.on('tweet', function(tweet) {
        var cleanTweet = tweet.text.replace(/@(\w+)/g, '').replace(/#(\w+)/g, '');
        //cleans up the tweet so the @ and # are deleted

        var username = tweet.user.screen_name;

        var statusID = tweet.id_str;
        
        watson.message({
            input: { text: cleanTweet }
        }, processResponse);

        function processResponse(err, response) {
            if (err) {
                console.log(err); 
                return;
            }
            else if (response.output.action === 'ron_swanson') {
                swanson(tweet, username);
            }
            else if (response.output.action === 'weather') {
                if (tweet.place == null) {
                    twitter.post('statuses/update', {
                        status: '@' + username + ' turn on your location tag so I know where you are, then ask me the weather again',
                        in_reply_to_status_id: tweet.id_str
                    }, function (err, response) {
                        if (err) {
                            console.log(err);
                            return;
                        }
                    });
                }
                else{
                    weather(tweet, username);
                }
            }
            else if (response.output.action === 'joke') {
                joke(tweet, username);
            }
            else if (response.output.action === 'chuck') {
                chuck(tweet, username);
            }
            else {
                var result = '@' + username + ' ' + response.output.text[0];

                twitter.post('statuses/update', {
                    status: result,
                    in_reply_to_status_id: tweet.id_str
                }, function(err, response) {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    else {
                        console.log('I posted ' + result);
                    }
                });
            }
        }
    })
}