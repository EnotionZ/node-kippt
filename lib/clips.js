var Request = require('./request').Request;

function Clips(opts) {
	this.request = new Request(opts.username, opts.api_token);
}

Clips.prototype.search = function(opts, fn) {
	var paramsArr = [];
	for(var key in opts) {
		if(opts.hasOwnProperty(key)) {
			paramsArr.push(key + '=' + opts[key]);
		}
	}
	var path = 'search/clips/?' + paramsArr.join('&');
	this.request.get(path, opts, fn);
};

Clips.prototype.all = function(fn) {
	this.request.get('clips/', fn);
};

Clips.prototype.get = function(id, fn) {
	if(typeof id === 'function') {
		this.all(id);
	} else {
		this.request.get('clips/'+id, fn);
	}
};

Clips.prototype.add = function(opts, fn) {
	this.request.post('clips/', opts, fn);
};

Clips.prototype.remove = function(id, fn) {
	this.request.del('clips/'+id, fn);
};

Clips.prototype.update = function(opts, fn) {
	this.request.put('clips/'+opts.id, opts, fn);
};

exports.Clips = Clips;
