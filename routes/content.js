var express = require('express');
var app = express();
var router = express.Router();
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
var utils = require('../utils');



router.get('/', function (req, res, next) {
	var data = {};

	res.render('index', data);
});

router.get('/home/redirected/:why', function (req, res, next) {
	var data = {};

	res.render('index', data);
});

module.exports = router;