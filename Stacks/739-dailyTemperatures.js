// medium, took 1 hour. The explanation(without solution) was looked up, but I was thinking of doing something similar with a stack myself.
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let answer = Array(temperatures.length);
    let stack = [];
    for(let i = 0; i < temperatures.length; i++){
        if(i != 0){
            while(stack[stack.length - 1] && (temperatures[i] > stack[stack.length - 1].value)){
                answer[stack[stack.length - 1].index] = i - stack[stack.length - 1].index;
                stack.pop();
            }
        }
        stack.push({value: temperatures[i], index: i});
    }
    for(let i = 0; i < answer.length; i++){
        if(answer[i] === undefined){
            answer[i] = 0;
        }
    }
    return answer;
};