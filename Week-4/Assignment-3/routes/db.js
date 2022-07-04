const mysql = require("mysql");
require("dotenv").config();

const host = process.env.HOST;
const user = process.env.USER;
const pw = process.env.PW;
const database = process.env.DATABASE;
const table = process.env.TABLE;

//create connection
const db = mysql.createConnection({
    host: host,
    user: user,
    password: pw,
    database: database
});

//connect
db.connect( (err) => {
    if(err) throw err;
    console.log("Mysql connected!");
});

const query_data = (table, email, password) => {
    
    let sql = `SELECT * FROM ${table} WHERE email = '${email}' AND password = '${password}'`; 
    
    return new Promise( (resolve, reject) => {
        db.query(sql, (err, result) => {
            if(err) reject(err);
            else resolve(result);
        });
    });
};

const insert_data = (table, email, password) => {

    let sql = `INSERT INTO ${table} SET ?`;
    let resgister_data = {email, password};

    return new Promise( (resolve, reject) => {
        db.query(sql, resgister_data, (err, result) => {
            if(err) reject(err);
            else resolve(result);
        });
    });
};

module.exports = {
    db,
    query_data,
    insert_data,
    table
};

// Initial create the db data:
// CREATE DATABASE assignment;
// CREATE TABLE assignment.user(id INT AUTO_INCREMENT, email VARCHAR(255), password VARCHAR(255), PRIMARY KEY(id));