const express = require("express");
const router = express.Router();

function auth(req, res, next) {
  if (req.session.user) {
    // console.log('authenticated');
    next();
  } 
  else {
    // console.log('not authenticated');
    return res.redirect('/home/login');
  }
}

router.get('/', auth, (req, res) => {
    res.render('member', { message: `Welcome! <b><u>${req.session.user}</u></b><br><br><a href="/logout">logout</a>`});
});

module.exports = router;