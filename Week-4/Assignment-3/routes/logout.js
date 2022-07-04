const express = require("express");
const router = express.Router();

// logout
router.get('/', (req,res) => {
    req.session.destroy();
    res.clearCookie("user");
    res.redirect('/home/log-out');
  });

module.exports = router;