/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalG = 0;
    let totalC = 0;
    for(let i = 0; i < gas.length; i++){
        totalG+=gas[i];
        totalC+=cost[i];
    }
    if(totalG<totalC)return -1;


    let totalGas = gas[0];

    let pointer = 0;
    let ans = 0;
    let isStart = true;
    while(pointer < gas.length){
        if(totalGas > cost[pointer]){
            totalGas -= cost[pointer];
            
            if(isStart){
                ans = pointer;
                isStart = false;
            }
        } else {
            totalGas = 0;
            isStart = true;
        }
        
        totalGas += gas[pointer+1];
        pointer++;
    }
    return ans;
};