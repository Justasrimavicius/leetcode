/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if(nums.length == 3)return nums[0] + nums[1] + nums[2];
    let sum = Number.MAX_VALUE;

    nums.sort((a,b)=>{return a - b});
    for(let i = 0; i < nums.length - 2; i++){
        let num = nums[i];
        let leftP = i + 1;
        let rightP = nums.length - 1;
        while(leftP < rightP){

            if(Math.abs(sum - target) > Math.abs(num + nums[leftP] + nums[rightP] - target)){
                sum = num + nums[leftP] + nums[rightP];
            }
            if(num + nums[leftP] + nums[rightP] > target){
                rightP--;
            } else {
                leftP++;
            }
        }
    }
    return sum;
};