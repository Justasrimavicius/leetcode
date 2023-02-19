/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    let costs = [];
    for(let i = 0; i < n; i++){
        costs[i] = 10000000;
    }
    costs[src] = 0;

    for(let i = 0; i <= k; i++){
        let tempCosts = JSON.parse(JSON.stringify(costs));
        for(let j = 0; j < flights.length; j++){
            if(costs[flights[j][0]] === 10000000)continue;
            if(costs[flights[j][0]] + flights[j][2] < tempCosts[flights[j][1]]){
                tempCosts[flights[j][1]] = flights[j][2] + costs[flights[j][0]];
            }
        }

        costs = JSON.parse(JSON.stringify(tempCosts));
    }
    console.log(costs)
    return costs[dst] === 10000000 ? -1 : costs[dst];
};