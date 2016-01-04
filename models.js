module.exports = function (db, cb) {

	db.load("./models-extra", function (err) {

		if (err) {
			return cb(err);
		}

		db.define('user', {username: String, password: String} , {
			methods: {
				validPassword: function (pw) {
					return this.password == pw;
				}
			}
		});
		return cb();

	});
};