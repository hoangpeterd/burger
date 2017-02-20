// importing orm.js into burger.js
var orm = require("../config/orm.js");

// function that will call the ORM functions using burger specific input for the ORM
var burger = function (func, res, para) {
  switch (func) {
    case "all":
      orm.selectAll(res);
      break;
    case "insert":
      orm.insertOne(res, para);
      break;
    case "update":
      orm.updateOne(res, para);
      break;
  }
};

// exporting burger.js
module.exports = burger;
