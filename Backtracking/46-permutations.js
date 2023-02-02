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