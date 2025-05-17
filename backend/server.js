var port = process.env.PORT || 3003;

var express = require("express");

var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));


app.listen(port,()=>{
  console.log("App is runnig on localhost:"+port);
});
