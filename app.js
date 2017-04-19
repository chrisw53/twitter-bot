var botReply = require('./controllers/replyController');
var botContent = require('./controllers/contentController');

console.log('bot is running...');

botReply();
setInterval(botContent(), 30*60*1000)