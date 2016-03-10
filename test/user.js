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

	describe('user::profile', function(){

		it('get user course', function(done) {

			var user_id = 1;

			var u = user.where({id : user_id }).fetch(
				{withRelated : [{ 
					binds : function(qb) { qb.where('instance_type', 'course').orderBy('timestart', 'DESC')},
				}, 'binds.course.disciplines']}
				);

			test.promise.given(u).then(function (userdata) {

				var data = {};

				data.user = userdata.toJSON();

				console.log(data.user.binds[0].course);



				console.log(data.course);

				data.user.timecreated = date('(%a) :: %d de %B, %Hh:%Mm', new Date(data.user.timecreated));
				data.user.timelastlogin = date('(%a) :: %d de %B, %Hh:%Mm', new Date(data.user.timelastlogin));

			}).catch(function(err){
				test.fail(err.message);
			}).finally(done);


		});
});
