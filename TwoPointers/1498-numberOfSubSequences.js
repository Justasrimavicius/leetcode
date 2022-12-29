// DOES NOT WORK - CANT FIGURE OUT WHY
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    let ans = 0;
    let mod = 1000000007;
    nums.sort((a,b)=>{return a - b})
    console.log(nums);
    loop1:
    for(let i = 0; i < nums.length; i++){
        let leftP = i;
        let rightP = nums.length - 1;
        if(nums[leftP] + nums[leftP] > target)return ans;
        while(leftP <= rightP){
            if(nums[leftP] + nums[rightP] <= target){
                // console.log(leftP);
                // console.log(rightP);
                // console.log('--');
                // ans++;
                ans+=Math.pow(2, rightP - leftP);
                ans %= mod;
                continue loop1;
            }
            rightP--;
        }
    }
    return ans;

};