var express = require('express');
var app = express();
var orm = require('orm');

//orm
app.use(orm.express("mysql://root@localhost/integro", { define: function (db, models, next) {

	db.settings.set('instance.cache', false);

		// your main file (after connecting) 
		db.load("./models", function (err) {

			if (err) throw err;

			// loaded! 
			models.user = db.models.user;
			//models.content = db.models.content;
			
		});

		next();
}}));

module.exports = app;