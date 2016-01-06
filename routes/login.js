var express = require('express');
var router = express.Router();
var con = require('../connection');
var bcrypt = require('bcrypt-nodejs');
var session = require('express-session');

router.use(con);
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

	res.render('login', data);
});

router.get('/fail/:fail', function (req, res, next) {

	res.render('login', data);
});

router.post('/authtry',
	function(req, res, next) {

		req.models.user.find({username : req.body.username}, function(err,data){
			if(err) throw err;
			var user = data[0];

			var result = bcrypt.compareSync(req.body.password, user.password);

			if(result){
				req.session.userid = user.id;
				req.session.auth = true;
				res.redirect('/home');
			} else{
				res.redirect('/login/fail/1');
			}
		});
	});

module.exports = router;