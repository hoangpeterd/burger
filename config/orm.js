// importing connection.js into orm.js
var connection = require("./connection.js");

// methods that will execute necessary MySQL commands in the controllers
var selectAll = function(res) {
  connection.query("SELECT * FROM burgers", function(err, data) {
    if (err) {
      throw err;
    }
    res.render("index", { burgerList: data });
  });
};

var insertOne = function(res, burgerName) {
  connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [burgerName], function(err, result) {
    if (err) {
      throw err;
    }
    res.redirected("/");
  });
};

var updateOne = function(res, burgerID) {
  connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [true, burgerID], function(err, result) {
    if (err) {
      throw err;
    }
    res.redirect("/");
  });
};

var connectionEnd = function() {
  connection.end();
};

var orm = {
  selectAll: selectAll,
  insertOne: insertOne,
  updateOne: updateOne,
  connectionEnd: connectionEnd
};

// exporting the orm object
module.exports = orm;
