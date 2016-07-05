var express = require('express');
var app = express();
var router = express.Router();
var discipline = require('../models/discipline');
var media = require('../models/media');
var course = require('../models/course');
var date = require('../custom_modules/date').timezone(-180);
var session = require('express-session');
var fileUpload = require('express-fileupload');
var multer = require("multer");
var bodyParser = require("body-parser");

router.use(session({
    /*    genid: function(req) {
     return expiryDate; // use UUIDs for session IDs
 },*/
 secret: 'integro',
 resave: false,
 saveUninitialized: true,
 cookie: {maxAge: null, secure: false}
}));

router.use(fileUpload());

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
 
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


router.get('/', function (req, res, next) {
    var data = {};

    res.render('sys/media', data);
});

router.get('/list', function (req, res, next) {

    res.render('sys/listmedia');
});

router.get('/create', function (req, res, next){
    res.render('sys/forms/media');
});

router.get('/find/:id', function (req, res, next){
    var id = req.params.id;
    
    media.where({ id : id }).fetch().then(function(mediadata){

        var jdata = mediadata.toJSON();

        res.json(jdata);
    });
});


router.post('/save', function (req, res, next){

    var m = new media({
        id: req.body.id,
        user_id: req.body.user_id,
        title: req.body.title,
        url: req.body.url,
        details: req.body.details,
        metatitle: req.body.title,
        /*format: file.format,
        size: file.size,*/
        timecreated: Date.now()
    });
/*
    console.log(m);
    */
    m.save()
    .then(function(model){/*
        console.log('saved');
        console.log(model); */
        res.status(200);
    });
});

router.get('/inputfile', function(req, res) {
    res.render('sys/uploader');
});

router.post('/upload', multer({dest: "./public/upload/"}).array("uploads[]", 12), function(req, res) {

    console.log('data:');
    console.log(req.files);
    console.log(req.body);
    console.log(req.uploads);
/*
    req.uploads[0].mv('/upload/'+req.uploads[0].name, function(err) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send('File uploaded!');
        }
    }); */
});

router.delete('/delete', function (req, res){
    new media({ id: req.query.id }).destroy().then(function(model){
        return res.status(200);
    });
});

/*
JSON
*/
router.get('/bycourse/:courseid', function (req, res, next) {

    course.where({id: req.params.courseid }).fetch({withRelated: ['disciplines.media.user', 'disciplines.media.categories']})
    .then(function (coursedata) {

        var data = coursedata.toJSON();

        data.user = req.session.access.user;

        for(var c = 0; c < data.disciplines.length; c++){

            for(var x = 0; x < data.disciplines[c].media.length; x++){
                data.disciplines[c].media[x].timecreated = date('(%a) :: %d de %B, %Hh:%Mm', new Date(data.disciplines[c].media[x].timecreated));
                data.disciplines[c].categories = data.disciplines[c].categories;
            }
        }

        res.json(data);

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
    .then(success => res.status(200).send(success))
    .catch(error => res.status(500).send(error.message));
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

 /*
 */
 router.get('/edit/:id', function (req, res, next){

    var id = req.params.id;
    
    media.where({ id : id }).fetch().then(function(mediadata){

        var jdata = mediadata.toJSON();

        return res.json(jdata);
    });
});

 router.get('/home/redirected/:why', function (req, res, next) {
    var data = {};

    res.render('index', data);
});

 module.exports = router;