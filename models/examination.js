var discipline = require('./discipline');
var subscription = require('./subscription');
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
module.exports = bookshelf.model('examination', {
    tableName: 'examination',
    discipline: function () {
        return this.belongsTo(discipline);
    },
    subscription: function () {
        return this.morphMany(subscription, 'examination', ['instance_type', 'instance_id']);
    }
});