/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length == 1)return nums[0];
    if(nums.length == 2)return Math.max(nums[0], nums[1]);
    if(nums.length == 3)return Math.max(nums[0], nums[1], nums[2]);

    let ans = [];

    let prevsPrev = nums[0];
    let prev = nums[0] > nums[1] ? nums[0] : nums[1];

    let temp;
    for(let i = 2; i < nums.length - 1; i++){
        temp = prev;
        prev = Math.max(nums[i] + prevsPrev, prev);

        prevsPrev = Math.max(temp, prevsPrev);
    }
    ans[0] = Math.max(prevsPrev, prev);


    prevsPrev = nums[1];
    prev = nums[1] > nums[2] ? nums[1] : nums[2];

    for(let i = 3; i < nums.length; i++){
        temp = prev;
        prev = Math.max(nums[i] + prevsPrev, prev);

        prevsPrev = Math.max(temp, prevsPrev);
    }
    ans[1] = Math.max(prevsPrev, prev);

    return Math.max(ans[0], ans[1]);
};