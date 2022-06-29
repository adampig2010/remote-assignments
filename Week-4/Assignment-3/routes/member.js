const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// POST /login gets urlencoded bodies
router.post('/', urlencodedParser, (req, res) => {
//   res.render('member', {user_email: req.body.userEmail});
  res.render('member');
//   res.redirect('/member');
})


module.exports = router;