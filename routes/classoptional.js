var express = require('express');
var app = express();
var classoptional = require('../models/classoptional');
var course = require('../models/course');
var router = express.Router();
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
var date = require('../custom_modules/date').timezone(-180);

router.get('/', function (req, res, next) {
	var data = {};

	res.render('sys/classoptionals', data);
});

router.get('/list', function (req, res, next) {

    course.where({id: 1}).fetch({withRelated: ['discipline.classoptional']}).then(function (coursedata) {

        var data = {
            course : coursedata.toJSON()
        };

        for(var c = 0; c < data.course.discipline.length; c++){

            for(var x = 0; x < data.course.discipline[c].classoptional.length; x++){

                data.course.discipline[c].classoptional[x].timecreated = date('(%a) :: %d de %B, %Hh:%Mm', data.course.discipline[c].classoptional[x].timecreated);

            }
        }

        data.path = req.path;

        res.render('sys/listclassoptionals', data);
    });
});

/*
 * ng click bind
 */
router.get('/bind/:id', function (req, res, next){

    bind.forge({
        user_id : req.session.access.user.id,
        instance_id : req.params.id,
        instance_type : 'classoptional'
    })
    .save()
    .then(bindsave => res.status(200))
    .catch(error => res.status(500)
            //.send(error.message)
            );
});

/*
 * ng json query
 */
 router.get('/search/:search', function (req, res, next) {

    classoptional.query(function (qb) {
        qb.where('title', 'LIKE', '%' + req.params.search + '%')
        .orWhere('details', 'LIKE', '%' + req.params.search + '%')
        .orWhere('details', 'LIKE', '%' + req.params.search + '%')
    }).fetchAll().then(function (classoptionaldata) {
        res.json(classoptionaldata.toJSON());
    });

});


router.get('/home/redirected/:why', function (req, res, next) {
	var data = {};

	res.render('index', data);
});

module.exports = router;