/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let answer = [];

    let start = 0;
    let end = nums.length - 1;
    let middle;


    // do a right biased binary search - look for target that is farthest to the right
    while(start < end){
        middle = start + Math.floor((end - start + 1)/2);

        if(nums[middle] == target){
            start = middle;
        } else if(nums[middle] < target){
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    if(nums[start] != target)return [-1, -1];

    answer[1] = start;

    start = 0;
    end = nums.length - 1;

    // left biased now
    while(start < end){
        middle = start + Math.floor((end - start + 1)/2);

        if(nums[middle] == target){
            if(nums[middle - 1] == target)end = middle - 1;
            if(nums[middle - 1] != target){
                start = middle;
                break;
            }
        } else if(nums[middle] < target){
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    answer[0] = start;
    return answer;


};