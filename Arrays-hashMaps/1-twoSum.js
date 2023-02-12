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

// revision - up to 5 mins
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();

    for(let i = 0; i < nums.length; i++){
        let val = map.get(target - nums[i]);

        if(val === undefined){
            map.set(nums[i], i);
        } else {
            return [i, val];
        }
    }
};