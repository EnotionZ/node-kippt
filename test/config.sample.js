/**
 * copy file over to config.js with your own information
 * you can get your account's token by running
 *    curl --user name:password https://kippt.com/api/account/
 */
module.exports = {
	auth: {
		username: 'YOUR_USERNAME',
		api_token: 'YOUR_API_TOKEN'
	},
	clips: {
		// A clip ID you know to be existing
		id: 'SOME_ID'
	},
	lists: {
		// A list ID you know to exist
		id: 'SOME_ID'
	}
};
