module.exports = function (db, cb) {

    db.load("./models-extra", function (err) {

        if (err) {
            return cb(err);
        }

        db.define('user', {name: String});
        return cb();

    });
};