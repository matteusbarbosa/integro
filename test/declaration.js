// In your test suite 
var express = require('express');
var app = express();
var request = require('supertest');
var test = require('unit.js');
var assert = require('assert');
var recovery = require('../routes/recovery');
var bcrypt = require('bcrypt-nodejs');
var crc32 = require('js-crc').crc32;
//models
var user = require('../models/user');

var mail = require('../custom_modules/mail');
const fs = require('fs');

/*
  Login file tests
  */

  describe('declaration::sendmails', function(){

    it('Envia emails padrão de acordo com determinada lista', function() {

      fs.readFile('public/mail/alunos-pre.json', function (err, students){

        fs.readFile('public/mail/declaration_template.html', function (err, template){

          var user = {
            email : 'matteusbarbosa2@gmail.com'
          };

          var message = template.toString();

          var maildata = {
            message : message,
            filename: 'Declaração-Débitos-Anuais.pdf',
            content: 'public/mail/declaracao-1.pdf'
          };

          var mailsent = mail.declaration(user, maildata);

           console.log(mailsent);

          test.promise.given(mailsent).then(function (val) { 

            test.assert(val !== null);

          }).catch(function(err){
            console.log(err);
          });
        });
      });
    });
  });