var Twitter = require('twit');

var TWITTER_CONSUMER_KEY = 'YOUR KEY HERE';
var TWITTER_CONSUMER_SECRET = 'YOUR KEY HERE';
var TWITTER_ACCESS_TOKEN_KEY = 'YOUR KEY HERE';
var TWITTER_ACCESS_TOKEN_SECRET = 'YOUR KEY HERE';

module.exports = new Twitter({
    consumer_key: TWITTER_CONSUMER_KEY,
    consumer_secret: TWITTER_CONSUMER_SECRET,
    access_token: TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: TWITTER_ACCESS_TOKEN_SECRET
});