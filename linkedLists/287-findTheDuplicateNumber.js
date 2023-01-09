/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slowP = 0;
    let fastP = 0;

    // [1,3,4,2,2]

    while(true){ // go until it is broken manually
        slowP = nums[slowP];
        fastP = nums[nums[fastP]];
        if(slowP == fastP)break;
    }
    console.log(slowP)
    let secondSlowP = 0;
    while(true){
        slowP = nums[slowP];
        secondSlowP = nums[secondSlowP];
        if(slowP == secondSlowP)return slowP;
    }
};