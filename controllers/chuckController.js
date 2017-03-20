var request = require('request');
var twitter = require('../statics/twitterAPI_KEY');

module.exports = function chuck(tweet, username) {
    request('https://api.chucknorris.io/jokes/random', function(err, res, body) {
        if(err) {
            console.log(err);
            return;
        }
        else {
            var data = JSON.parse(body).value;
            var result = '@' + username + ' ' + data;

            if(result.length < 140) {
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
            else {
                chuck(tweet, username);
            }
        }
    });
}