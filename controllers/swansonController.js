var twitter = require('../statics/twitterAPI_KEY');
var request = require('request');

module.exports = function swanson(tweet, username) {
    request('http://ron-swanson-quotes.herokuapp.com/v2/quotes', function(err, res, body) {
        if (err) {
            console.log(err);
        }
        else{
            var data = JSON.parse(body)[0];
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