const express = require("express");
const router = express.Router();
const db = require('./db');
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// lookup the post data(email) in database
router.post('/', urlencodedParser, (req, res) => {
    
    const email = req.body.register_email;
    const pw = req.body.register_password;

    db.query_data(db.table, email, pw)
        .then(result => {
            console.log(result);     
            if(result[0]){
                res.redirect('/home/re-register');
            }
            else{
                db.insert_data(db.table, email, pw)
                .then(result => {
                    req.session.user = email;
                    return res.redirect('/member');
                })
            }
        });
});

module.exports = router;