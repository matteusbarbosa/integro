var discipline = require('./discipline');
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
module.exports = bookshelf.model('classoptional', {
    tableName: 'classoptional',
    course: function () {
        return this.belongsTo(course);
    },
    bind: function () {
        return this.morphMany(bind, 'classoptional', ['instance_type', 'instance_id']);
    },
    user: function(){
    	return this.belongsTo('user');
    },
    course: function(){
    	return this.belongsTo('course');
    }
});