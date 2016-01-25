var express = require('express');
var router = express.Router();
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
var bcrypt = require('bcrypt-nodejs');
var session = require('express-session');

//models
var user = require('../models/user');
var subscription = require('../models/subscription');

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

    user.where('username', req.body.username)
    .fetch({withRelated : ['subscriptions']})
    .then(function (userdata) {

        var user = userdata.toJSON();

        var course_subscription = subscription
        .where({ instance_type : 'subscription', user_id : user.id})
        .fetch({ withRelated : 'course' })
        .then(function(subscription_fetch){

            var subs = subscription_fetch.toJSON();

            var result = bcrypt.compareSync(req.body.password, user.password);

            var access = {
                user : {
                    id : user.id,
                    username : user.username,
                    email : user.email
                },
                course : {
                    id : subs.course.id,
                    name : subs.course.name
                },
                startaccess : course_subscription.timeend,
                endaccess : course_subscription.timestart
            };

            if (result) {
                req.session.access = access;
                req.session.auth = true;
                req.session.warnings = true;
                res.redirect('/home');
            } else {
                res.redirect('/login/fail/1');
            }
        });    
    });
});

module.exports = router;