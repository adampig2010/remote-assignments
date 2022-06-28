// Time complexity: O(n)
// one for loop O(n) and lookup the key in hashtable O(1) => O(n+1) => O(n)
// Space complexity: O(n)
// hashtable has been used to store the ele2 candidates.

function twoSum(nums, target) {
    let ele1 = 0;
    let ele2 = 0;
    let hashtable = {};               // To store the candidate of ele2
    
    for(let i1 in nums){
        ele1 = nums[i1];
        ele2 = target - ele1;
        
        if(hashtable[ele2])               
            return [hashtable[ele2], i1];
            // Why the index of ele2 first:
            // the elements stored in the hashtable is before the current i1 
        else
            hashtable[ele1] = i1;    
            // If cannot find the ele2, add this value to hashtable 
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