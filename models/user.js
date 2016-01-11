var subscription = require('./subscription');
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
module.exports = bookshelf.model('user', {
  tableName: 'user',
  subscription: function() {
    return this.hasMany('subscription');
  }
});