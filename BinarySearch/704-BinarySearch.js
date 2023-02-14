/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    let low = 0;
    let high = nums.length - 1;
    let middle;
    while(low < high){
        middle = low + Math.floor((high - low + 1) / 2);
        if(nums[middle] == target){
            return middle;
        }
        if(nums[middle] > target){
            high = middle - 1;
        } else {
            low = middle;
        }
    }

    return nums[low] == target ? low : -1;
};


// revision - 8 minutes.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let start = 0;
    let end = nums.length - 1;
    while(start < end){
        let mid = start + Math.floor((end - start)/2 + 1);

        if(nums[mid] === target)return mid;

        if(nums[mid] > target){
            end = mid - 1;
        } else {
            start = mid;
        }
    }

    if(nums[start] === target)return start;

    return -1;
    
};