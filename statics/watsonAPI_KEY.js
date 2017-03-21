var Watson = require('watson-developer-cloud/conversation/v1');

module.exports = new Watson({
    username: process.env.WATSON_USERNAME,
    password: process.env.WATSON_PASSWORD,
    path: { workspace_id: process.env.WATSON_WORKPLACE_ID },
    version_date: Watson.VERSION_DATE_2017_02_03
});