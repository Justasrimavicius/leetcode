// start 21:50, end 22:46. solution idea - using prefix and postfix multiplication in the answer array - was googled.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let answer = [];
    let temp = 1;
    // idea - calculating prefixes and postfixes of i(excluding i) in the answer array and multiplying them
    // firstly calculate the product of prefixes of index i
    for(let i = 0; i < nums.length; i++){
        if(i == 0){
            answer[i] = 1;
            temp = nums[i];
        } else {
            answer[i] = temp;
            temp = nums[i] * temp;
        }
    }
    temp = 1;
    // then, from the back, do it with suffixes
    for(let i = nums.length - 1; i >= 0; i--){
        if(i == nums.length - 1){
            temp = nums[i];
        } else {
            answer[i] = answer[i] * temp;
            temp = temp * nums[i];
        }
    }
    return answer;
};