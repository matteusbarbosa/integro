var express = require('express');
var app = express();
var router = express.Router();
var bookshelf = require('../bookshelf').plugin('registry');
var session = require('express-session');
var bcrypt = require('bcrypt-nodejs');
var mail = require('../mail');
//models
var user = require('../models/user');
router.use(session({
    /*    genid: function(req) {
     return expiryDate; // use UUIDs for session IDs
     },*/
    secret: 'integro',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: null, secure: false}
}));
router.use(function test(req, res, next) {
    if (typeof req.session.auth !== "undefined") {
        res.redirect('/');
    }

    next();
});
router.get('/', function (req, res, next) {
    data = {};
    res.render('auth/recovery', data);
});
router.get('/fail/:fail', function (req, res, next) {

    res.render('auth/login', data);
});
router.post('/sendmail', function (req, res, next) {

    user.where('username', req.body.username).fetch().then(function (user) {

        if (typeof user === "undefined") {
            throw 'not-found';
        }

        var mailsent = mail.recovery(user);

        mailsent.then(function (val) {
            if (val.accepted) {
                var data = {
                    messages: {
                        success: 'Email enviado'
                    }
                };
                res.render('index', data);
            } else {
                var data = {
                    messages: {
                        error: 'Email não enviado'
                    }
                };
                res.render('auth/recovery', data);
            }
        });
    });
});

router.get('/validate', function (req, res, next) {

    var data = {
        messages: {
            success: 'Redefina sua senha.'
        }
    };
    res.render('auth/recoveryvalidate', data);
});
router.post('/confirm', function (req, res, next) {

    data = {};
    data.message.success = 'Recuperação efetivada.';
    res.render('auth/login', data);
});
module.exports = router;