function count(input) {
    
    // declare the object of letter: count
    var letterCount = {};
    for(var i = 0; i < input.length; i++){
        var letter = input[i];
        
        // if key not in the object, initialize the key and assign it's value(count) to 1
        if( !letterCount[letter] )
            letterCount[letter] = 1;

        // if key exists in the object, it's value(count) + 1
        else
            letterCount[letter]++;
    }

    return letterCount;
}


let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));       // should print {a:3, b:1, c:2, x:1}


function groupByKey(input) {
    
    // declare the object of letter: value
    var gBK_count = {};
    
    for( var i = 0; i < input.length; i++){
        var letter = input[i].key;
        var letterNum = input[i].value;
    
        // if key not in the object, initialize the key and assign it's value to the num in this for-loop time.
        if( !gBK_count[letter] )
            gBK_count[letter] = letterNum;
        // if key exists in the object, it's value(count) adds the num in this for-loop time.
        else
            gBK_count[letter] += letterNum;
    }
    return gBK_count;
}

let input2 = [
    { key: "a", value: 3 },
    { key: "b", value: 1 },
    { key: "c", value: 2 },
    { key: "a", value: 3 },
    { key: "c", value: 5 },
];

console.log(groupByKey(input2));   // should print {a:6, b:1, c:7}