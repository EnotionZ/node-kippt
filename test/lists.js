var mocha = require('mocha');
var assert = require('assert');
var config = require('./config');
var Lists = require('../lib/lists').Lists;

describe('Testing lists', function() {
	var lists = new Lists(config.auth);

	describe('#all()', function() {
		it('should return JSON of lists data', function(done) {
			lists.all(function(err, data) {
				assert.ok(!err, 'No error');
				assert.ok(data, 'Has data');
				assert.ok(data.objects, 'Has clips array');
				assert.ok(data.objects.length > 0, 'Has clips array');
				done();
			});
		});
	});

	describe('#get()', function() {
		it('should return JSON associated with an id', function(done) {
			lists.get(config.lists.id, function(err, data) {
				assert.ok(!err, 'No error');
				assert.ok(data, 'Has data');
				assert.ok(data.title, 'Has title');
				assert.ok(data.slug, 'Has slug');
				assert.ok(data.user, 'Has user');
				assert.equal(data.id, config.lists.id, 'Return ID matches request ID');
				done();
			});
		});
	});

	describe('#update()', function() {
		it('should be able to update a list', function(done) {
			var opts = {
				id: config.lists.id,
				title: 'Some random text ' +Math.random()
			};
			lists.update(opts, function(err, data) {
				assert.ok(!err, 'No error');
				assert.equal(data.title, opts.title, 'Saved data equals post data');
				done();
			});
		});
	});

	describe('#add() and #remove()', function() {
		it('should be able to add and remove lists', function(done) {
			var title = 'New List';
			lists.add({title: title}, function(err, data) {
				assert.ok(!err, 'No error');
				assert.equal(data.title, title, 'Saved url equals post url');
				lists.remove(data.id, function(err) {
					assert.ok(!err, 'No error');
					done();
				});
			});
		});
	});

});

