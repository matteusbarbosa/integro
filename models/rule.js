var user = require('./user');
var bind = require('./bind');
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
module.exports = bookshelf.model('rule', {
    tableName: 'rule',
    binds: function () {
        return this.morphMany('bind', 'rule', ['instance_type', 'instance_id']);
    },
    user: function (){
        return this.hasMany('user');
    }
});