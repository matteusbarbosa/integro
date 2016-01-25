// In your test suite 
var express = require('express');
var app = express();
var router = express.Router();
var test = require('unit.js');
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
var assert = require('assert');
var subscription = require('../models/subscription.js');
var course = require('../models/course.js');

/*
	Login file tests
	*/

	describe('subscription tests', function(){

		it('morphTo course', function(done) {

			var cs = course.where({ id : 1 })
			.fetch({withRelated : ['subscriptions']});

			test.promise.given(cs).then(function (coursedata) {

				var cs = coursedata.toJSON();

				test.assert(cs.subscriptions !== null);


			}).catch(function(err){
				test.fail(err.message);
			}).finally(done)
			.done();

		});

	})