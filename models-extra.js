module.exports = function(db, cb){
    db.define('content', {title : String});
    return cb();
};