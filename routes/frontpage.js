var express = require('express');
var router = express.Router();
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
var session = require('express-session');

router.get('/', function (req, res, next) {
    
	var data = {};

	res.render('frontpage', data);
});

module.exports = router;