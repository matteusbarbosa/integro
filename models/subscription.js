var user = require('./user');
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
module.exports = bookshelf.model('subscription', {
	tableName: 'subscription',
	user: function() {
		return this.belongsTo(user);
	}
});