// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Create express app instance.
var app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// route through controllers folder
app.use(routes);
var routes = require("./controllers/burgersController.js");

//========================================
//Trinity code provided below
//========================================

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

//========================================
//Trinity code provided above
//========================================

app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});
