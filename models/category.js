var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
var user = require('./user');
var discipline = require('./discipline');
var media = require('./media');
var mediabindcategory = require('./categorybind');
module.exports = bookshelf.plugin('registry').model('category', {
    tableName: 'category',
    discipline: function () {
        return this.belongsTo('discipline');
    },
    media: function () {
    	return this.morphMany('media', 'instance');
    }
});