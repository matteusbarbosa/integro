var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
var discipline = require('./discipline');
var bind = require('./bind');

module.exports = bookshelf.model('course', {
	tableName: 'course',
	discipline: function () {
		return this.hasMany('discipline');
	},
	binds: function() {
		return this.morphMany('bind', 'course', ['instance_type', 'instance_id']);
	}
});