var express = require('express');
var app = express();
var support = require('../models/support');
var course = require('../models/course');
var router = express.Router();
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
var date = require('../custom_modules/date').timezone(-180);

router.get('/', function (req, res, next) {
	var data = {};

	res.render('sys/supports', data);
});

router.get('/list', function (req, res, next) {

    course.where({id: 1}).fetch({withRelated: ['discipline.support']}).then(function (coursedata) {

        var data = {
            course : coursedata.toJSON()
        };

        for(var c = 0; c < data.course.discipline.length; c++){

            for(var x = 0; x < data.course.discipline[c].support.length; x++){

                data.course.discipline[c].support[x].timecreated = date('(%a) :: %d de %B, %Hh:%Mm', data.course.discipline[c].support[x].timecreated);

            }
        }

        res.render('sys/listsupports', data);
    });
});

 router.get('/profile/:id', function (req, res, next) {

    support.query(function (qb) {
        qb.where('title', 'LIKE', '%' + req.params.search + '%')
        .orWhere('details', 'LIKE', '%' + req.params.search + '%')
        .orWhere('details', 'LIKE', '%' + req.params.search + '%')
    }).fetchAll().then(function (supportdata) {
        res.json(supportdata.toJSON());
    });

});

/*
 * ng json query
 */
 router.get('/search/:search', function (req, res, next) {

    support.query(function (qb) {
        qb.where('title', 'LIKE', '%' + req.params.search + '%')
        .orWhere('details', 'LIKE', '%' + req.params.search + '%')
        .orWhere('details', 'LIKE', '%' + req.params.search + '%')
    }).fetchAll().then(function (supportdata) {
        res.json(supportdata.toJSON());
    });

});


router.get('/home/redirected/:why', function (req, res, next) {
	var data = {};

	res.render('index', data);
});

module.exports = router;