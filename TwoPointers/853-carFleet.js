/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    if(position.length == 1)return 1;


    let positionAndSpeed = [];
    for(let i = 0; i < position.length; i++){
        positionAndSpeed.push({position: position[i], speed: speed[i]})
    }
    // //merge sort
    // function mergeSort(array){
    //     if(array.length < 2)return array;
    //     function merge(leftPart, rightPart){
    //     let arr = [];
    //     while(leftPart[0] && rightPart[0]){
    //         if(leftPart[0].position > rightPart[0].position){
    //             arr.push(rightPart[0]);
    //             rightPart.shift();
    //         } else {
    //             arr.push(leftPart[0]);
    //             leftPart.shift();
    //         }
    //     }
    //     return [...arr,...leftPart,...rightPart];
    // }
    //     let leftPart = array.splice(0, Math.floor(array.length/2));
    //     let rightPart = array;
    //     return merge(mergeSort(leftPart), mergeSort(rightPart));
    // }

    // let sorted = mergeSort(positionAndSpeed);
    let sorted = positionAndSpeed;
    sorted.sort((a,b)=>{return a.position - b.position})

    let stack = [];
    for(let i = sorted.length - 1; i >= 0; i--){
        stack.push(sorted[i]);
        if(i != sorted.length - 1){
            if(((target - stack[stack.length - 1].position)/stack[stack.length - 1].speed) <= ((target - stack[stack.length - 2].position)/stack[stack.length - 2].speed)){
                stack.pop();
            }
        }
    }

    // let i = sorted.length - 2;
    // let x = sorted.length - 1;
    // while(x > 0){
    //     if(((target - sorted[x].position)/sorted[x].speed) >= ((target - sorted[i].position)/sorted[i].speed)){
    //         sorted.splice(i,1);
    //         x--;
    //     }
    //     i--;
    //     if(i < 0){
    //         x--;
    //         i = x - 1;
    //     }
    // }
    return stack.length;
};