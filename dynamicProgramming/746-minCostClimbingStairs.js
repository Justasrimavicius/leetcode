/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let prev = cost[cost.length - 2];
    let prevsPrev = cost[cost.length - 1];
    let temp;
    for(let i = cost.length - 3; i >= 0; i--){
        temp = prev < prevsPrev ? prev + cost[i] : prevsPrev + cost[i];

        prevsPrev = prev;
        prev = temp;

    }

    return prevsPrev > prev ? prev : prevsPrev;
};