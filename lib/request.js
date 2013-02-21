var https = require('https');

function Request(username, api_token) {
	this.username = username;
	this.api_token = api_token;
	this.baseUrl = '/api/';
	this.host = 'kippt.com';
}

Request.prototype.getOpts = function(type, method, params) {
	var obj = {
		hostname: this.host,
		method: type,
		path: this.baseUrl + method,
		headers: {
			'X-Kippt-Username': this.username,
			'X-Kippt-API-Token': this.api_token
		}
	};
	if(type !== 'DELETE') {
		params = JSON.stringify(params);
		obj.params = params;
		obj.headers['Content-Length'] = params.length;
		obj.headers['Content-Type'] = 'application/json';
	}
	return obj;
};

Request.prototype.post = function(method, params, fn) {
	this.execute(this.getOpts('POST', method, params), fn);
};

Request.prototype.del = function(method, fn) {
	this.execute(this.getOpts('DELETE', method), fn);
};

Request.prototype.put = function(method, params, fn) {
	this.execute(this.getOpts('PUT', method, params), fn);
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
	var params = opts.params;
	delete opts.params;

	var req = https.request(opts, function(res) {
		var chunks  = '';
		res.on('data', function(resultData) { chunks += resultData; });
		res.on('end', function() { fn(null, opts.method === 'DELETE' ? chunks : JSON.parse(chunks)); });
	});
	if(params) req.write(params);
	req.on('error', fn);
	req.end();
};

exports.Request = Request;
