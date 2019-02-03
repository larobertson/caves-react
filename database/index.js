const mysql = require('mysql');

let db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'test',
  database: 'caves'
})

db.connect();

console.log('database is talking!');

db.end()

module.exports = db