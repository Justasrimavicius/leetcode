/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    for(let i = 0; i < position.length; i++){
        position[i] = [position[i], speed[i]];
    }
    position.sort((a,b)=>{return b[0] - a[0]});
    let stack = [position[0]];

    for(let i = 1; i < position.length; i++){
        let prevTime = ((target - stack[stack.length - 1][0]) / stack[stack.length - 1][1]);
        let nextTime = ((target - position[i][0]) / position[i][1]);
        if(nextTime <= prevTime){
            continue;
        };

        stack.push(position[i]);
    }
    
    return stack.length;
};