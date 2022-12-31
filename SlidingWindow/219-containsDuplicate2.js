/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    if(k==0)return false;

    let leftP = 0;
    let rightP = 1;
    if(nums[0] == nums[1])return true;
    let hashMap = {};
    hashMap[nums[0]] = true;
    hashMap[nums[1]] = true;

    while(rightP < nums.length - 1){
        if(Math.abs(rightP - leftP) < k){
            if(hashMap[nums[rightP + 1]] === true)return true;
            rightP++;
            hashMap[nums[rightP]] = true;
        } else {
            hashMap[nums[leftP]] = false;
            leftP++;
            
            if(hashMap[nums[rightP + 1]] === true)return true;
            rightP++;
            hashMap[nums[rightP]] = true;
        }

    }
    return false;
};