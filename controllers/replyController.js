var twitter = require('../statics/twitterAPI_KEY');
var watson = require('../statics/watsonAPI_KEY');

function botReplyInit() {
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
                        console.log('I posted ' + result)
                    }
                });
            }
        }
    })
}

botReplyInit();