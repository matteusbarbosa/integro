module.exports = function (db, cb) {

	db.define('course', {username: String, password: String} , {
		methods: {
			validPassword: function (pw) {
				return this.password == pw;
			}
		}
	});

	return cb();

};