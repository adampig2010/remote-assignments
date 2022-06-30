const express = require("express");
const mysql = require("mysql");
const router = express.Router();
const bodyParser = require("body-parser");

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

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

// lookup the post data(email) in database
router.post('/', urlencodedParser, (req, res) => {
    
    let sql = "";

    if(req.body.user_email){
      sql = `SELECT * FROM user WHERE email = '${req.body.user_email}' 
            AND password = '${req.body.user_password}'`;

      let query = db.query(sql, (err, result) => {
        if(err) throw err;
        
        if(result[0]){
          res.render('member', { message: `Welcome! ${result[0].email}`});
        }
        else{
          res.redirect('/home/re-login');
        }
      });
    }
    
    if(req.body.register_email){
      sql = `SELECT * FROM user WHERE email = '${req.body.register_email}'`;

      let query = db.query(sql, (err, result) => {
        if(err) throw err;
        
        if(!result[0]){
            let usr = {email: req.body.register_email, password: req.body.register_password};
            sql = `INSERT INTO user SET ?`;
            db.query(sql, usr, (err, result) => {
              if(err) throw err;
              res.render('member', { message: `Welcome! ${req.body.register_email}`});
            });
        }
        else{
          res.redirect('/home/re-register');
        }
      });
    }
});

module.exports = router;

// CREATE DATABASE assignment;
// CREATE TABLE assignment.user(id INT AUTO_INCREMENT, email VARCHAR(255), password VARCHAR(255), PRIMARY KEY(id));