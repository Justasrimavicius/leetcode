/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let map = {};
    let x = 0;
    for(let i = 0; i < nums.length; i++){
        if(!map[nums[i]]){
            map[nums[i]] = true;
            let temp = nums[x];
            nums[x] = nums[i];
            nums[i] = temp;
            x++;
        }
    }
    console.log(map)
    return x;
};
// speed beats 80%, memory beats 1%
// DECENTLY FAST, LARGE IN MEMORY(should have been done without map)

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let x = 0;
    let smallestNum = -200;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > smallestNum){
            smallestNum = nums[i];
            let temp = nums[x];
            nums[x] = nums[i];
            nums[i] = temp;
            x++;
        }
    }
    return x;
};

// speed beats 99.95%, memory beats 22%