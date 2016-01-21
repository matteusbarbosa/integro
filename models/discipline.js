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
	examination: function(){
		return this.hasMany('examination');
	}
});