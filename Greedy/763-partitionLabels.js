/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    if(s.length == 1)return [1];

    let map = {};
    for(let i = 0; i < s.length; i++){
        let val = map[s[i]];
        if(val === undefined){
            map[s[i]] =  [i, i];
        } else {
            map[s[i]] =  [val[0], i];
        }
    }
    let prev = null;

    let ans = Object.values(map);

    for(let i = 0; i < ans.length; i++){
        let curr = ans[i];
        if(prev == null){
            prev = ans[i];
            continue;
        }
        if(prev[1] >= curr[0]){
            i--;
            ans.splice(i,2,[prev[0], Math.max(curr[1], prev[1])]);
        }

        prev = ans[i];
    }
    return ans.map(field=>field[1]-field[0]+1)
};