var botInit = require('./controllers/initController');
var botRetweet = require('./controllers/retweetController');

console.log('bot is running...');

botInit(botRetweet());