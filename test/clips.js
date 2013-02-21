var mocha = require('mocha');
var assert = require('assert');
var config = require('./config');
var Clips = require('../lib/clips').Clips;

describe('Testing Clips', function() {
	var clips = new Clips(config.auth);

	describe('#all()', function() {
		it('should return JSON of full clips data', function(done) {
			clips.all(function(err, data) {
				assert.ok(!err, 'No error');
				assert.ok(data, 'Has data');
				assert.ok(data.objects, 'Has clips array');
				done();
			});
		});
	});

	describe('#getById()', function() {
		it('should return JSON associated with an id', function(done) {
			clips.getById(config.clips.id, function(err, data) {
				assert.ok(!err, 'No error');
				assert.ok(data, 'Has data');
				assert.ok(data.title, 'Has title');
				assert.ok(data.url, 'Has url');
				assert.equal(data.id, config.clips.id, 'Return ID matches request ID');
				done();
			});
		});
	});

});
