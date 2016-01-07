var test = require('unit.js');
var con = require('../connection');

var example = 'hello';

test.string(example);

test.must(example).be.a.string();

test.string(example);

var assert = require('assert');

describe('Object', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3,-1].indexOf(4));
      
    });
    it('should return -1 when the value is not present', function () {


    });
  });
});