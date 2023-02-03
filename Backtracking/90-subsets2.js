/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let ans = [];

    nums.sort((a,b)=>{return a - b});
    function recursion(index, subset){
        if(index == nums.length){
            ans.push(subset);
            return;
        }
        // [1,2,2]
        recursion(index + 1, [...subset, nums[index]]);

        while(nums[index + 1] === nums[index] && index + 1 != nums.length){
            index++;
        }
        recursion(index + 1, subset);
    }
    recursion(0, []);
    return ans;
};