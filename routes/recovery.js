var express = require('express');
var app = express();
var router = express.Router();
var bookshelf = require('../bookshelf').plugin('registry');
var session = require('express-session');
var nodemailer = require('nodemailer');
var bcrypt = require('bcrypt-nodejs');
var mail = require('../mail');



router.use(session({
/*    genid: function(req) {
    return expiryDate; // use UUIDs for session IDs
},*/
secret: 'integro',
resave: false,
saveUninitialized: true,
cookie: { maxAge: null, secure : false }
}));

router.use(function test(req, res, next){
	if(typeof req.session.auth !== "undefined"){
		res.redirect('/');
	}

	next();
});

router.get('/', function (req, res, next) {
	data = {};

	res.render('recovery', data);
});

router.get('/fail/:fail', function (req, res, next) {

	res.render('login', data);
});

router.post('/sendmail',
	function(req, res, next) {

		req.models.user.find({username : req.body.username}, function(err,data){

			if(err) 
				throw err;

			if(typeof data[0] === "undefined")			
				throw 'not-found';
			else
				var user = data[0];

			if(mail.recovery(user)){
				var data = {
					messages : {
						success : 'Email enviado'
					}
				};
			} else{
				var data = {
					messages : {
						error : 'Email não enviado'
					}
				};
			}

			res.render('index', data);



/*			var transporter = nodemailer.createTransport(req.app.settings.cfg.maildata);

			;

	transporter.sendMail(data, function(error, info){
		if(error){
			res.send(error);
		} else{
			res.render('recovery');
		}
	}); */
	});
	});

router.get('/validate', function (req, res, next){

	data = {};

	data.message.success = 'Redefina sua senha.';

	res.render('recoveryvalidate', data);

});

router.post('/confirm', function (req, res, next){

	data = {};

	data.message.success = 'Recuperação efetivada.';

	res.render('login', data);

});

module.exports = router;