/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    if(nums.length == 1 && nums[0] >= target)return 1;
    if(nums.length == 1 && nums[0] <= target)return 0;


    let leftP = 0;
    let rightP = 0;
    let totalSum = 0;
    
    let currLength = 0;
    let minLength = Number.MAX_VALUE;
    // [12,28,83,4,25,26,25,2,25,25,25,12]
    // target 213

    // [2,3,1,2,4,3]()
    // target 7
    while(rightP <= nums.length){
        if(totalSum >= target){
            if(currLength < minLength)minLength = currLength;
            leftP++;
            currLength--;
            totalSum = totalSum - nums[leftP - 1];
        } else {
            totalSum = totalSum + nums[rightP];
            currLength++;
            rightP++;
        }
    }

    if(minLength == Number.MAX_VALUE)return 0;
    return minLength;
}; // O(n) 27minutes. Leetcode said to try finding O(n*log(n)).