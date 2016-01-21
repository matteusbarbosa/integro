var express = require('express');
var app = express();
var course = require('../models/course');
var router = express.Router();
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
var date = require('../custom_modules/date').timezone(-180);

router.get('/', function (req, res, next) {
	var data = {};

	res.render('sys/examinations', data);
});

router.get('/list', function (req, res, next) {

    course.where({id: 1}).fetch({withRelated: ['discipline.examination']}).then(function (coursedata) {

        var data = {};

        console.log(coursedata);

        data.course = coursedata.toJSON();

        for(var c = 0; c < data.course.discipline.length; c++){
        	console.log(c);
            for(var x = 0; x < data.course.discipline[c].examination.length; x++){

            	console.log(data.course.discipline[c].examination[x]);

                 data.course.discipline[c].examination[x].timecreated = date('(%a) :: %d de %B, %Hh:%Mm', new Date(data.course.discipline[c].examination[x].timecreated));
            }
        }
        
        res.render('sys/listexaminations', data);       
    });
});


router.get('/home/redirected/:why', function (req, res, next) {
	var data = {};

	res.render('index', data);
});

module.exports = router;