/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let maxValueInArr = Number.MIN_VALUE;
    let answer = Number.MAX_VALUE;

    // find max value in array - that is the highest K
    for(let i = 0; i < piles.length; i++){
        if(piles[i] > maxValueInArr)maxValueInArr = piles[i];
    }

    let start = 0;
    let end = maxValueInArr;
    let middle;
    while(start < end){
        middle = start + Math.floor((end - start + 1)/2);
        let timeTaken = calculateWithK(middle);

        if(timeTaken > h){
            start = middle;
        } else if(timeTaken <= h){
            end = middle - 1;
        }
        
        if(timeTaken <= h && middle < answer)answer = middle;

    }
    
    return answer;

    function calculateWithK(k){
        let time = 0;
        for(let i = 0; i < piles.length; i++){
            time += Math.ceil(piles[i]/k)
        }
        return time;
    }
};