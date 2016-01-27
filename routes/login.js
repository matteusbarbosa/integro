var express = require('express');
var app = express();
var router = express.Router();
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
var bcrypt = require('bcrypt-nodejs');

//models
var user = require('../models/user');
var bind = require('../models/bind');

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
    .fetch({withRelated : [{ binds : function(query) { query.where('instance_type', 'course'); }},
        'binds.course']})
    .then(function (userdata) {

        var userj = userdata.toJSON();
        
        var result = bcrypt.compareSync(req.body.password, userj.password);

        var access = {
            user : {
                id : userj.id,
                username : userj.username,
                email : userj.email
            },
            course : {
                id : userj.binds[0].course.id,
                name : userj.binds[0].course.name
            },
            startaccess : userj.binds[0].timestart,
            endaccess : userj.binds[0].timeend
        };

        if (result) {

            userdata.save({timelastlogin : Date.now() }, {patch: true}).then(function (usersaved) {
                req.session.access = access;
                req.session.auth = true;
                req.session.warnings = true;
                res.redirect('/home');
            });

        } else {
            res.redirect('/login/fail/1');
        }   
    });
});

module.exports = router;