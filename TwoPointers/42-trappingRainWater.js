/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let ans = 0;

    let maxLeftArr = [];
    let maxLeftVar = 0;
    for(let i = 0; i < height.length; i++){
        if(i==0)maxLeftArr[i] = 0;

        if(height[i - 1] > maxLeftVar){
            maxLeftVar = height[i - 1];
        }
        maxLeftArr[i] = maxLeftVar;
    }


    let maxRightArr = [];
    let maxRightVar = 0;
    for(let i = height.length - 1; i>= 0; i--){
        if(i==height.length - 1){
        maxRightArr[i] = 0;
        } else {

        if(height[i + 1] > maxRightVar){
            maxRightVar = height[i + 1];
        }
        maxRightArr[i] = maxRightVar;
        }

    }


    for(let i = 0; i < height.length; i++){
        let minHeight = Math.min(maxRightArr[i], maxLeftArr[i]);
        if(minHeight - height[i] > 0)ans+= minHeight - height[i];
    }
    return ans;
};