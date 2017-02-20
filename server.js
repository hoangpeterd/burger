// npm packages
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var path = require("path");

// local host
var app = express();
var PORT = process.env.PORT || 3000;

// load static content from public directory
app.use(express.static(__dirname + "/public"));

// allows express to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// overriding POST
app.use(methodOverride("_method"));

// requiring handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// requiring routes
require("./controllers/burgers_controllers.js")(app);

// initializing localhost
app.listen(process.env.PORT || 3000);
