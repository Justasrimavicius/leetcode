/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let answerArr = [];

    for(let i = 0; i < intervals.length; i++){

        if(newInterval[0] > intervals[i][1] || newInterval[1] < intervals[i][0]){ // NOT overlapping
            answerArr.push(intervals[i]);
        } else {
            newInterval = [Math.min(intervals[i][0], newInterval[0]), Math.max(intervals[i][1], newInterval[1])];
        }

    }
    answerArr.push(newInterval);

    answerArr.sort((a,b)=>{return a[0] - b[0]})
    return answerArr;
};