const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const db = require('../database/index.js');

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
  
})

app.listen(3000, () => console.log("Now listening on port 3000!"));
