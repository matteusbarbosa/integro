var discipline = require('./discipline');
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
module.exports = bookshelf.model('classoptional', {
    tableName: 'classoptional',
    course: function () {
        return this.belongsTo(course);
    },
    subscription: function () {
        return this.morphMany(subscription, 'classoptional', ['instance_type', 'instance_id']);
    }
});