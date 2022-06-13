function countAandB(input){
    var sum = 0;
    for(var i=0; i<input.length; i++){
        if(input[i] === 'a' || input[i] === 'b'){
            sum++;
        }
    }

    return sum;
}

function toNumber(input){
    var ch = '';
    var letterNum = 0;
    for(var i=0; i<input.length; i++){
        ch = input[i];
        letterNum = ch.charCodeAt(0) - 96;          // ASCII code 'a' = 97.If 'a' starts with 1, it needs to subtract 96 
        input[i] = letterNum;
    }

    return input;
}

let input1 = [ 'a' , 'b' , 'c' , 'a' , 'c' , 'a' , 'c' ];
console.log ( countAandB( input1 ) );                // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
console.log ( toNumber( input1 ) );                  // should print [1, 2, 3, 1, 3, 1, 3]

let input2 = [ 'e' , 'd' , 'c' , 'd' , 'e' ];
console.log ( countAandB( input2 ) );                // should print 0
console.log ( toNumber( input2 ) );                  // should print [5, 4, 3, 4, 5]
