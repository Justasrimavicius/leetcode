/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length < 2)return intervals;

    intervals.sort((a,b)=>{return a[0] - b[0]});
    
    for(let i = 1; i < intervals.length; i++){
        if(intervals[i][0] > intervals[i - 1][1] && intervals[i - 1][1] < intervals[i][0]){
            // not overlaping - leave as is
        } else {
            intervals.splice(i-1,2,[Math.min(intervals[i][0], intervals[i-1][0]), Math.max(intervals[i][1], intervals[i - 1][1])]);
            i--;
        }
    }
    return intervals;
};