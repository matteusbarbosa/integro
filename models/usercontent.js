var user = require('./user');
var media = require('./media');
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
module.exports = bookshelf.model('usermedia', {
    tableName: 'usermedia',
    user: function () {
        return this.hasOne(user);
    },
    media: function () {
        return this.hasOne(media);
    }
});