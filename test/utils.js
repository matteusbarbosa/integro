// In your test suite 
var express = require('express');
var app = express();
var router = express.Router();
var test = require('unit.js');
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
var assert = require('assert');

/*
	Login file tests
*/

describe('utils::removeaccents', function(){
	
	it('remove accents', function() {
		var utils = require('../custom_modules/utils');

		var strings = {
			1 : "ÁéûeB",
			2 : "Çã"
		};

		var expected = {
			1: "aeueb",
			2: "ça"
		};

		for(var c = 0; c < strings.length; c++){
			test.assert.equal(utils.removeaccents(strings[c]), "Aeue");
		}

	});

})