const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors")
const path = require("path")
const targetBaseUrl = 'https://gentle-wave-45898.herokuapp.com/';

app.use(cors())
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
app.use('*', express.static("client/build"));


var apiRoutes = require("./controllers/clientController.js");
var validatorRoutes = require("./controllers/validatorRoutes.js")
app.use("auth",validatorRoutes)
app.use("/api", apiRoutes);

// 
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// });



function handleRedirect(req, res) {
  const targetUrl = targetBaseUrl;
  res.redirect(targetUrl);
}

app.get('*', handleRedirect);


mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://skillBuilder:qwerty123@ds143707.mlab.com:43707/heroku_2s9vp225",
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
