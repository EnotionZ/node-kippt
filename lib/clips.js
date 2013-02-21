var Request = require('./request').Request;

function Clips(opts) {
	this.request = new Request(opts.username, opts.api_token);
}

Clips.prototype.all = function(fn) {
	this.request.get('clips/', fn);
};

Clips.prototype.getById = function(id, fn) {
	this.request.get('clips/'+id, fn);
};

exports.Clips = Clips;
