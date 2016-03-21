var examination = require('./examination');
var classoptional = require('./classoptional');
var reinforcement = require('./reinforcement');
var discipline = require('./discipline');
var bind = require('./bind');
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
module.exports = bookshelf.model('schedule', {
    tableName: 'schedule',
    examination: function () {
        return this.belongsTo('discipline');
    },
    binds: function () {
        return this.morphMany('bind', 'schedule', ['instance_type', 'instance_id']);
    },
    user: function (){
        return this.belongsTo('user');
    },
    discipline: function (){
        return this.belongsTo('discipline');
    }
});