var bookshelf = require('../bookshelf').plugin('registry');
module.exports = bookshelf.model('warning', {
  tableName: 'warning'
});