/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let sum = 0;
    for(let i = 0; i < gas.length; i++){
        sum += gas[i] - cost[i];
    }
    if(sum < 0)return -1;

    let tank = 0;

    let leftP = 0;
    let rightP = 0;
    while(leftP < gas.length){

        tank += gas[rightP] - cost[rightP];
        if(tank < 0){
            leftP = rightP + 1;
            rightP++;
            // rightP = leftP;
            tank = 0;
            continue;
        }
        rightP++;
        if(rightP == gas.length)return leftP;
    }


    return -1;
};