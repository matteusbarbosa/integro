module.exports = function (db, cb) {

	db.load("./models-extra", function (err) {

		if (err) {
			return cb(err);
		}

		db.define('user', {name: String, password: String} , {
			methods: {
				validPassword: function (password) {
					return this.password === password;
				}
			}
		});
		return cb();

	});
};