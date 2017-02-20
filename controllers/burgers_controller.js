// importing express and burger.js
var burger = require("../models/burger.js");
var express = require("express");
var app = express();

// routes for each function
module.exports = function(app) {

  app.get("/", function(req, res) {
    burger("all", res);
  });

  app.post("/", function(req, res) {
    burger("insert", res, req.body.burger_name);
  });

  app.put("/", function(req, res) {
    burger("update", res, req.body.id);
  });
};
