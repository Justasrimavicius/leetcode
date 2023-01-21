/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    intervals.sort((a,b)=>{
        if(a[0] > b[0]){
            return 1;
        } else if(a[0] < b[0]){
            return -1;
        } if(a[1] < b[1]){
            return 1;
        } else {
            return -1;
        }
    })

    let ans = [intervals[0]];
    //  ----------
    //  ----
    //   -------
    //    ----
    for(let i = 1; i < intervals.length; i++){
        if(ans[ans.length - 1][1] >= intervals[i][1]){
            continue;
        } else {
            ans.push(intervals[i]);
        }
    }
    return ans.length;
};