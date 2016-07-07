var express = require('express');
var app = express();
var router = express.Router();
var discipline = require('../models/discipline');
var media = require('../models/media');
var course = require('../models/course');
var date = require('../custom_modules/date').timezone(-180);
var mail = require('../custom_modules/mail');
const fs = require('fs');

router.get('/sendmails', function (req, res, next) {

      fs.readFile('public/mail/alunos-pre.json', function (err, students){

        fs.readFile('public/mail/declaration_template.html', function (err, template){

          var user = {
            email : 'matteusbarbosa2@gmail.com'
          };

          var message = template.toString();

          var maildata = {
            message : message,
            filename: 'Declaração de Débitos Anuais 2015.pdf',
            path: 'D:/jsprojects/integro/public/mail/declaracao-1.pdf'
          };

          var mailsent = mail.declaration(user, maildata);

           console.log(mailsent);

          mailsent.then(function (val) { 

            console.log(val);

            return res.status(200);

          }).catch(function(err){
            console.log(err);
          });

          return res.status(200);

        });
      });

});


module.exports = router;