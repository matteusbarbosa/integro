var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
module.exports = bookshelf.model('report', {
	tableName: 'report'
});