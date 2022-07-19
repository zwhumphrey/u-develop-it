const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  // Your MYSQL username,
  user: "root",
  // your MYSQL password,
  password: "PASSWORD",
  database: "election",
});

module.exports = db;
