/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    let currSum = 0;
    let maxSum = Number.NEGATIVE_INFINITY;
    
    let leftP = 0;
    let rightP = 0;
    while(leftP < nums.length && rightP < nums.length){
        currSum += nums[rightP];
        if(currSum > maxSum)maxSum = currSum;

        if(currSum < 0){
            leftP = rightP;
            currSum = 0;
            leftP++;
        }


        rightP++;
    }

    return maxSum;
};