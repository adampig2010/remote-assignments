// time complexity: O()
// space complexity: O()


function twoSum(nums, target) {
    var ele1 = 0;
    var ele2 = 0;
    let tempArr = [];               // To store the candidate of ele2
    var i2 = 0;
    
    for(let i1 = 0; i1 < nums.length; i1++){
        ele1 = nums[i1];
        ele2 = target - ele1;
        i2 = tempArr.indexOf(ele1);
        
        if(i2 !== -1)                  
            return [i2, i1]
            // Why i2 first:
            // the elements stored in the tempArr is before the current i1 
        else
            tempArr.push(ele2);    
            // If cannot find the ele2, add to the tempArr 
            // for the next ele1's candidate of ele2
    }
}

console.log(twoSum([2, 7, 11, 15], 9))

/*
    For example:
    twoSum([2, 7, 11, 15], 9);
    Should returns:
    [0, 1]
    Because:
    nums[0]+nums[1] is 9
*/