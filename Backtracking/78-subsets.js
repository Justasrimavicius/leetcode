/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let ans = [];

    function recursion(index, subset){
        if(index > nums.length){
            if(subset[subset.length - 1] === undefined)return;
            ans.push([...subset]);
            return;
        }
        subset.push(nums[index]);
        recursion(index + 1, subset);

        subset.pop();
        recursion(index + 1, subset);
    }
    recursion(0, []);
    ans.push([]);
    return ans;
};