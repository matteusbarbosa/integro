var express = require('express');
var app = express();
var router = express.Router();
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
var session = require('express-session');
var bcrypt = require('bcrypt-nodejs');
var mail = require('../custom_modules/mail');
var crc32 = require('js-crc').crc32;
var date = require('../custom_modules/date');
var strftime = date.timezone(-180);
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

        //defina o número para recuperação
        var recoveryhash = crc32(user.attributes.username + ':' + user.attributes.email);

        var mailsent = mail.recovery(user, recoveryhash);

        mailsent.then(function (val) {
            if (val.accepted) {
                var data = {
                    messages: {
                        success: 'Email enviado às ' + date('%H\h:%M\m', new Date(Date.now()))
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

router.get('/validate/:username/:recoveryhash', function (req, res, next) {

    user.where('username', req.params.username).fetch().then(function (user) {

        if (typeof user === "undefined") {
            throw 'not-found';
        }

        var validhash = crc32(user.attributes.username + ':' + user.attributes.email);

        if (validhash !== req.params.recoveryhash) {
            var data = {
                messages: {
                    error: 'Hash inválida.'
                }
            };
            res.render('auth/login', data);
        }

        var data = {
            messages: {
                success: 'Hash válida. Defina sua nova senha.'
            },
            user: user,
            hash : req.params.recoveryhash
        };

        res.render('auth/passwordchange', data);

    });
});

router.post('/confirm', function (req, res, next) {

    user.where('username', req.body.username).fetch().then(function (user) {
        if (typeof user === "undefined") {
            throw 'not-found';
        }
        
        user.password = bcrypt.hashSync(req.body.password);
        
        user.save().then(function (usersaved) {

            var mailsent = mail.passwordchanged(user);
            mailsent.then(function (val) {
                var validhash = crc32(user.attributes.username + ':' + user.attributes.email);
                if (validhash !== req.body.recoveryhash) {
                    var data = {
                        messages: {
                            error: 'Solicitação inválida.'
                        }
                    };
                    res.render('auth/login', data);
                }
                
                var data = {
                    messages: {
                        success: 'Senha alterada às ' + date('%H\h:%M\m', new Date(Date.now()))
                    },
                    user: user
                };
                res.render('auth/passwordchange', data);

            });
        });
    });
});

module.exports = router;