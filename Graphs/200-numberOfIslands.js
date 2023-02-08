/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let islands = 0;

    function findIslandSize(i, j){
        if(i < 0 || j < 0)return;

        if(grid[i][j] === '0')return;

        grid[i][j] = '0';

        if(i + 1 < grid.length){
            findIslandSize(i + 1, j);
        }
        if(j + 1 < grid[0].length){
            findIslandSize(i, j + 1);
        }
        if(i - 1 < grid.length){
            findIslandSize(i - 1, j);
        }
        if(j - 1 < grid[0].length){
            findIslandSize(i, j - 1);
        }
        return;
    }

    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] == '1'){
                findIslandSize(i, j);
                islands++;
            }
        }
    }

    return islands;
};