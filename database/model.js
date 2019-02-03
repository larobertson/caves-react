const db = require('../database/index.js');

db.connect();

const getData = (callback) => {
  let query = `SELECT * FROM CAVES;`
  db.query(query, (err, result, fields) => {
    if(err) {
      console.log('error in get request query', err);
      callback(err)
    } else {
      console.log('these are our query results', result)
      callback(null, result)
    }
  })
}

const postData = (data, callback) => {
  // console.log('what is db?', db)
  let name = data.name;
  let length = Number(data.length);
  let depth = Number(data.depth);
  let city = data.city;
  let state = data.state;
  console.log('what is length?', typeof length)

  let query = `INSERT INTO CAVE (NAME, LENGTH, DEPTH, CITY, STATE) VALUES ('${name}', '${length}', '${depth}', '${city}', '${state}');`;
  
  db.query(query, (err, result, fields) => {
    if (err) {
      console.log('error in post request query', err);
    } else {
      console.log('successful query!')
    }
  })
}

module.exports = {
  postData,
  getData
}