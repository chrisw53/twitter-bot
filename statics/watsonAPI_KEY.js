var Watson = require('watson-developer-cloud/conversation/v1');

module.exports = new Watson({
    username: 'YOUR KEY HERE',
    password: 'YOUR KEY HERE',
    path: { workspace_id: 'YOUR KEY HERE' },
    version_date: Watson.VERSION_DATE_2017_02_03
});