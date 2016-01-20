var express = require('express');
var app = express();
var router = express.Router();
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');



router.get('/', function (req, res, next) {
	var data = {};

	res.render('index', data);
});

router.get('/home', function (req, res, next) {
	var data = {};

	if(req.session.auth){
		res.redirect('/login');
	}

	res.render('index', data);
});

router.get('/home/redirected/:why', function (req, res, next) {
	var data = {};

	res.render('index', data);
});

router.get('/:id/medias/json', function (req, res, next) {
	var data = {};

	var Discipline = req.models.discipline;

	Discipline.get(req.params.id, function (err, discipline){

		var Content = discipline.getContents(function (err, medias) {
			
		});
	});

	if(req.session.auth !== true){
		res.redirect('/login');
	} else{
		res.status(200).json(data);
	}

});

module.exports = router;