// In your test suite 
var express = require('express');
var app = express();
var request = require('supertest');
var test = require('unit.js');
var assert = require('assert');
var recovery = require('../routes/recovery');
var bcrypt = require('bcrypt-nodejs');
var mail = require('../custom_modules/mail');
var crc32 = require('js-crc').crc32;
//models
var user = require('../models/user');

/*
	Login file tests
	*/

	describe('recovery::sendmail', function(){

		it('send recovery email using mail func', function(done) {

			request(app)
			.post('/recovery/sendmail')
			.expect(function(res){
				
				var finduser = user.where({username : 'admin'}).fetch();

				finduser.then(function (userdata) {

					if (typeof userdata === "undefined") {
						throw 'not-found';
					}

					var user = userdata.toJSON();

        //defina o número para recuperação
        var recoveryhash = crc32(user.username + ':' + user.email);

        var mailsent = mail.recovery(user, recoveryhash);

        mailsent.then(function (val) {
        	test.assert.equal(1, 2);
        });
    });
			})
			.end(function(err, res){
				if(err){
					test.fail(err.message);
					done(err);
				} else{
					done();
				}
			});
		});

	})

	describe('recovery::validate', function(){

		it('request', function() {


		});

	})

	describe('recovery::confirm', function(){

		it('request', function() {


		});

	})