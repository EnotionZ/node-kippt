var Request = require('./request').Request;

function Lists(opts) {
	this.request = new Request(opts.username, opts.api_token);
}

Lists.prototype.all = function(fn) {
	this.request.get('lists/', fn);
};

Lists.prototype.get = function(id, fn) {
	if(typeof id === 'function') {
		this.all(id);
	} else {
		this.request.get('lists/'+id, fn);
	}
};

Lists.prototype.add = function(opts, fn) {
	this.request.post('lists/', opts, fn);
};

Lists.prototype.remove = function(id, fn) {
	this.request.del('lists/'+id, fn);
};

Lists.prototype.update = function(opts, fn) {
	this.request.put('lists/'+opts.id, opts, fn);
};

exports.Lists = Lists;

