var express = require('express');
var app = express();
var router = express.Router();
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');

//models
var schedule = require('../models/schedule');
var bind = require('../models/bind');

router.get('/', function (req, res, next) {
	var data = {};
	res.render('index', data);
});

router.get('/home', function (req, res, next) {
	var data = {};

	if(req.session.auth){
		res.redirect('/login');
	}

	res.render('index', data);
});

router.get('/home/redirected/:why', function (req, res, next) {
	var data = {};

	res.render('index', data);
});

/*
JSON
*/
router.get('/vacancies/check/:instance_type/:instance_id', function (req, res, next) {

	var sch = schedule.where({instance_type: req.params.instance_type, instance_id: req.params.instance_id})
	.fetch().then(function (scheduledata) {

		if(scheduledata === null)
			return res.json({ vacancies_left : 0});

		var data = {};

		var bd = bind.where({instance_type: scheduledata.toJSON().instance_type, instance_id: scheduledata.toJSON().instance_id})
		.count().then(function (bind_count) {

			if(bind_count === null)
				return res.json({ vacancies_left : 0});

			data.vacancies_left = scheduledata.toJSON().vacancies - bind_count;

			return res.json(data);	

		});		
		
	});
});

module.exports = router;