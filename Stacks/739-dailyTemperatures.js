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


// revision 33 minutes. Forgot about the solution, tried out a different approach - create an array with temperature/index pairs, sort it by temperature and check it. Didnt notice it would not be efficient. Watched the video again.

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let ans = [];
   
    let stack = [];
    for(let i = 0; i < temperatures.length; i++){
        if(i != 0){
            while((stack.length > 0) && stack[stack.length - 1].temperature < temperatures[i]){
                ans[stack[stack.length - 1].index] = i - stack[stack.length - 1].index;
                stack.pop();
            }
        }

        stack.push({temperature: temperatures[i], index: i});
    }
    
    for(let i = 0; i < temperatures.length; i++){
        // console.log(ans[i])
        if(ans[i] === undefined)ans[i] = 0;
    }
    return ans;
};