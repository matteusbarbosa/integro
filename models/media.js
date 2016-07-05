var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
var user = require('./user');
var discipline = require('./discipline');
var mediacategory = require('./category');
module.exports = bookshelf.plugin('registry').model('media', {
    tableName: 'media',
    disciplines: function () {
        return this.belongsToMany('discipline').through('disciplinemedia');
    },
    user: function () {
        return this.belongsTo('user');
    },
    categories: function () {
    	return this.belongsToMany('category').through('categorybind', 'instance_id');
    }
});