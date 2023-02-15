/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    let parents = [0];
    let rank = [1];
    for(let i = 1; i <= edges.length; i++){
        parents.push(i);
        rank.push(1);
    }
    
    function find(node){
        
        let par = parents[node];
        while(par != parents[par]){
            parents[par] = parents[parents[par]];

            par = parents[par];
        }
        return par;
    }
    function union(n1, n2){
        p1 = find(n1);
        p2 = find(n2);

        if(p1 == p2)return [n1, n2];

        if(rank[p1] > rank[p2]){
            rank[p1] += rank[p2];
            parents[p2] = parents[p1];
        } else {
            rank[p2] += rank[p1];
            parents[p1] = parents[p2];
        }


    }

    for(let i = 0; i < edges.length; i++){
        let ans = union(edges[i][0], edges[i][1])
        if(ans !== undefined)return ans;
    }
};