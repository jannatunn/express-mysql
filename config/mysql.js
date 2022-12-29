const mysql = require("mysql");

const connections = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sinabeLAH12345",
  database: "eduwork-cruds"
});

module.exports = connections;
