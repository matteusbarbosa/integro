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

/*
  Login file tests
  */

  describe('mediacategory::sendmails', function(){

    it('Envia emails padrão de acordo com determinada lista', function() {

      
    });
  });