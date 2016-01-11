var express = require('express');
var router = express.Router();
var bookshelf = require('bookshelf');
var bcrypt = require('bcrypt-nodejs');
var session = require('express-session');

//models
var user = require('../models/user');

router.use(session({
/*    genid: function(req) {
    return expiryDate; // use UUIDs for session IDs
},*/
secret: 'integro',
resave: false,
saveUninitialized: true,
cookie: { maxAge: null, secure : false }
}));

router.use(function (req, res, next){
	if(req.session.auth === true){
		res.redirect('/');
	} else{
		next();
	}
});

router.get('/', function (req, res, next) {
	data = {};

	res.render('auth/login', data);
});

router.get('/fail/:fail', function (req, res, next) {

	res.render('auth/login', data);
});

router.post('/authtry',
	function(req, res, next) {

		var User = user.where('username', req.body.username).fetch().then(function(){
	});
			var result = bcrypt.compareSync(req.body.password, User.password);

			if(result){
				req.session.userid = user.id;
				req.session.auth = true;
				res.redirect('/home');
			} else{
				res.redirect('/login/fail/1');
			}

	
	});

module.exports = router;