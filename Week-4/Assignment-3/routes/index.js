const express = require("express");
const router = express.Router();

// Homepage
router.get('/', (req, res) => {
    res.render('home', {flag:""});
})

router.get('/home', (req, res) => {
    res.render('home', {flag:""});
})

router.get('/home/:id', (req, res) => {
    res.render('home', {flag: req.params.id});
})

module.exports = router;