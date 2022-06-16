function binarySearchPosition(numbers, target) {
    
    // initialize the low, high, mid
    let low = 0;
    let high = numbers.length - 1;
    let mid = 0;

    while(low <= high){
        
        mid = low + Math.floor((high - low) / 2);

        if(target === numbers[mid])
            return mid;
        
        // if target is greater, search the right half subarray
        else if(target > numbers[mid])
            low = mid + 1;

        // if target is smaller, search the left half subarray
        else
            high = mid - 1;
    }

    // target not in the array, return -1
    return -1;
}

console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3
console.log(binarySearchPosition([1, 2, 5, 6, 7], 8)); // should print -1 ( I added the condition for the target not in the numbers array excluding the question requirement. )