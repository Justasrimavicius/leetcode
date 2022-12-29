/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length == 1)return 0;
    let ans = 0;

    let leftP = 0;
    let rightP = 1;
    while(rightP < prices.length){
        if(prices[leftP] < prices[rightP]){
            ans = ans > (prices[rightP] - prices[leftP]) ? ans : prices[rightP] - prices[leftP];
        } else {
            leftP = rightP;
        }
        rightP++;
    }
    return ans;

};