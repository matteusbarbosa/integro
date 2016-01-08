var bookshelf = require('../bookshelf').plugin('registry');
module.exports = bookshelf.model('report', {
	tableName: 'report'
});