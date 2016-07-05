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
var media = require('../models/media');
var category = require('../models/category');

/*
	Login file tests
	*/

	describe('media::save', function(){

		it('registra o material', function() {

			new media({ 

				user_id: 1,
				title: 'Title',
				url: 'Url',
				details: 'Details',
				metatitle: 'Meta',
				format: 'pdf',
				size: 128000,
				timecreated: 1,
				timeupdated: 1

			}).save().then(function(model){

			});

		});

		it('obtém categorias', function() {
			
			var cat = category.where({ discipline_id : 1 }).fetch();

			test.promise.given(cat).then(function(categorydata){

				var jdata = categorydata.toJSON();

				console.log(jdata);
			}).catch(function(err){
				console.log(err);
			});;


		});

		it('salva o arquivo', function() {
			


		});

	})