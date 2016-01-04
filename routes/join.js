var express = require('express');
var app = express();
var router = express.Router();
var mysql = require('mysql');

/* GET home page. */
router.get('', function (req, res) {

    req.models.person.find({id : 1});

    res.render('join', {title: 'Express'});
    
});

module.exports = router;