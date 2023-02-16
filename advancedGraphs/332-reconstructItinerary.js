/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    if(tickets.length == 1){
        if(tickets[0][0] == "JFK"){
            return [tickets[0][0], tickets[0][1]];
        } else return [tickets[0][1], tickets[0][0]];
    }

    tickets.sort((a,b)=>{
        if(a[0] != b[0]){
            return a[0].localeCompare(b[0]);
        } else {
            return a[1].localeCompare(b[1]);
        }
    })

    let map = new Map();
    for(let i = 0; i < tickets.length; i++){
        let val = map.get(tickets[i][0]);
        if(val === undefined){
            map.set(tickets[i][0], [tickets[i][1]]);
        } else{
            map.set(tickets[i][0], [...val, tickets[i][1]]);
        }
    }
    console.log(map)
    
    ans = ['JFK'];

    return dfs('JFK');

    function dfs(startPoint){
        if(ans.length == tickets.length + 1){
            return ans;
        }

        let startPointDest = map.get(startPoint);
        if(startPointDest === undefined || startPointDest.length == 0){
            return false;
        }

        for(let i = 0; i < startPointDest.length; i++){
            map.set(startPoint, [...startPointDest.slice(0, i), ...startPointDest.slice(i + 1)]);
            ans.push(startPointDest[i]);

            let possibleAns = dfs(startPointDest[i], [...ans, startPointDest[i]]);
            if(possibleAns !== false){
                return possibleAns;
            }
            ans.pop();
            map.set(startPoint, startPointDest);

        }
        return false;
    }

};