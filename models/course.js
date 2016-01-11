var discipline = require('./discipline');
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
module.exports = bookshelf.model('course', {
	tableName: 'course',
	discipline: function() {
		return this.hasMany('discipline');
	}
});