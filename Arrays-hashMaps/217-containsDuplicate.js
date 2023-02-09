/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hashMap = {};
    for(let i = 0; i < nums.length; i++){
        if(!hashMap[nums[i]]){
            hashMap[nums[i]] = true;
        } else {
            return true;
        }
    }
    return false;
};

// revision
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if(nums.length == 1)return false;
    let map = {};
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]] === undefined){
            map[nums[i]] = true;
        } else return true;
    }
    return false;
};