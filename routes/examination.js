var express = require('express');
var app = express();
var examination = require('../models/examination');
var router = express.Router();
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
var date = require('../custom_modules/date').timezone(-180);
var _ = require('lodash');

//models
var course = require('../models/course');
var user = require('../models/user');
var bind = require('../models/bind');

router.get('/', function (req, res, next) {

    res.render('sys/examinations');
});

router.get('/list', function (req, res, next) {

    res.render('sys/listexaminations');
});

/*
JSON
*/
router.get('/bycourse/:courseid', function (req, res, next) {

    //course.where({id: req.session.access.course.id}).fetch({withRelated: ['discipline.examination']})
    course.where({id: req.params.courseid }).fetch({withRelated: ['discipline.examination']})
    .then(function (coursedata) {

        //user.where({id: req.session.access.user.id })
        user.where({id: 1 })
        .fetch({withRelated : [ { binds : function (query) { query.where('instance_type', 'examination'); }}, 'binds.examination']})
        .then(function (subs_fetch){

            var data = coursedata.toJSON();
            data.user = subs_fetch.toJSON();

            for(var c = 0; c < data.discipline.length; c++){

                for(var x = 0; x < data.discipline[c].examination.length; x++){

                    var exist = _.some(data.user.binds, {instance_id : data.discipline[c].examination[x].id });

                    if(exist){
                        data.discipline[c].examination[x].subs = true;
                    }

                    data.discipline[c].examination[x].timecreated = date('(%a) :: %d de %B, %Hh:%Mm', data.discipline[c].examination[x].timecreated);
                    
                }
            }

            res.json(data);
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

 /*
 * ng click bind
 */
router.get('/bind/:id', function (req, res, next){

    bind.forge({
        user_id : req.session.access.user.id,
        instance_id : req.params.id,
        instance_type : 'examination'
    })
    .save()
    .then(bindsave => res.status(200))
    .catch(error => res.status(500)
            //.send(error.message)
            );
});

 /*
 * ng click unlink
 */
router.get('/unlink/:id', function (req, res, next){

    bind.where({
        user_id : req.session.access.user.id,
        instance_id : req.params.id,
        instance_type : 'examination'
    })
    .destroy()
    .then(binddestroy => res.status(200))
    .catch(error => res.status(500)
            //.send(error.message)
            );
});


 router.get('/home/redirected/:why', function (req, res, next) {
     var data = {};

     res.render('index', data);
 });

 module.exports = router;