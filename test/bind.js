// In your test suite 
var express = require('express');
var app = express();
var router = express.Router();
var test = require('unit.js');
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
var assert = require('assert');
var bind = require('../models/bind.js');
var course = require('../models/course.js');
var user = require('../models/user.js');

/*
	Login file tests
	*/

	describe('bind tests', function(){

		it('get user course bind', function(done) {

			var u = user.where({ id : 1 })
			.fetch({withRelated : [ { binds : function(query) { query.where('instance_type', 'course'); }}]});

			test.promise.given(u).then(function (userdata) {

				var user = userdata.toJSON();

				test.assert(user.binds[0].instance_type == 'course');


			}).catch(function(err){
				test.fail(err.message);
			}).finally(done);

		});

		it('get course binds', function(done) {

			var cs = course.where({ id : 1 })
			.fetch({withRelated : [{ binds : function(query) { query.where('instance_type', 'course'); }}]});

			test.promise.given(cs).then(function (coursedata) {

				var cs = coursedata.toJSON();

				test.assert(cs.binds[1] !== null);

			}).catch(function(err){
				test.fail(err.message);
			}).finally(done)
			.done();

		});

	})