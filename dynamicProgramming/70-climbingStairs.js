/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n < 3)return n;
    let ans = 2;
    let prev = 1;
    let prevPrev = 1;
    for(let i = 1; i < n; i++){
        ans = prev + prevPrev;
        prevPrev = prev;
        prev = ans;
    }

    return ans;
};