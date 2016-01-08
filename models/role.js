var user = require('./user');
var bookshelf = require('../bookshelf').plugin('registry');
module.exports = bookshelf.model('role', {
	tableName: 'role',
	user: function() {
		return this.hasMany('user');
	}
});