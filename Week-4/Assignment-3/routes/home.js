const express = require("express");
const router = express.Router();

function auth(req, res, next) {
  if (req.session.user) {
    // console.log('authenticated')
    return res.redirect('/member');
  } 
  else {
    // console.log('not authenticated');
    next();
  }
}

// --------
// Homepage router
// --------
router.get('/', auth, (req, res) => {
    // console.log(req.session);
    // console.log(req.sessionID); 
    res.render('home', {flag:""});
})  

// Used for re-sign, re-register, log-out in homepage
router.get('/:id', (req, res) => {
    res.render('home', {flag: req.params.id});
})

module.exports = router;