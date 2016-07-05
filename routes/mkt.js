var express = require('express');
var app = express();
var router = express.Router();
var discipline = require('../models/discipline');
var media = require('../models/media');
var course = require('../models/course');
var date = require('../custom_modules/date').timezone(-180);
var mail = require('../custom_modules/mail');
const fs = require('fs');
const fastCsv = require('fast-csv');

router.get('/sendmails', function (req, res, next) {

  var fileStream = fs.createReadStream("public/mail/lista-emails-marketing.txt"),
  parser = fastCsv();

  var message = fs.createReadStream("public/mail/email-marketing-website-hospedagem-v1.html");

  fileStream
  .on("readable", function () {
    var data;
    while ((data = fileStream.read()) !== null) {
      parser.write(data);
    }
  })
  .on("end", function () {
    parser.end();
  });

  parser
  .on("readable", function () {
    var data;
    var c = 0;
    while ((data = parser.read()) !== null) {

     var user = {
      email : data[0]
    };

    var maildata = {
      message : message,
    };

    c++;
    
    setTimeout(function (){
      var mailsent = mail.mkt(user, maildata);
      mailsent.then(function (val) {

        console.log(val);

      }).catch(function(err){
        console.log(err);
      });

    },180000 * c);
    
}
})
  .on("end", function () {
    console.log("Finalizou envios");
  });


    /*  
      fs.readFile('public/mail/lista-emails-marketing.txt', function (err, students){

      	var data_students = students.trim().split('\n');

      	//iterando sobre os estudantes...
      	for(var c = 0; c < data_students.length; c++){
      		console.log(data_students[c]+" - ");
      	}

  fs.readFile('public/mail/email-marketing-website-hospedagem-v1-web', function (err, template){

       

        });


});   */


});

module.exports = router;