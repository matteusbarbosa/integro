var discipline = require('./discipline');
var bind = require('./bind');
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
module.exports = bookshelf.model('examination', {
    tableName: 'examination',
    discipline: function () {
        return this.belongsTo(discipline);
    },
    bind: function () {
        return this.morphMany(bind, 'examination', ['instance_type', 'instance_id']);
    }
});