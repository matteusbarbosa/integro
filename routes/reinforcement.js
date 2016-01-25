var express = require('express');
var app = express();
var reinforcement = require('../models/reinforcement');
var course = require('../models/course');
var router = express.Router();
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
var date = require('../custom_modules/date').timezone(-180);

router.get('/', function (req, res, next) {
	var data = {};

	res.render('sys/reinforcements', data);
});

router.get('/list', function (req, res, next) {

    course.where({id: 1}).fetch({withRelated: ['discipline.reinforcement']}).then(function (coursedata) {

        var data = {
            course : coursedata.toJSON()
        };

        for(var c = 0; c < data.course.discipline.length; c++){

            for(var x = 0; x < data.course.discipline[c].reinforcement.length; x++){

                data.course.discipline[c].reinforcement[x].timecreated = date('(%a) :: %d de %B, %Hh:%Mm', data.course.discipline[c].reinforcement[x].timecreated);

            }
        }

        res.render('sys/listreinforcements', data);
    });
});

/*
 * ng json query
 */
 router.get('/search/:search', function (req, res, next) {

    reinforcement.query(function (qb) {
        qb.where('title', 'LIKE', '%' + req.params.search + '%')
        .orWhere('details', 'LIKE', '%' + req.params.search + '%')
        .orWhere('details', 'LIKE', '%' + req.params.search + '%')
    }).fetchAll().then(function (reinforcementdata) {
        res.json(reinforcementdata.toJSON());
    });

});


router.get('/home/redirected/:why', function (req, res, next) {
	var data = {};

	res.render('index', data);
});

module.exports = router;