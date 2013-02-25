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

// add to the clips list
kippt.clips.add({
  url: "Clip's url",    // required
  title: "Clip's title",
  list: "resource_uri for clip's list",
  notes: "Notes for the clip",
  is_starred: Boolean,
  is_read_later: Boolean
}, function(error, data) {
  if(!error) console.log(data);
});

// update the clip, refer to above options
kippt.clips.update({
  id: CLIP_ID, // require
  other_options: '' // refer to above options
}, function(error, data) {
  if(!error) console.log(data);
});

// remove the clip
kippt.clips.remove(CLIP_ID, function(error, data) {
  if(!error) console.log('SUCCESS');
});

// search clips
kippt.clips.search({
  q: 'search_query',
  is_starred: Boolean
}, function(error, data) {
  if(!error) console.log(data);
});
```

### Lists API
``` js
// Returns the full lists object
kippt.lists.all(function(error, data) {
  if(!error) console.log(data);
});

// Returns the list information associated with a list ID
kippt.lists.getById(LIST_ID, function(error, data) {
  if(!error) console.log(data);
});

// add to the list
kippt.lists.add({
  title: "list title", // required
  is_private: Boolean
}, function(error, data) {
  if(!error) console.log(data);
});

// update the list
kippt.lists.update({
  id: LIST_ID, // require
  title: "list title",
  is_private: Boolean
}, function(error, data) {
  if(!error) console.log(data);
});

// remove an item from the list
kippt.clips.remove(LIST_ID, function(error, data) {
  if(!error) console.log('SUCCESS');
});
```
