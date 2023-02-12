/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let answer = 0;
    let rottenPositions = [];
    let fresh = 0;

    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === 2){
                rottenPositions.push([i,j]);
            } else if(grid[i][j] == 1){
                fresh++;
            }
        }
    }
    directions = [[0,1],[0,-1],[1,0],[-1,0]]
    while(fresh > 0 && rottenPositions.length > 0){
        let curLen = rottenPositions.length;

        for(let i = 0; i < curLen; i++){
            let pos = rottenPositions.shift();

            for(let d = 0; d < directions.length; d++){
                if(pos[0] + directions[d][0] < 0 || pos[0] + directions[d][0] == grid.length ||
                pos[1] + directions[d][1] < 0 ||pos[1] + directions[d][1] == grid[0].length || 
                grid[pos[0] + directions[d][0]][pos[1] + directions[d][1]] !== 1){
                    continue;
                }
                
                rottenPositions.push([pos[0] + directions[d][0], pos[1] + directions[d][1]]);
                grid[pos[0] + directions[d][0]][pos[1] + directions[d][1]] = 2;
                fresh--;
            }
        }
        answer++;
    }
    if(fresh > 0)return -1;
    return answer;
};