var express = require('express');
var app = express();

var router = express.Router();
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
var date = require('../custom_modules/date').timezone(-180);

//models
var user = require('../models/user');
var course = require('../models/course');

router.get('/', function (req, res, next) {
	var data = {};

	res.render('sys/users', data);
});

router.get('/list', function (req, res, next) {

    course.where({id: req.session.access.course.id }).fetch({withRelated: ['bind.user']}).then(function (coursedata) {

        var data = {
            course : coursedata.toJSON()
        };

        for(var c = 0; c < data.course.discipline.length; c++){

            for(var x = 0; x < data.course.discipline[c].user.length; x++){

                data.course.discipline[c].user[x].timecreated = date('(%a) :: %d de %B, %Hh:%Mm', data.course.discipline[c].user[x].timecreated);

            }
        }

        res.render('sys/listusers', data);
    });
});

router.get('/profile/:id', function (req, res, next) {

    var user_id = (req.params.id == 0) ? req.session.access.user.id : req.params.id;

    user.where({id: user_id }).fetch({withRelated: ['binds']}).then(function (userdata) {

        userdata.course().then(function(bind_fetch){

            var data = {};

            try {

              data.user = userdata.toJSON();  
              data.bind = bind_fetch.toJSON();
              data.user.timecreated = date('(%a) :: %d de %B, %Hh:%Mm', new Date(data.user.timecreated));
              data.user.timelastlogin = date('(%a) :: %d de %B, %Hh:%Mm', new Date(data.user.timelastlogin));
              res.render('sys/userprofile', data);

          } catch (ex){
            res.status(404).render('404');
        }              
    });
    });
});

/*
 * ng json query
 */
 router.get('/search/:search', function (req, res, next) {

    user.query(function (qb) {
        qb.where('title', 'LIKE', '%' + req.params.search + '%')
        .orWhere('details', 'LIKE', '%' + req.params.search + '%')
        .orWhere('details', 'LIKE', '%' + req.params.search + '%')
    }).fetchAll().then(function (userdata) {
        res.json(userdata.toJSON());
    });

});

 router.get('/home/redirected/:why', function (req, res, next) {
   var data = {};

   res.render('index', data);
});

 module.exports = router;