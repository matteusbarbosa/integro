var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('sys/index', {title: 'respond with a resource'});
});

module.exports = router;