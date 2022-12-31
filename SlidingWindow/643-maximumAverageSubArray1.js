/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    if(nums.length == 1)return nums[0];

    let currSum = 0;
    let maxAvg = Number.MIN_VALUE;
    for(let i = 0; i < nums.length; i++){
        if(i < k){
            currSum += nums[i];
            if(i == k - 1){
                maxAvg = currSum/k;
            }
        } else {
            currSum += nums[i];
            currSum -= nums[i-k];
            if(currSum/k > maxAvg)maxAvg = currSum/k;
        }

    }

    return maxAvg;
};