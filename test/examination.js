// In your test suite 
var express = require('express');
var app = express();
var router = express.Router();
var test = require('unit.js');
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
var assert = require('assert');
var date = require('../custom_modules/date').timezone(-180);

//models
var course = require('../models/course');
var user = require('../models/user');
/*
	Login file tests
	*/

	describe('examination::list', function(){

		it('get user examinations', function() {

			user.where({id : 1})
			.fetch({ 'withRelated' : ['subscriptions.examination'] })
			.then(function(subs_fetch){

				console.log(subs_fetch.toJSON());

        /*
        subscription
        .where({ instance_type : 'examination', user_id : req.session.access.user.id})
        .fetch({ withRelated : 'examination' })
        .then(function(ex_subs){

        }); */
		});
		});
	});
