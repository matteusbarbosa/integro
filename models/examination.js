var discipline = require('./discipline');
var bookshelf = require('../bookshelf').plugin('registry');
module.exports = bookshelf.model('examination', {
	tableName: 'examination',
	discipline: function() {
		return this.belongsTo('discipline');
	}
});