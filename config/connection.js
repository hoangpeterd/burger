// setting up a mySQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "conBoDat",
  database: "burger_db"
});

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}

// making the connection
connection.connect(function(err) {
  if (err) throw err;
});

// exporting connecting for ORM use
module.exports = connection;
