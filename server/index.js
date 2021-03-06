const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const postData = require('../database/model.js').postData;
const getData = require('../database/model.js').getData;


const app = express();

//Parse json and x-ww-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static((__dirname + "/../dist"))); 
//app.use ('/') should be changed to express.static like above

//app.get will be something other than '/' to keep page getting and data getting separate
app.get("/caves", (req, res) => {
  getData((err, datas) => {
    if(err){
      console.log('something went wrong in app.get')
    } else {
      console.log('something went well in app.get')
      res.send(datas)
    }
  });
});

app.post("/caves", (req, res) => {
  //console.log('this is the payload:', req.body.payload)
  let data = req.body.payload;
  postData(data, ()=>{
    console.log('trying to send the data to the database')
  })
  //now send it to the database
})

app.listen(3000, () => console.log("Now listening on port 3000!"));
