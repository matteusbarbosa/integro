module.exports = function (db, cb) {

	db.load("./models/user", function (err) { if (err) throw err; });
	//db.load("./models/content", function (err) { if (err) throw err; });
	//db.load("./models/course", function (err) { if (err) throw err; });
	//db.load("./models/examination", function (err) { if (err) throw err; });
	//db.load("./models/reinforcement", function (err) { if (err) throw err; });
	//db.load("./models/report", function (err) { if (err) throw err; });
	//db.load("./models/role", function (err) { if (err) throw err; });
	//db.load("./models/warning", function (err) { if (err) throw err; });

	return cb();
};