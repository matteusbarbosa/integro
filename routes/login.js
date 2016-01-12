var express = require('express');
var router = express.Router();
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
var bcrypt = require('bcrypt-nodejs');
var session = require('express-session');

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

router.use(function (req, res, next){
    if(typeof req.session.auth !== "undefined"){
        res.redirect('/home');
    } else{
        next();
    }
});

router.get('/', function (req, res, next) {
    data = {};

    res.render('auth/login', data);
});

router.get('/fail/:fail', function (req, res, next) {

	var data = {};

    res.render('auth/login', data);
});

router.post('/', function (req, res, next) {

    user.where('username', req.body.username).fetch().then(function (userdata) {

        var result = bcrypt.compareSync(req.body.password, userdata.attributes.password);

        if (result) {
            req.session.userid = userdata.attributes.id;
            req.session.auth = true;
            req.session.warnings = true;
            res.redirect('/home');
        } else {
            res.redirect('/login/fail/1');
        }

    });    
});

module.exports = router;