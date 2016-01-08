var discipline = require('./discipline');
var bookshelf = require('../bookshelf').plugin('registry');
module.exports = bookshelf.model('reinforcement', {
  tableName: 'reinforcement',
  discipline: function() {
    return this.belongsTo('discipline');
  }
});