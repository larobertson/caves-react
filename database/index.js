const mysql = require('mysql');

let db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'test',
  database: 'caves'
})

//db.connect();

console.log('database is talking!');


module.exports = db