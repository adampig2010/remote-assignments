const express = require("express")
const router = express.Router();

router.get('/', (req, res) => {
    var result = "Hello, My Server!";
    res.render('index', {result, pageTitle: "My Server"});
});

module.exports = router;