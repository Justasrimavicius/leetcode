/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if(points.length == 1)return 1;

    let shotArrows = 0;

    // [10,16] [7,12] [2,8] [1,6]
    // [4,5] [3,4] [2,3] [1,2]
    // [7,8] [5,6] [3,4] [1,2]
    
    points.sort((a,b)=>{return b[0] - a[0]})

    let leftP = 0;
    let rightP = 1;
    
    while(rightP < points.length){
        if(points[leftP][0] >= points[rightP][0] && points[leftP][0] <= points[rightP][1]){
            rightP++;
        } else {
            leftP = rightP;
            rightP++;
            shotArrows++;
        }
    }
    shotArrows++;
    return shotArrows;
};