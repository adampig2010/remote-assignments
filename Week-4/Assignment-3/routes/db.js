const mysql = require("mysql");

//create connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "assignment"
})

//connect
db.connect( (err) => {
    if(err) throw err;
    console.log("Mysql connected!");
})

module.exports = db;

// Initial create the db data:
// CREATE DATABASE assignment;
// CREATE TABLE assignment.user(id INT AUTO_INCREMENT, email VARCHAR(255), password VARCHAR(255), PRIMARY KEY(id));