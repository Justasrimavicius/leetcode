/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    if(intervals.length == 1)return 0;

    intervals.sort((a,b)=>{
        if(a[0] > b[0]){
            return 1;
        } else if(a[0] < b[0]){
            return -1;
        } else if(a[1] > b[1]){
            return 1;
        } else {
            return -1;
        }
    });

    let endVal = intervals[0][1];
    let ans = 0;
    for(let i = 1; i < intervals.length; i++){
        if(intervals[i][0] >= endVal){
            endVal = intervals[i][1];
        } else {
            if(intervals[i][1] > endVal){
                // nothing
            } else {
                endVal = intervals[i][1];
            }

            ans++;
        }
    }

    return ans;
};