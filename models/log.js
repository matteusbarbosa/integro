var user = require('./user');
var warning = require('./warning');
var media = require('./media');
var examination = require('./examination');
var reinforcement = require('./reinforcement');
var classoptional = require('./classoptional');
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
module.exports = bookshelf.model('log', {
	tableName: 'log',
	user: function () {
		return this.belongsTo('user');
	},
	instance: function () {
		return this.morphTo('instance', warning, media, examination, reinforcement, classoptional);
	},
	warning: function () {
		return this.belongsTo('warning', 'instance_id');
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