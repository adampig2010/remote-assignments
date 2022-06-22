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

    // (Optional) Think about what will happen when N is very large?
    // 若N超過2083位數，會超過URL長度上限，造成最後計算錯誤。
})

module.exports = router;