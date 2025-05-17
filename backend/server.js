var port = process.env.PORT || 3003;
var path = require("path");
var express = require("express");
var cors = require("cors");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, "../frontend/build")));



app.use(cors({
  origin: ["http://localhost:3000","https://scrapsquad-883401bf1df6.herokuapp.com/"],  // Your React frontend
  credentials: true
}));

app.set('trust proxy', 1);

app.listen(port,()=>{
  console.log("App is runnig on localhost:"+port);
});
