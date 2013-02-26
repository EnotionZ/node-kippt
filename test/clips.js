var mocha = require('mocha');
var assert = require('assert');
var config = require('./config');
var Clips = require('../lib/clips').Clips;

describe('Testing Clips', function() {
	var clips = new Clips(config.auth);

	describe('#search()', function() {
		it('should return information about the query', function(done) {
			clips.search({
				q: 'javascript',
				is_starred: false
			},function(err, data) {
				assert.ok(!err, 'No error');
				assert.ok(data, 'Has data');
				assert.ok(data.objects, 'Has clips array');
				done();
			});
		});
	});

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

	describe('#get()', function() {
		it('should return JSON associated with an id', function(done) {
			clips.get(config.clips.id, function(err, data) {
				assert.ok(!err, 'No error');
				assert.ok(data, 'Has data');
				assert.ok(data.title, 'Has title');
				assert.ok(data.url, 'Has url');
				assert.equal(data.id, config.clips.id, 'Return ID matches request ID');
				done();
			});
		});
	});

	describe('#update()', function() {
		it('should be able to update a clip', function(done) {
			var opts = {
				id: config.clips.id,
				notes: 'Some random text ' +Math.random()
			};
			clips.update(opts, function(err, data) {
				assert.ok(!err, 'No error');
				assert.equal(data.notes, opts.notes, 'Saved data equals post data');
				done();
			});
		});
	});

	describe('#add() and #remove()', function() {
		it('should be able to add and remove clips', function(done) {
			var url = 'https://github.com/EnotionZ/node-kippt';
			clips.add({url: url}, function(err, data) {
				assert.ok(!err, 'No error');
				assert.equal(data.url, url, 'Saved url equals post url');
				clips.remove(data.id, function(err) {
					assert.ok(!err, 'No error');
					done();
				});
			});
		});
	});

});
