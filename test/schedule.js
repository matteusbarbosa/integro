	// In your test suite 
	var express = require('express');
	var app = express();
	var router = express.Router();
	var test = require('unit.js');
	var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
	var assert = require('assert');

/*
	Login file tests
	*/

//models
var schedule = require('../models/schedule');
var bind = require('../models/bind');

describe('schedule::vacancies::check', function(){
	
	it('returns vacancies left', function() {

		var instance_type_mock = 'examination';
		var instance_id_mock = 1;

		var sch = schedule.where({instance_type: instance_type_mock, instance_id: instance_id_mock})
		.fetch();

		test.promise.given(sch).then(function (scheduledata) {

			test.assert(scheduledata !== null);

			var data = {};
			data.schedule = scheduledata.toJSON();

			var bd = bind.where({instance_type: data.schedule.instance_type, instance_id: data.schedule.instance_id})
			.count();

			test.promise.given(bd).then(function (bind_count) {
				return data.schedule.vacancies - bind_count;
			});						
		});
	});
});