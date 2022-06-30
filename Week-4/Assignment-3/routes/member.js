const express = require("express");
const mysql = require("mysql");
const router = express.Router();
const bodyParser = require("body-parser");

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//create connection
const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "123456",
    database: "user"
})

//connect
db.connect( (err) => {
    if(err) throw err;
    console.log("Mysql connected!");
})

// lookup the post data(email) in database
router.post('/', urlencodedParser, (req, res) => {
    
    let message = "";
    let sql = "";
    let page = "";
    
    if(req.body.user_email){
      sql = `SELECT * FROM usrInfo WHERE email = '${req.body.user_email}' 
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
      sql = `SELECT * FROM usrInfo WHERE email = '${req.body.register_email}'`;

      let query = db.query(sql, (err, result) => {
        if(err) throw err;
        
        if(!result[0]){
            let usr = {email: req.body.register_email, password: req.body.register_password};
            sql = `INSERT INTO usrinfo SET ?`;
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

    // let query = db.query(sql, (err, result) => {
    //     if(err) throw err;

        // if(result[0] && page === "login"){
        //     res.render('member', { message: `Welcome! ${result[0].email}` });
        //     // message = "query sucess!";
        // }
        // else if(!result[0] && page === "register"){
        //   let usr = {email: req.body.register_email, password: req.body.register_password};
        //   sql = `INSERT INTO usrinfo SET ?`;
        //   db.query(sql, post, (err, result) => {
        //     if(err) throw err;
        //   });
        // }

        // else{
        //     // const redirect_index = function (req, res, next) {
        //     //     res.redirect('/');
        //     //     next();
        //     // }

        //     // router.use(redirect_index);
            
        //     // let system_Notification = `No ${req.body.userEmail} user, please sign up!`
        //     // res.redirect('/');
        //     // res.render('home', {system_Notification});
        //     // message = "query failed!";
        // }        
    // });
});

module.exports = router;