var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
var course = require('./course');
var examination = require('./examination');
var disciplinemedia = require('./disciplinemedia');
var media = require('./media');
module.exports = bookshelf.model('discipline', {
	tableName: 'discipline',
	course: function () {
		return this.belongsTo('course');
	},
	media: function () {
		return this.hasMany('media').through('disciplinemedia', 'id', 'discipline_id');
	},
	examinations: function(){
		return this.hasMany('examination');
	},
	reinforcements: function(){
		return this.hasMany('reinforcement');
	},
	classoptionals: function(){
		return this.hasMany('classoptional');
	},
	warnings : function(){
		return this.hasMany('warning');
	}
});