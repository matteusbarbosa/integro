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

    User.find({ username: username }, function (err, user) {

    	if (err) { return done(err); }
    	if (!user) { return done(null, false); }
    	if (!user.password == password) { return done(null, false); }

    	passport.serializeUser(function(user, done) {
			console.log('serializeUser: ' + user.id)
			return done(null, user);
		});


    });




}
));


router.get('/',	function (req, res, next) {

	data = {};

	req.models.user.get(1, function(err, user){
		//console.log(user);
	});

	res.render('login', data);
});

router.post('/login',
	passport.authenticate('local', { failureRedirect: '/login/fail' }),
	function(req, res) {
		
			console.log('auth success'+req.user.id);

		res.redirect('/');
	});


/*
router.post('/auth', function (req, res, next){

	var data = {};

	passport.use(new LocalStrategy(
		function(username, password, done) {

			var User = req.models.user;

			User.find({ username: username }, function(err, user) {
				if (err) { return done(err); }
				if (!user) {
					return done(null, false, { message: 'Incorrect username.' });
				}
				if (!user.validPassword(password)) {
					return done(null, false, { message: 'Incorrect password.' });
				}
				passport.serializeUser(function(user, done) {
					done(null, user.id);
				});
				return done(null, user);
			});

			console.log(User);
		}
		));

	res.redirect('/home');
});
*/

module.exports = router;