var twitter = require('../statics/twitterAPI_KEY');
var request = require('request');

module.exports = function joke(tweet, username) {
    request('http://tambal.azurewebsites.net/joke/random', function(err, res, body) {
        if(err) {
            console.log(err);
            return;
        }
        else{
            var data = JSON.parse(body).joke;
            var result = '@' + username + ' ' + data;

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
    });
}