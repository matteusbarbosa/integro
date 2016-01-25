var subscription = require('./subscription');
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
module.exports = bookshelf.model('user', {
    tableName: 'user',
    subscriptions: function () {
        return this.hasMany(subscription);
    },
    role: function () {
        return this.hasOne(role);
    }
});