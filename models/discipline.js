var course = require('./course');
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
module.exports = bookshelf.model('examination', {
	tableName: 'discipline',
	course: function() {
		return this.belongsTo('course');
	}
});