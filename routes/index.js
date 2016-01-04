var express = require('express');
var app = express();
var router = express.Router();
var con = require('../connection');

router.use(con);

/* GET home page. */
router.get('/', function (req, res, next) {

    var data = {};

    req.models.content.get(1, function(err, content){
        console.log(content);
    });

    console.log('Listagem entregue às ' + req.stamp);

    res.render('sys/index', data);
});

module.exports = router;