require("dotenv").config(); // <--- at the very top
var port = process.env.PORT || 3003;
var path = require("path");
var express = require("express");
var cors = require("cors");
var app = express();
var bodyParser = require("body-parser");
// const express = require("express");
const connectDB = require("./util/db.js");
const quoteRoutes = require("./routes/api_routes.js");


// Serve static files from the React frontend
app.use(express.static(path.join(__dirname, "../frontend/build")));


app.use(cors({
  origin: ["http://localhost:3003","http://localhost:3000","https://scrapsquad-883401bf1df6.herokuapp.com/"],  // Your React frontend
  credentials: true
}));
app.set('trust proxy', 1);

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, "../frontend/build")));

// const app = express();
app.use(express.json());
app.use(quoteRoutes);

connectDB();

const PORT = process.env.PORT || 5000;

// Wildcard route (after API routes)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});



app.listen(port,()=>{
  console.log("App is runnig on localhost:"+port);
});
