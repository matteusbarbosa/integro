var express = require('express');
var app = express();
var router = express.Router();
var passport = require('passport');

router.get('/',
	function (req, res, next) {

		var data = {};

		console.log('login');

		res.render('login', data);
	})
.post('/', 
	passport.authenticate('local', { 
		successRedirect: '/',
		failureRedirect: '/login'
	}));

module.exports = router;