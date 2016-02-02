var bind = require('./discipline');
var user = require('./user');
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
module.exports = bookshelf.model('warning', {
  tableName: 'warning',
  user : function(){
      return this.belongsTo(user);
  },
  discipline : function(){
      return this.belongsTo(discipline);
  }
});