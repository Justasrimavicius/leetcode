/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {

    let ans = 0;
    let leftP = 0;
    let rightP = k - 1;

    let initialString = '';
    while(rightP < num.toString().length){
        initialString = num.toString().slice(leftP, rightP + 1);
        leftP++;
        rightP++;
        if(num%initialString == 0)ans++;
    }
    return ans;
};