var discipline = require('./discipline');
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
module.exports = bookshelf.model('reinforcement', {
    tableName: 'reinforcement',
    discipline: function () {
        return this.belongsTo(discipline);
    },
    bind: function () {
        return this.morphMany(bind, 'reinforcement', ['instance_type', 'instance_id']);
    }
});