var express = require('express');
var app = express();
var router = express.Router();
var con = require('../connection');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

router.use(passport.initialize());
router.use(passport.session());

app.use(con);

passport.use(new LocalStrategy({
	usernameField: 'username',
	passwordField: 'password',
	passReqToCallback: true,
	session: false
},
function(req, username, password, done) {
    // request object is now first argument
    // ...
    var User = req.models.user;

    User.find({ username: username}, function (err, user) {

    	if (err) { return done(err); }

    	if (typeof user[0] === "undefined") { return done(null, false); }

    	if (user[0].validPassword(password) !== true) { return done(null, false); }

    	return done(null,user[0]);
    });
}
));

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(user, done) {
	done(null, user);
});

router.get('/',	function (req, res, next) {

	data = {};

	res.render('login', data);
});

router.post('/login',
	passport.authenticate('local', { failureRedirect: '/login?fail=1',
		successRedirect: '/?success=1'
}),
	function(req, res, next) {

		res.redirect('/');
	});

app.get('/logout', function(req, res){
	console.log('log em logout');
	console.log(req.user);
	req.logout();
	res.redirect('/');
});

module.exports = router;