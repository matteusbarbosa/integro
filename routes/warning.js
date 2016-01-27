var express = require('express');
var app = express();
var router = express.Router();
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
var warning = require('../models/warning');
var date = require('../custom_modules/date').timezone(-180);

router.get('/', function (req, res, next) {
    var data = {};

    res.render('sys/warnings', data);
});

router.get('/list', function (req, res, next) {

    warning.query(function (qb) {
        qb.where('timevalid', '>=', Date.now() / 1000);
    }).fetchAll().then(function (warningdata) {

        var data = {};

        var data = {
            warnings: warningdata.toJSON()
        };
        
        for(var c = 0; c< data.warnings.length; c++){
            data.warnings[c].details = data.warnings[c].details.substr(0,255);
            data.warnings[c].timecreated = date('(%a) :: %d de %B, %Hh:%Mm', new Date(data.warnings[c].timecreated));
        }

        data.path = req.path;
        
        res.render('sys/listwarnings', data);
    });
    // data.warnings	
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