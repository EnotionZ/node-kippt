var Clips = require('./clips').Clips;


function KipptAPI(opts) {
	this._configure(opts);
}

KipptAPI.prototype._configure = function(opts) {
	this.clips = new Clips(opts);
};

exports.KipptAPI = KipptAPI;
exports.Clips = Clips;
