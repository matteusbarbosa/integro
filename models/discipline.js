var course = require('./course');
var bookshelf = require('../bookshelf').plugin('registry');
module.exports = bookshelf.model('examination', {
	tableName: 'discipline',
	course: function() {
		return this.belongsTo('course');
	}
});