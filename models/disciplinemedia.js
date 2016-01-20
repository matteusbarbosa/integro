var discipline = require('./discipline');
var media = require('./media');
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
module.exports = bookshelf.model('disciplinemedia', {
    tableName: 'disciplinemedia',
    discipline: function () {
        return this.hasOne(discipline);
    },
    media: function () {
        return this.hasOne(media);
    }
});