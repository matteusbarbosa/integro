var express = require('express');
var app = express();
var router = express.Router();
var con = require('../connection');
var passport = require('passport'), LocalStrategy = require('passport-local').Strategy;

app.use(con);

passport.use(new LocalStrategy(
	function(username, password, done) {

		console.log(con.request.app);


			User.find({ username: username }, function(err, user) {
				if (err) { return done(err); }
				if (!user) {
					return done(null, false, { message: 'Incorrect username.' });
				}
				if (!user.validPassword(password)) {
					return done(null, false, { message: 'Incorrect password.' });
				}
				return done(null, user);
			});
	}
	));

router.get('/',
	function (req, res, next) {

		data = {};

		req.models.user.get(1, function(err, user){
			console.log(user);
		});

		res.render('login', data);
	});

router.post('/',  passport.authenticate('local'),
	function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
});

module.exports = router;