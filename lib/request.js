var https = require('https');

function Request(username, api_token) {
	this.username = username;
	this.api_token = api_token;
	this.baseUrl = '/api/';
	this.host = 'kippt.com';
}

Request.prototype.getOpts = function(type, method, params) {
	var paramStr, path, paramsArr = [];
	for(var key in params) {
		if(params.hasOwnProperty(key)) {
			paramsArr.push(key + '=' + params[key]);
		}
	}
	paramStr = '?' + paramsArr.join('&');
	path = this.baseUrl + method + paramStr;

	return {
		hostname: this.host,
		method: type,
		path: path,
		headers: {
			'X-Kippt-Username': this.username,
			'X-Kippt-API-Token': this.api_token
		}
	};
};


Request.prototype.get = function(method, params, fn) {
	if(typeof params === 'function') {
		fn = params;
		params = {};
	} else if(typeof params === 'undefined' && typeof fn !== 'function') {
		fn({ message: 'Missing callback' });
		return;
	}
	this.execute(this.getOpts('GET', method, params), fn);
};

Request.prototype.execute = function(opts, fn) {

	var req = https.request(opts, function(res) {
		var chunks  = '';
		res.on('data', function(resultData) { chunks  += resultData; });
		res.on('end', function() { fn(null, JSON.parse(chunks)); });
	});
	req.end();
	req.on('error', fn);
};

exports.Request = Request;
