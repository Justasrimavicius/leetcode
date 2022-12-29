/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    let answer = Number.MAX_VALUE;
    if(k == 0 && nums.length >= 1){
        return 0;
    }

    nums = nums.sort((a,b)=>{return a - b});
    console.log(nums);
    for(let i = 0; i < nums.length - k + 1; i++){
        let diff = nums[i + k - 1] - nums[i];
        if(diff < answer)answer = diff;
    }
    return answer;
};