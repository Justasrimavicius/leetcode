/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    // [1,1,2,5,6,7,10]
    let ans = [];

    candidates.sort((a,b)=>{return a - b});

    function recursion(sum, subArr, i){
        if(sum === target){
            ans.push(subArr);
            return;
        } else if(sum > target || i == candidates.length){
            return;
        }

        recursion(sum + candidates[i], [...subArr, candidates[i]], i + 1);

        while(candidates[i + 1] == candidates[i] && i + 1 !== candidates.length){
            i++;
        }
        recursion(sum, subArr, i + 1);


    }
    recursion(0, [], 0);
    return ans;
};