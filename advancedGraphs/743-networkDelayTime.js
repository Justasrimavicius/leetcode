/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    
    adj = new Map();
    for(let i = 0; i < times.length; i++){
        let val = adj.get(times[i][0]);
        if(val === undefined){
            adj.set(times[i][0], [[times[i][2], times[i][1]]]);
        } else {
            adj.set(times[i][0], [...val, [times[i][2], times[i][1]]])
        }
    }
    console.log(adj)
    let minHeap = new MinPriorityQueue({ priority: (item) => item[0] });
    
    minHeap.enqueue([0, k]);
    let visited = new Map();
    let ans = 0;

    while(minHeap.front()){
        if(visited.size == n)return ans;

        let val = minHeap.dequeue().element;
        if(visited.get(val[1]) !== undefined)continue;

        visited.set(val[1], true);

        if(val[0] > ans)ans = val[0];

        let neighbors = adj.get(val[1]);
        if(neighbors === undefined)continue;
        for(let i = 0; i < neighbors.length; i++){
            if(visited.get(neighbors[i][1]) !== undefined)continue;
            minHeap.enqueue([val[0] + neighbors[i][0], neighbors[i][1]]);
        }

    }
    if(visited.size != n)return -1;
    return ans;
};