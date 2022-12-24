/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(target > nums[nums.length - 1])return nums.length;
    if(target < nums[0])return 0;

    function binarySearch(start,end){
        if(nums[start] == target){
            return start;
        }
        if(nums[end] == target){
            return end;
        }
        if(start == end - 1)return start + 1;
        if(nums[Math.floor((start+end)/2)] < target){
            return binarySearch(Math.floor((start+end)/2), end);
        } else{
            return binarySearch(start, Math.floor((start+end)/2));
        }
    }

    return binarySearch(0, nums.length - 1);


};

// eh solutiion - binary search, but a little clumsy