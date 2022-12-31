/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    nums.sort((a,b)=>{return b - a});
    let answer = 0;
    let currAns = 0;

    let totalSum = 0;
    let windowLen = 0;

    let rightP = 0;
    let leftP = 0;
    // [9,9,7,7,6]
    // [4,2,1]
    while(rightP < nums.length){
        if(totalSum + nums[rightP] + k >= nums[leftP]*(windowLen+1)){
            totalSum+=nums[rightP];
            rightP++;
            windowLen++;

            currAns++;
            if(currAns > answer)answer = currAns;
        } else{
            leftP++;
            windowLen--;
            currAns--;
            totalSum-=nums[leftP-1];
        }
    }
    return answer;
};