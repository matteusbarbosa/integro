var express = require('express');
var app = express();
var router = express.Router();
var category = require('../models/category');
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');

router.get('/bydiscipline/:id', function (req, res, next) {

    var id = req.params.id;
    
    category.where({ discipline_id : id }).fetch().then(function(categorydata){

        var jdata = categorydata.toJSON();

        console.log(jdata);

        return res.json(jdata);
    });

    next();
});

module.exports = router;