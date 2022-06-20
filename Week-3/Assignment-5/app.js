function twoSum(nums, target) {
    let tempArr = [];
    var ele1 = 0;
    var ele2 = 0;
    var i2 = 0;
    
    for(let i = 0; i < nums.length; i++){
        ele1 = nums[i];
        ele2 = target - ele1;
        i2 = tempArr.indexOf(ele1);
        
        if(i2 !== -1)
            return [i2, i]
        else
            tempArr.push(ele2);
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