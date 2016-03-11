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
var reinforcement = require('../models/reinforcement');
var course = require('../models/course');
var user = require('../models/user');
var bind = require('../models/bind');

router.get('/', function (req, res, next) {
	var data = {};

	res.render('sys/reinforcements', data);
});

router.get('/list', function (req, res, next) {
    res.render('sys/listreinforcements');
});

/*
JSON
*/
router.get('/bycourse/:courseid', function (req, res, next) {

    //course.where({id: req.session.access.course.id}).fetch({withRelated: ['discipline.reinforcement']})
    course.where({id: req.params.courseid }).fetch({withRelated: ['disciplines.reinforcements']})
    .then(function (coursedata) {

        //user.where({id: req.session.access.user.id })
        user.where({id: 1 })
        .fetch({withRelated : [ { binds : function (query) { query.where('instance_type', 'reinforcements'); }}, 'binds.reinforcements']})
        .then(function (subs_fetch){

            var data = coursedata.toJSON();
            data.user = subs_fetch.toJSON();

            for(var c = 0; c < data.disciplines.length; c++){

                for(var x = 0; x < data.disciplines[c].reinforcements.length; x++){

                    var exist = _.some(data.user.binds, {instance_id : data.disciplines[c].reinforcements[x].id });

                    if(exist){
                        data.disciplines[c].reinforcements[x].subs = true;
                    }

                    data.disciplines[c].reinforcements[x].timecreated = date('(%a) :: %d de %B, %Hh:%Mm', new Date(data.disciplines[c].reinforcements[x].timecreated));
                    
                }
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
        instance_type : 'reinforcement',
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
        instance_type : 'reinforcement'
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