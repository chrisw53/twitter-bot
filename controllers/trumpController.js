var request = require('request');
var twitter = require('../statics/twitterAPI_KEY');

module.exports = function tweetToTrump() {
    var randomizer = Math.floor(Math.random() * 2);

    if(randomizer == 0) {
        request('https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=Donald', function(err, res, body) {
            if(err) {
                console.log(err);
            }
            else {
                var data = JSON.parse(body).message;
                var result = '@realDonaldTrump ' + data + ' - Donald Trump';

                if(result.length < 120) {
                    twitter.post('statuses/update', {status: result}, function(err, res) {
                        if(err) {
                            console.log(err);
                            return;
                        }
                        else {
                            console.log('I posted ' + result);
                        }
                    })
                }
                else {
                    tweetToTrump();
                }
            }
        });
    }
    else {
        request('https://api.whatdoestrumpthink.com/api/v1/quotes/random', function(err, res, body) {
            if(err) {
                console.log(err);
            }
            else {
                var data = JSON.parse(body).message;
                var result = '@realDonaldTrump ' + data + ' - Donald Trump';

                if(result.length < 120) {
                    twitter.post('statuses/update', {status: result}, function(err, res) {
                        if(err) {
                            console.log(err);
                            return;
                        }
                        else {
                            console.log('I posted ' + result);
                        }
                    })
                }
                else {
                    tweetToTrump();
                }
            }
        });
    }

    setInterval(tweetToTrump, 60*60*1000)
}