/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    if(points.length == 1)return 0;

    let minHeap = new MinPriorityQueue({ priority: (item) => item[0] });
    minHeap.enqueue([0, 0]);

    let visited = new Map();

    let ans = 0;

    while(visited.size != points.length){
        let temp = minHeap.dequeue();
        let cost = temp.element[0];
        let i = temp.element[1];

        if(visited.get(i) !== undefined)continue;
        visited.set(i, true);
        ans += cost;

        for(let j = 0; j < points.length; j++){
            let dist = dist2points(points[j], points[i]);
            if(visited.get(j) !== undefined)continue;
            minHeap.enqueue([dist, j]);
        }
    }

    return ans;
    

    function dist2points(p1, p2){
        return (Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]))
    }
};