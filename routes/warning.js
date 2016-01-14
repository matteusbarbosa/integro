var express = require('express');
var app = express();
var router = express.Router();
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
var warning = require('../models/warning');
//var date = require('../custom_modules/date').timezone(-180);

router.get('/', function (req, res, next) {
	var data = {};

	res.render('index', data);
});

router.get('/list', function (req, res, next) {
	
        warning.query(function(qb){
            qb.where('timevalid', '>=', Date.now()/1000);
        }).fetchAll().then(function(warningdata){
           
            var data = {
                warnings : JSON.stringify(warningdata)
            };        
            
            res.render('sys/warningslist', data);
        });
       // data.warnings	
});

router.get('/home/redirected/:why', function (req, res, next) {
	var data = {};

	res.render('index', data);
});

router.get('/logout', function(req, res){

	var data = {};

	req.session.destroy();

	res.redirect('index', data);
});

module.exports = router;