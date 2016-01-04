var express = require('express');
var app = express();
var router = express.Router();
var con = require('../connection');
var passport = require('passport');
app.use(con);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(user, done) {
	done(null, user);
});

/* GET home page. */
router.get('/', passport.authenticate('local', { failureRedirect: '/login?fail=1&fromindex=1',
		successRedirect: '/?success=1&fromindex=1'
}), function (req, res, next) {

	console.log('log em index');
	console.log(req.user);

    var data = {};

    req.models.content.get(1, function(err, content){
        console.log(content);
    });

    console.log('Listagem entregue às ' + req.stamp);

    res.render('index', data);
});

router.get('/home', function (req, res, next){
	console.log('sys/home');
});

module.exports = router;