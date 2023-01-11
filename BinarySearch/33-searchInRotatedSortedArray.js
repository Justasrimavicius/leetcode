/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let middle;
    while(start < end){
        middle = start + Math.floor((end - start + 1)/2);
        if(nums[middle] == target)return middle;

        // Array has 2 sorted portions. Firstly, find out if middle point is in the left or right portion
        if(nums[middle] > nums[start]){ // left portion
            if(target < nums[middle] && target >= nums[start]){
                end = middle - 1;
            } else {
                start = middle + 1;
            }
        } else { // right portion
            if(target > nums[middle] && target <= nums[end]){
                start = middle + 1;
            } else {
                end = middle - 1;
            }
        }

    }

    if(nums[start] == target)return start;

    return -1;

};