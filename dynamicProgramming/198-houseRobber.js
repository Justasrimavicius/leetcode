/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let prevsPrev = nums[0];
    let prev = Math.max(nums[1], nums[0]);

    if(nums.length < 3){
        return prev > prevsPrev ? prev : prevsPrev;
    }
    
    let temp;

    let max = 0;

    for(let i = 2; i < nums.length; i++){
        temp = prev;
        prev = Math.max(prev, prevsPrev + nums[i]);

        prevsPrev = temp;
        max = Math.max(prev, prevsPrev, max);
    }

    return max;
};