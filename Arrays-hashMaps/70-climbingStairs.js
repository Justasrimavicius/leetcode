/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n == 1)return 1;
    if(n == 2)return 2;
    let prevPrev = 1;
    let prev = 2;
    let currentFibNum = 0;
    for(let i = 3; i <= n; i++){
        console.log(currentFibNum);
        console.log(prevPrev);
        console.log(prev);
        console.log('---');
        let temp = currentFibNum;
        currentFibNum = prevPrev + prev;
        prevPrev = prev;
        prev = currentFibNum;

        if(i==n)return currentFibNum;
    }
};