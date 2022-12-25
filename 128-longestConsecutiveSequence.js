// start 9:30 end 10:05
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length == 0 || nums.length == 1)return nums.length;

    let numsHashMap = {};
    // idea: turn the initial input nums[] into a hashMap, loop over it again and check if each value has a left
    // value in the hashMap. If it has a left value, dont do anything - it is not the start of a sequance.
    // If it does not have a left value, loop through values, until there isnt a value anymore.
    // This would only loop through each element twice(with the starting loop of turning array into hashMap, it would be three), so it is O(3n)=O(n).
    
    for(let i = 0; i < nums.length; i++){
        if(numsHashMap[`${nums[i]}`] === undefined){
            numsHashMap[`${nums[i]}`] = nums[i];
        }
    }
    let maxConsecCount = 0;
    for(let i = 0; i < nums.length; i++){
        let currConsecCount = 0;
        if(numsHashMap[`${nums[i]-1}`] === undefined){ // meaning, there isnt a value 1 less than current, therefore it is the start of a sequance
            let k = 0;
            while(numsHashMap[`${nums[i]+k}`] !== undefined){
                currConsecCount++;
                k++;
            }
            if(currConsecCount > maxConsecCount)maxConsecCount = currConsecCount;
        }
    }
    return maxConsecCount;
};