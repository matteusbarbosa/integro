var express = require('express');
var app = express();
var examination = require('../models/examination');
var router = express.Router();
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
var date = require('../custom_modules/date').timezone(-180);
var subscription = require('./subscription');
var _ = require('lodash');

//models
var course = require('../models/course');
var user = require('../models/user');

router.get('/', function (req, res, next) {
	var data = {};

	res.render('sys/examinations', data);
});

router.get('/list', function (req, res, next) {

    course.where({id: req.session.access.course.id}).fetch({withRelated: ['discipline.examination']})
    .then(function (coursedata) {

        user.where({id: req.session.access.user.id })
        .fetch({withRelated : [ { subscriptions : function (query) { query.where('instance_type', 'examination'); }}, 'subscriptions.examination']})
        .then(function (subs_fetch){

            var data = {
                course : coursedata.toJSON(),
                user : subs_fetch.toJSON()
            };

            for(var c = 0; c < data.course.discipline.length; c++){

                for(var x = 0; x < data.course.discipline[c].examination.length; x++){

                    var exist = _.some(data.user.subscriptions, {instance_id : data.course.discipline[c].examination[x].id });

                    if(exist){
                        data.course.discipline[c].examination[x].subs = true;
                    }

                    data.course.discipline[c].examination[x].timecreated = date('(%a) :: %d de %B, %Hh:%Mm', data.course.discipline[c].examination[x].timecreated);
                    
                }
            }

            data.path = req.path;

            res.render('sys/listexaminations', data);
        });
    });
});

/*
 * ng json query
 */
 router.get('/search/:search', function (req, res, next) {

    examination.query(function (qb) {
        qb.where('title', 'LIKE', '%' + req.params.search + '%')
        .orWhere('details', 'LIKE', '%' + req.params.search + '%')
        .orWhere('details', 'LIKE', '%' + req.params.search + '%')
    }).fetchAll().then(function (examinationdata) {
        res.json(examinationdata.toJSON());
    });

});


 router.get('/home/redirected/:why', function (req, res, next) {
   var data = {};

   res.render('index', data);
});

 module.exports = router;