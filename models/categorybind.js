var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
var user = require('./user');
var discipline = require('./discipline');
var media = require('./media');
var mediacategory = require('./category');
module.exports = bookshelf.plugin('registry').model('categorybind', {
    tableName: 'categorybind',
    discipline: function () {
        return this.belongsTo('discipline');
    },
    media: function () {
    	return this.hasMany('media').through('categorybind');
    }
});