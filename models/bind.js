var user = require('./user');
var course = require('./course');
var examination = require('./examination');
var reinforcement = require('./reinforcement');
var classoptional = require('./classoptional');
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
module.exports = bookshelf.model('bind', {
	tableName: 'bind',
	user: function () {
		return this.belongsTo('user');
	},
	instance: function () {
		return this.morphTo('instance', course, examination, reinforcement, classoptional);
	},
	course: function () {
		console.log('course');
		return this.belongsTo('course', 'instance_id');
	},
	reinforcement: function () {
		return this.belongsTo('reinforcement', 'instance_id');
	},
	examination: function () {
		return this.belongsTo('examination', 'instance_id');
	},
	classoptional: function () {
		return this.belongsTo('classoptional', 'instance_id');
	}
});