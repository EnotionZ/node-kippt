var Clips = require('./clips').Clips;
var Lists = require('./lists').Lists;


function KipptAPI(opts) {
	this._configure(opts);
}

KipptAPI.prototype._configure = function(opts) {
	this.clips = new Clips(opts);
	this.lists = new Lists(opts);
};

exports.KipptAPI = KipptAPI;
exports.Clips = Clips;
exports.Lists = Lists;
