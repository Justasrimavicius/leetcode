/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let cnt = true;

    if(nums.length == 1){
        if(nums[0] == val)return 0;
        else{
            return 1;
        }
    }

    for(let i = 0; i < nums.length; i++){
        if(nums[i] == val){
                for(let j = nums.length - 1; j >= 0; j--){
                    if(j > i){
                        if(nums[j] != val && cnt == true){
                            let temp = nums[j];
                            nums[j] = val;
                            nums[i] = temp;
                            cnt = false;
                        }
                    }
                }
                cnt = true;
            }
        }
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == val){
            return i;
        }
    }
};