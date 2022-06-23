const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());

router.get('/', (req, res) => {
    res.render('data', {result, pageTitle: "Calculate Number Sum"});
});

module.exports = router;