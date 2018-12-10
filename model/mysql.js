var mysql = require("mysql");

//local mysql db connection
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kj0219",
  database: "matrix"
});

connection.connect(function(err) {
  if (err) throw err;
});

module.exports = connection;
