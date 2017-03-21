# What this is:
A simple twitter bot that automatically retweets memes and engages in casual conversations that either runs on a server or locally.

# What you'll need:
1. A twitter account
2. NPM
3. Node JS

# How to deploy locally: 
1. Download the source code and run `npm install` to grab the dependencies
2. Register a twitter account with a mobile number and proceed to apps.twitter.com
3. Create a new app, generate a pair of access token and secret.
4. Similarly get a IBM bluemix account, start a Watson Conversation workspace.
4. Replace all the 'process.env.xxx' with your keys in the twitterAPI_KEY and watsonAPI_KEY under statics folder.
5. You can add, delete or change the search query by customizing the queryArr array in query under the statics folder.
6. Run `npm start` or `node app.js`, and have fun!

# How to deploy via heroku:
1. Register a heroku account and install heroku toolbelt to be able to interact with heroku via CLI.
2. Initiate a git repo in the project directory
3. Run `heroku login` to log into heroku in CLI.
4. Run `heroku create <app name>` to create an app in heroku
5. Set up all of your environment variables (API keys) in heroku so you don't have to keep them in the code
6. Plug in your environemt variables into the API_KEY files (just replace my keyname after process.env with yours).
7. Commit your changes with git and run `git push heroku master` to get the party started :)