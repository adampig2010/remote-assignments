const express = require("express")
const router = express.Router();

router.get('/', (req, res) => {

    const num = req.query.number
    if( num === undefined )
        res.send("Lack of Parameter");

    if( isNaN(num) )
        res.send("Wrong Parameter");
    else{
        var sum = ( 1 + +num ) * +num / 2
        res.send(`The result of 1+2+...+${num} => ${sum}`);
    }

})

module.exports = router;