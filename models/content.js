var user = require('./user');
var discipline = require('./discipline');
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
module.exports = Bookshelf.plugin('registry').model('content', {
	tableName: 'content',
	discipline: function() {
		return this.belongsTo('discipline');
	}
});