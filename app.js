var botInit = require('./controllers/initController');
var botRetweet = require('./controllers/retweetController');
var botReply = require('./controllers/replyController');

console.log('bot is running...');

botInit(botRetweet());
botReply();