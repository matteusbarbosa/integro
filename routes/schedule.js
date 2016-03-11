var express = require('express');
var app = express();
var router = express.Router();
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');

router.get('/', function (req, res, next) {
	var data = {};
	res.render('index', data);
});

router.get('/home', function (req, res, next) {
	var data = {};

	if(req.session.auth){
		res.redirect('/login');
	}

	res.render('index', data);
});

router.get('/home/redirected/:why', function (req, res, next) {
	var data = {};

	res.render('index', data);
});

router.get('/logout', function(req, res){

	var data = {};

	req.session.destroy();

	res.render('index', data);
});

module.exports = router;