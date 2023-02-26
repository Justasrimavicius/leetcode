/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let output = [];

    function bt(curr, rest){
        if(rest.length === 0){
            output.push(curr);
            return;
        }

        for(let i = 0; i < rest.length; i++){
            bt([...curr, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)]);
        }

    }
    bt([], nums);
    return output;
}

// revision 5 minutes
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let ans = [];

    function recursion(arr, startingArr){
        if(arr.length == nums.length){
            ans.push(arr);
            return;
        }

        for(let i = 0; i < startingArr.length; i++){
            recursion([...arr, startingArr[i]], [...startingArr.slice(0, i), ...startingArr.slice(i + 1)]);
        }

    }
    recursion([], nums);

    return ans;
};