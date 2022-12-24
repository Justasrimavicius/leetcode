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