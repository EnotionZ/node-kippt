# node-kippt

A wrapper for the [Kippt](http://kippt.com) API.

## Installation
You can install using Node Package Manager (npm)
```
npm install node-kippt
```
Or define in your `package.json` dependencies


## Usage

Refer to the [Kippt developer API page](https://kippt.com/developers/) for information about the API response.

### Initialize
``` js
var Kippt = require('node-kippt');

// Initialize the KipptAPI
// You can easily obtain the API token by running
//   curl --user name:password https://kippt.com/api/account/
var kippt = new Kippt.KipptAPI({
  username: 'YOUR_USERNAME',
  api_token: 'API_TOKEN'
});
```

### Clips API
``` js
// Returns the full clips listing
kippt.clips.all(function(error, data) {
  if(!error) console.log(data);
});

// Returns the clip information associated with a clip ID
kippt.clips.getById(CLIP_ID, function(error, data) {
  if(!error) console.log(data);
});
```
