var express = require('express');
var app = express();
var router = express.Router();
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
var warning = require('../models/warning');
var date = require('../custom_modules/date').timezone(-180);
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
var course = require('../models/course');

router.get('/', function (req, res, next) {
    var data = {};

    res.render('sys/warnings', data);
});

router.get('/list', function (req, res, next) {

    res.render('sys/listwarnings');
});

/*
JSON
*/
router.get('/bycourse/:courseid', function (req, res, next) {

    //course.where({id: req.session.access.course.id}).fetch({withRelated: ['discipline.warning']})
    course.where({id: req.params.courseid }).fetch({withRelated: ['disciplines.warnings.user']})
    .then(function (coursedata) {

        var data = coursedata.toJSON();

            for(var c = 0; c < data.disciplines.length; c++){

                for(var x = 0; x < data.disciplines[c].warnings.length; x++){
                        data.disciplines[c].warnings[x].timecreated = date('(%a) :: %d de %B, %Hh:%Mm', new Date(data.disciplines[c].warnings[x].timecreated));
                }
            }

        res.json(data);

    });
});


/*
 * ng json query
 */
 router.get('/search/:search', function (req, res, next) {

    warning.query(function (qb) {
        qb.where('title', 'LIKE', '%' + req.params.search + '%')
        .orWhere('details', 'LIKE', '%' + req.params.search + '%')
        .orWhere('url', 'LIKE', '%' + req.params.search + '%');
    }).fetchAll().then(function (warningdata) {

        res.json(warningdata.toJSON());
    });
});

 router.get('/home/redirected/:why', function (req, res, next) {
    var data = {};

    res.render('index', data);
});

 module.exports = router;