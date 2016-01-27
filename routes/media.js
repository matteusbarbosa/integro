var express = require('express');
var app = express();
var router = express.Router();
var discipline = require('../models/discipline');
var media = require('../models/media');
var course = require('../models/course');
var date = require('../custom_modules/date').timezone(-180);

router.get('/', function (req, res, next) {
    var data = {};

    res.render('sys/media', data);
});

router.get('/list', function (req, res, next) {

    course.where({id: 1}).fetch({withRelated: ['discipline.media']}).then(function (coursedata) {

        var data = {};

        data.course = coursedata.toJSON();

        for(var c = 0; c < data.course.discipline.length; c++){
            for(var x = 0; x < data.course.discipline[c].media.length; x++){
                 data.course.discipline[c].media[x].timecreated = date('(%a) :: %d de %B, %Hh:%Mm', new Date(data.course.discipline[c].media[x].timecreated));
            }
        }

        data.path = req.path;
        
        res.render('sys/listmedia', data);       
    });
});

/*
 * ng click bind
 */
router.get('/bind/:id', function (req, res, next){

    bind.forge({
        user_id : req.session.access.user.id,
        instance_id : req.params.id,
        instance_type : 'media'
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

    media.query(function (qb) {
        qb.where('title', 'LIKE', '%' + req.params.search + '%')
        .orWhere('details', 'LIKE', '%' + req.params.search + '%')
        .orWhere('details', 'LIKE', '%' + req.params.search + '%')
        .orWhere('url', 'LIKE', '%' + req.params.search + '%');
    }).fetchAll().then(function (mediadata) {

        res.json(mediadata.toJSON());
    });
});

 router.get('/home/redirected/:why', function (req, res, next) {
    var data = {};

    res.render('index', data);
});

 module.exports = router;