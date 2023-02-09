/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxArea = 0;

    
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] == 1){
                maxArea = Math.max(maxArea, calculateArea(i,j, 0));
            }
        }
    }

    function calculateArea(i,j, area){
        if(i < 0 || i == grid.length)return area;
        if(j < 0 || j == grid[0].length)return area;
        if(grid[i][j] != 1)return area;

        grid[i][j] = 0;
        let down = calculateArea(i + 1, j, area);
        let up = calculateArea(i - 1, j, area);
        let right = calculateArea(i, j + 1, area);
        let left = calculateArea(i, j - 1, area);

        return down + up + right + left + 1;
    }


    return maxArea;



};