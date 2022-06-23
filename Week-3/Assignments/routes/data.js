const express = require("express")
const router = express.Router();

router.get('/', (req, res) => {

    const num = req.query.number;
    var result = ""
    if(num === undefined){                             // localhost:3000/data
        result = "Lack of Parameter";
    }
    else{
        if(isNaN(num) || num === ""){                  // localhost:3000/data?number=xyz ||
            result = "Wrong Parameter";                // localhost:3000/data?number=
        }
        else{                                         
            var sum = ( 1 + +num ) * +num / 2;
            var OptionalAns = `※(Optional) Think about what will happen when N is very large?
                                可能會超過URL長度上限(如IE的上限為2083位數)，造成最後計算錯誤。`;
            result = `The result of 1+2+...+${num} => ${sum}`;
        }
    }

    res.render('data', {result, OptionalAns, pageTitle: "Calculate Number Sum"});

});

module.exports = router;