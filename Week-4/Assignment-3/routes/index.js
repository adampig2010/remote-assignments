const express = require("express");
const router = express.Router();

// Homepage
router.get('/', (req, res) => {
    res.render('index');
})

module.exports = router;

//create connection
// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Adampig075553748",
//     database: "user"
// })

// //connect
// db.connect( (err) => {
//     if(err) throw err;
//     console.log("Mysql connected!");
// })

// create DB
// app.get('/createdb', (req, res) => {
//     let sql = 'CREATE DATABASE user'
//     db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Database created...');  
//     })
// })

//create Table
// app.get('/createpoststable', (req, res) => {
//     let sql = 'CREATE TABLE usrInfo(id INT AUTO_INCREMENT, email VARCHAR(255), password VARCHAR(255), PRIMARY KEY(id))';
//     db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('usrInfo table created...');
//     });
// });

// // create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

// // POST /login gets urlencoded bodies
// app.post('/member', urlencodedParser, (req, res) => {
//   res.render('member', {user_email: req.body.uemail});
// })

//Insert: user information
// app.post('/member.html', jsonParser, function (req, res) {
//     res.send('welcome, ' + req.body.uemail);
//   })