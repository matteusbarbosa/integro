var discipline = require('./discipline');
var bind = require('./bind');
var schedule = require('./schedule');
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
module.exports = bookshelf.model('examination', {
    tableName: 'examination',
    discipline: function () {
        return this.belongsTo(discipline);
    },
    binds: function () {
        return this.morphMany(bind, 'examination', ['instance_type', 'instance_id']);
    },
    schedules: function () {
        return this.morphMany(schedule, 'examination', ['instance_type', 'instance_id']);
    },
});