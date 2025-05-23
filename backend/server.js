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
const frontendBuildPath = path.join(__dirname, "./../frontend/build");

// Serve static files from React
app.use(express.static(frontendBuildPath));

// Serve static files from the React frontend


app.use(cors({
  origin: ["http://localhost:3003","http://localhost:3000","https://scrapsquad-883401bf1df6.herokuapp.com/"],  // Your React frontend
  credentials: true
}));
app.set('trust proxy', 1);

app.use(bodyParser.urlencoded({extended:true}));


// const app = express();
app.use(express.json());
app.use(quoteRoutes);
connectDB();



// Catch-all fallback (no "*")
app.use((req, res, next) => {
  // If the request doesn't match a file or API route, serve index.html
  res.sendFile(path.join(frontendBuildPath, "index.html"), function (err) {
    if (err) {
      next(err);
    }
  });
});



app.listen(port,()=>{
  console.log("App is runnig on localhost:"+port);
});
