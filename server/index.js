const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const postData = require('../database/model.js');

const app = express();

//Parse json and x-ww-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", express.static((__dirname + "/../dist")));

app.get("/", (req, res) => {
  console.log("successful request!");
  res.send("Hi there");
});

app.post("/", (req, res) => {
  console.log('this is the payload:', req.body.payload)
  let data = req.body.payload;
  postData(data, ()=>{
    console.log('trying to send the data to the database')
  })
  //now send it to the database
})

app.listen(3000, () => console.log("Now listening on port 3000!"));
