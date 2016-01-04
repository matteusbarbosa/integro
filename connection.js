var express = require('express');
var app = express();
var orm = require('orm');

//orm
app.use(orm.express("mysql://root@localhost/integro", { define: function (db, models, next) {

		// your main file (after connecting) 
		db.load("./models", function (err) {

			// loaded! 
			models.user = db.models.user;
			models.content = db.models.content;
			next();

		});

}}));

module.exports = app;