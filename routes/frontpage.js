var express = require('express');
var router = express.Router();
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
var session = require('express-session');

router.use(function (req, res, next) {
	/*	//na pág login com sessão auth
		if(typeof req.session.auth === "undefined"
			&& req.path !== "/"
			&& req.path !== "/login"
			&& req.path !== "/logout"){
			res.redirect('/login');
		} else{
			next();
		}
                */
               next();
	});

router.get('/', function (req, res, next) {
    
	var data = {
            modules : {
                1 : 'Inscrição',
                2 : 'SIA',
                3 : 'Financeiro'}
        };

	res.render('frontpage', data);
});

module.exports = router;