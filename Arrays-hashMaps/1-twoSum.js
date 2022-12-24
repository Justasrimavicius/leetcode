/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashMap = {};
    hashMap[`${target - nums[0]}`] = 0;

    for(let i = 1; i < nums.length; i++){
        if(hashMap[`${nums[i]}`] !== undefined){
            return [i, hashMap[`${nums[i]}`]];
        }
        
        if(hashMap[`${target-nums[i]}`] === undefined){
            hashMap[`${target-nums[i]}`] = i;
        } 

    }
};