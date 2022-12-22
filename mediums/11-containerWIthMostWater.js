/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    function calcVolume(height1, height2, width){
        let height = height1 > height2 ? height2 : height1;
        return height*Math.abs(width);
    }
    let maxVolume = -1;
    let pointerA = 0;
    let pointerB = height.length - 1;
    
    while(pointerA < pointerB){
        console.log(pointerA);
        console.log(pointerB);
        console.log('--')

        let volume = calcVolume(height[pointerA], height[pointerB], pointerA-pointerB)
        if(height[pointerA] < height[pointerB]){
            if(volume > maxVolume)maxVolume = volume;
            pointerA++;
        } else {
            if(volume > maxVolume)maxVolume = volume;
            pointerB--;
        }
    }
    return maxVolume;
};