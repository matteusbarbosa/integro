var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
var discipline = require('./discipline');
var bind = require('./bind');

module.exports = bookshelf.model('course', {
	tableName: 'course',
	disciplines: function () {
		return this.hasMany('discipline');
	},
	classoptional: function () {
		return this.hasMany('classoptional');
	},
	binds: function() {
		return this.morphMany('bind', 'course', ['instance_type', 'instance_id']);
	}
});