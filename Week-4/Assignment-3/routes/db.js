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
    password: "Adampig075553748",
    database: "user"
})

//connect
db.connect( (err) => {
    if(err) throw err;
    console.log("Mysql connected!");
})

// SELECT single posts
// router.get('/', (req, res) => {
//     let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
//     let query = db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Post fetched ...');
//     });
// });

// lookup the post data(email) in database
router.post('/', urlencodedParser, (req, res) => {
    let sql = `SELECT * FROM usrInfo WHERE email = '${req.body.userEmail}'`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        if(result[0]){
            res.render('member', { user_email: result[0].email });
        }
        else{
            // const redirect_index = function (req, res, next) {
            //     res.redirect('/');
            //     next();
            // }

            // router.use(redirect_index);
            
            let system_Notification = `No ${req.body.userEmail} user, please sign up!`
            res.redirect('/');
            res.render('index', {system_Notification});
        }
        // console.log(result[0]["email"]);
        // 

        
    });
    //   res.redirect('/member');
});
    
module.exports = router;