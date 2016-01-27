var subscription = require('./subscription');
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');
module.exports = bookshelf.model('user', {
    tableName: 'user',
    subscriptions: function () {
        return this.hasMany('subscription');
    },
    role: function () {
        return this.hasOne('role');
    },
    course: function(){
        return subscription
        .where({ instance_type : 'subscription', user_id : this.id})
        .fetch({ withRelated : 'course'});
    },
    examinations: function(){
        return subscription
        .where({ instance_type : 'examination', user_id : this.id})
        .fetch({ withRelated : 'discipline' });

    },
    reinforcements: function(){
        return subscription
        .where({ instance_type : 'reinforcement', user_id : this.id})
        .fetch({ withRelated : 'discipline' });

    },
    classoptionals: function(){
        return subscription
        .where({ instance_type : 'classoptional', user_id : this.id})
        .fetch({ withRelated : 'course' });

    }
});