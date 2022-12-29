/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(nums.length == 1)return;
    while(nums.length < k){
        k = k - nums.length;
    }
    let leftP = 0;
    let rightP = nums.length - 1;
    while(leftP < rightP){
        let temp = nums[rightP];
        nums[rightP] = nums[leftP];
        nums[leftP] = temp;
        leftP++;
        rightP--;
    }
    leftP = 0;
    rightP = k - 1;
    while(leftP < rightP){
        let temp = nums[rightP];
        nums[rightP] = nums[leftP];
        nums[leftP] = temp;
        leftP++;
        rightP--;
    }
    leftP = k;
    rightP = nums.length - 1;
    while(leftP < rightP){
        let temp = nums[rightP];
        nums[rightP] = nums[leftP];
        nums[leftP] = temp;
        leftP++;
        rightP--;
    }
};