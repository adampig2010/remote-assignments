const express = require("express");
const router = express.Router();

// --------
// Homepage router
// --------
router.get('/', (req, res) => {
    res.render('home', {flag:""});
})

router.get('/home', (req, res) => {
    res.render('home', {flag:""});
})

// Used for re-sign and re-register in homepage
router.get('/home/:id', (req, res) => {
    res.render('home', {flag: req.params.id});
})

module.exports = router;