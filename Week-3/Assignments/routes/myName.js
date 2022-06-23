const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());

router.get('/', (req, res) => {
    res.render('myName', {username: req.cookies.username, pageTitle: "Show Cookie Username"})
});

module.exports = router;