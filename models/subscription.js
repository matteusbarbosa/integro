var user = require('./user');
var bookshelf = require('../bookshelf').plugin('registry');
module.exports = bookshelf.model('subscription', {
	tableName: 'subscription',
	user: function() {
		return this.belongsTo('user');
	}
});