var bind = require('./bind');
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
module.exports = bookshelf.model('support', {
    tableName: 'support',
    binds: function () {
        return this.hasMany(bind);
    },
    role: function () {
        return this.hasOne(role);
    },
    profile: function () {
    	
    }
});