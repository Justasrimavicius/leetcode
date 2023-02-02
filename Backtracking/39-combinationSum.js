/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let answer = [];

    function bt(subArr, sum, i){
        if(sum == target){
            answer.push(subArr);
            return;
        } else if(i == candidates.length || sum > target){
            return;
        }

        bt([...subArr, candidates[i]], sum + candidates[i], i);
        bt(subArr, sum, i + 1);
    }
    bt([], 0, 0);
    return answer;
};