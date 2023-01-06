/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    // let map = new Map();
    let ans = 0;
    let costsArr = [];
    for(let i = 0; i < costs.length; i++){
        if(costsArr[costs[i]] === undefined){
            costsArr[costs[i]] = 1;
        } else {
            costsArr[costs[i]]++;
        }
    }

    for(let i = 0; i < costsArr.length; i++){
        if(costsArr[i] !== undefined){
            if(coins >= i * costsArr[i]){
                coins = coins - i * costsArr[i];
                ans+=costsArr[i];
            } else {
                ans+= (Math.floor(coins/i));
                return ans;
            }
        }
    }
    return ans

    // // first solution - sort by ascending order. 
    // costs.sort((a,b)=>{return a - b});
    // let ans = 0;

    // let i = 0;
    // while(costs[i] <= coins){
    //     coins = coins - costs[i];
    //     i++;
    //     ans++;
    // }
    // return ans;
};