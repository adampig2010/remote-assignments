const express = require("express");
const router = express.Router();
const db = require('./db');
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// lookup the post data(email) in database
router.post('/', urlencodedParser, (req, res) => {
    // [Need to ask. 1]
    // let query_result = "";
    let email = req.body.user_email;
    let pw = req.body.user_password;

    db.query_data(db.table, email, pw)
        .then(result => {     
            // [Need to ask. 1]
            // query_result = result;
            // Why outer scope can not retrieve the value? 
            if(result[0]){
                req.session.user = email;
                return res.redirect('/member');
            }
            else
                res.redirect('/home/re-login');
        });
    
});

module.exports = router;