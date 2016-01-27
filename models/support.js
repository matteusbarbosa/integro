var subscription = require('./subscription');
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
module.exports = bookshelf.model('support', {
    tableName: 'support',
    subscriptions: function () {
        return this.hasMany(subscription);
    },
    role: function () {
        return this.hasOne(role);
    },
    profile: function () {
    	
    }
});