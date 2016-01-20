var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
var discipline = require('./discipline');
var subscription = require('./subscription');
module.exports = bookshelf.model('course', {
    tableName: 'course',
    discipline: function () {
        return this.hasMany('discipline');
    }
});