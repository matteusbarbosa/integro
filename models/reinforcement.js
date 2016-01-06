module.exports = function (db, cb) {

	db.define('reinforcement', {username: String, password: String} , {
		methods: {
			validPassword: function (pw) {
				return this.password == pw;
			}
		}
	});

	return cb();

};