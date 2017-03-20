var twitter = require('../statics/twitterAPI_KEY');
var weather = require('weather-js');

module.exports = function weatherController(tweet, username) {
    weather.find({ search: tweet.place.full_name, degreeType: 'F' }, function(err, response) {
        if(err) {
            console.log(err);
        }
        else{
            var currentWeather = response[0].current;
            var result = '@' + username + ' It is ' + currentWeather.skytext + ' outside. The temperature is ' + currentWeather.temperature + ' degrees fahrenheit, it feels like ' + currentWeather.feelslike + ' degrees fahrenheit.';

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
    })
}