var express = require('express');
var router = express.Router();
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
var session = require('express-session');

router.use(session({
    /*    genid: function(req) {
     return expiryDate; // use UUIDs for session IDs
     },*/
    secret: 'integro',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: null, secure: false}
}));

router.use(function (req, res, next) {
    //na pág login com sessão auth
   /* if (typeof req.session.auth === "undefined"
            && req.path !== "/"
            && req.path !== "/login"
            && req.path !== "/logout") {
        res.redirect('/login');
    } else {
        next();
    } */
    next();
});

router.get('/', function (req, res, next) {

    var data = {
        modules: {
            1: 'Inscrição',
            2: 'SIA',
            3: 'Financeiro'}
    };

    res.render('index', data);
});

router.get('/home', function (req, res, next) {

    var data = {};

    if (req.session.warnings) {
        data.warnings = true;
        req.session.warnings = false;
    }

    res.render('sys/home', data);
});

router.get('/home/redirected/:why', function (req, res, next) {
    var data = {};

    res.render('index', data);
});

router.get('/logout', function (req, res) {

    var data = {};

    if (typeof req.session.auth !== "undefined") {

        data.messages = {
            success: 'Sessão finalizada'
        };
        req.session.destroy();
    } else {
        data.messages = {
            error: 'Não há sessão ativa'
        };
    }

    res.render('auth/login', data);
});

module.exports = router;