var request = require('request');
var twitter = require('../statics/twitterAPI_KEY');

 function content() {
    var randomizer = Math.floor(Math.random() * 3);
    if(randomizer === 0) {
        request('https://api.chucknorris.io/jokes/random', function(err, res, body) {
            if(err) {
                console.log(err);
                return;
            }
            else {
                var data = JSON.parse(body).value;

                if(result.length < 140) {
                    twitter.post('statuses/update', {
                        status: data
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
                    chuck();
                }
            }
        });
    }
    else if(randomizer === 1) {
        request('http://tambal.azurewebsites.net/joke/random', function(err, res, body) {
            if(err) {
                console.log(err);
                return;
            }
            else{
                var data = JSON.parse(body).joke;

                twitter.post('statuses/update', {
                    status: data
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
    else if(randomizer === 2) {
        request('http://ron-swanson-quotes.herokuapp.com/v2/quotes', function(err, res, body) {
            if (err) {
                console.log(err);
            }
            else{
                var data = JSON.parse(body)[0];

                twitter.post('statuses/update', {
                    status: data
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
    else {
        throw new Error('randomizer has failed');
    }
}