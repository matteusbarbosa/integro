var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'integro',
    charset  : 'utf8'
  },
  debug: true
});

module.exports = require('bookshelf')(knex);