const express = require("express");
const router = express.Router();
const db = require('./db');
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// lookup the post data(email) in database
router.post('/', urlencodedParser, (req, res) => {

    // signin page
    if(req.body.user_email){
      let sql = `SELECT * FROM user WHERE email = '${req.body.user_email}' 
              AND password = '${req.body.user_password}'`;

      // query the email and password
      db.query(sql, (err, query_result) => {
        if(err) throw err;
        
        // if   V to member page
        // else X to re-login
        if(query_result[0])
          res.render('member', { message: `Welcome! <b><u>${req.body.user_email}</b></u>`});
        else
          res.redirect('/home/re-login');
      });
    }
    
    if(req.body.register_email){
        let sql = `SELECT * FROM user WHERE email = '${req.body.register_email}'`;

        // Only query the email
        db.query(sql, (err, query_result) => {
          if(err) throw err;
          
          // if   V to member page
          // else X to re-register
          if(!query_result[0]){
              let usr = {email: req.body.register_email, password: req.body.register_password};
              sql = `INSERT INTO user SET ?`;
              db.query(sql, usr, (err, query_result) => {
                  if(err) throw err;
                  res.render('member', { message: `Welcome! <b><u>${req.body.register_email}</u></b>`});
              });
          }
          else
            res.redirect('/home/re-register');
        });
    }
});

module.exports = router;