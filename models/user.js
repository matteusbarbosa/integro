var bind = require('./bind');
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
module.exports = bookshelf.model('user', {
    tableName: 'user',
    binds: function () {
        return this.hasMany('bind');
    },
    role: function () {
        return this.hasOne('role');
    },
    course: function(){
        return this.binds
        .fetch({withRelated : [{
            binds : function(query) { query.where('instance_type', 'course'); }},
            'binds.course']});
    },
    examinations: function(){
        return this.binds
        .fetch({withRelated : [{
            binds : function(query) { query.where('instance_type', 'examination'); }},
            'binds.examination']});

    },
    reinforcements: function(){
        return this.binds
        .fetch({withRelated : [{
            binds : function(query) { query.where('instance_type', 'reinforcement'); }},
            'binds.reinforcement']});
    },
    classoptionals: function(){
        return this.binds
        .fetch({withRelated : [{
            binds : function(query) { query.where('instance_type', 'classoptional'); }},
            'binds.classoptional']});
    }
});