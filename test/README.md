Copy `config.sample.js` to `config.js`
Replace `username` and `api_token` with your own credentials

Go to project root and run `mocha -t 20000`
If you get timeout error, it could be that Kippt is taking a long time to respond.
Just run test with a higher timeout value.
