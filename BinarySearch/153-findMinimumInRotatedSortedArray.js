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


// revision - 18 minutes
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums.length == 1)return nums[0];
    
    let start = 0;
    let end = nums.length - 1;
    let mid;
    while(start < end){
        console.log(start)
        console.log(end)
        mid = start + Math.floor((end - start + 1)/2);

        if(Math.abs(end - start) == 1){
            return nums[start] < nums[end] ? nums[start] : nums[end];
        }

        if(nums[mid] > nums[end]){
            start = mid;
        } else {
            end = mid;
        }

    }

};