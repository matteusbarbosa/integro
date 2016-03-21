var express = require('express');
var app = express();
var router = express.Router();
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
var date = require('../custom_modules/date').timezone(-180);
var _ = require('lodash');
var session = require('express-session');
router.use(session({
    /*    genid: function(req) {
     return expiryDate; // use UUIDs for session IDs
 },*/
 secret: 'integro',
 resave: false,
 saveUninitialized: true,
 cookie: {maxAge: null, secure: false}
}));

//models
var classoptional = require('../models/classoptional');
var course = require('../models/course');
var user = require('../models/user');
var bind = require('../models/bind');

router.get('/', function (req, res, next) {
	var data = {};

	res.render('sys/classoptionals', data);
});
router.get('/list', function (req, res, next) {
    res.render('sys/listclassoptionals');
});

/*
JSON
*/
router.get('/bycourse/:courseid', function (req, res, next) {

    course.where({id: req.params.courseid }).fetch({withRelated: ['classoptional']})
    .then(function (coursedata) {

        //user.where({id: req.session.access.user.id })
        user.where({id: 1 })
        .fetch({withRelated : [ { binds : function (query) { query.where('instance_type', 'classoptional'); }}, 'binds.classoptional']})
        .then(function (subs_fetch){

            var data = coursedata.toJSON();
            data.user = subs_fetch.toJSON();

                for(var c = 0; c < data.classoptional.length; c++){

                    var exist = _.some(data.user.binds, {instance_id : data.classoptional[c].id });

                    if(exist){
                        data.classoptional[c].subs = true;
                    }

                    data.classoptional[c].timestart = date('(%a) :: %d de %B, %Hh:%Mm', new Date(data.classoptional[c].timestart));
                    
                }

            res.json(data);
        });
    });
});

 /*
 * ng click bind
 */
router.get('/bind', function (req, res, next){

    bind.forge({
        /* user_id : req.session.access.user.id, */
        user_id : req.query.user_id,
        instance_id : req.query.id,
        instance_type : 'classoptional',
        timestart: Date.now()
    })
    .save()
    .then(success => res.status(200).send(success))
    .catch(error => res.status(500)
            .send(error.message)
    );
});

 /*
 * ng click unlink
 */
router.get('/unlink', function (req, res, next){

    bind.where({
        /* user_id : req.session.access.user.id, */
        user_id : req.query.user_id,
        instance_id : req.query.id,
        instance_type : 'classoptional'
    })
    .destroy()
    .then(success => {
        res.status(200).send(success);
    })
    .catch(error => {
           res.status(500)
            .send(error.message);
    }
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