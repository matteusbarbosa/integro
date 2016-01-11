var express = require('express');
var router = express.Router();
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');

router.use(function (req, res, next) {
    if (typeof req.session !== "undefined" && req.session.auth === true) {
        res.redirect('/home');
    } else {
        next();
    }
});

router.get('/', function (req, res, next) {
    var data = {};

    res.render('index', data);
});

router.get('/home', function (req, res, next) {

    if (typeof req.session !== "undefined" && req.session.auth === true) {
        res.redirect('/login');
    } else {
        res.render('sys/home', data);
    }

    var data = {};

});

router.get('/home/redirected/:why', function (req, res, next) {
    var data = {};

    res.render('index', data);
});

router.get('/logout', function (req, res) {

    var data = {};

    req.session.destroy();

    res.render('index', data);
});

module.exports = router;