/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let smallest = 5001;

    let start = 0;
    let end = nums.length - 1;
    let middle;
    while(start < end){
        middle = start + Math.floor((end - start + 1)/2);
        if(nums[middle] < smallest)smallest = nums[middle];

        // check right
        if(nums[end] < nums[middle]){
            // there is a "break" in the right interval - smallest value is there
            start = middle;
        } else {
            end = middle - 1;
        }
    }

    if(nums[start] < smallest)smallest = nums[start];
    return smallest;
};