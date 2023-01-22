/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if(nums.length == 1)return 0;

    let minSteps = 1;
    function recursion(currIndex, nextIndices){
        if(nextIndices >= nums.length - 1)return minSteps;

        let tempNextInd = 0;
        let maxNextIndices = 0;
        let maxCurrIndex = 0;
        for(let i = currIndex + 1; i <= nextIndices; i++){
            tempNextInd = i + nums[i];

            if(tempNextInd > maxNextIndices){
                maxNextIndices = tempNextInd;
                maxCurrIndex = i;
            }
        }
        minSteps++;
        return recursion(maxCurrIndex, maxNextIndices);

    }
    return recursion(0, nums[0]);
};