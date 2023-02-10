function pacificAtlantic(heights) {
    let pacific = new Map()
    let atlantic = new Map()
    

    for (let i = 0; i < heights[0].length; i++){
        dfs(0, i, 0, pacific)  // Top row
        dfs(heights.length - 1, i, 0, atlantic) // Bottom row
    }
    for (let i = 0; i < heights.length; i++){
        dfs(i, 0, 0, pacific)  // Left column
        dfs(i, heights[0].length - 1, 0, atlantic) // Right column
    } 


    function dfs(i, j, previousHeight, set){
        if (i < 0 || i == heights.length || j < 0 || j == heights[0].length){
            return;
        }
        if (heights[i][j] < previousHeight){
            return
        }
        
        if (set.get(`${i}-${j}`) !== undefined){
            return;
        }
        
        set.set(`${i}-${j}`, true);
        
        dfs(i + 1, j, heights[i][j], set)
        dfs(i - 1, j, heights[i][j], set)
        dfs(i, j + 1, heights[i][j], set)
        dfs(i, j - 1, heights[i][j], set)
    }
    
    // Build a list of cells reachable from both oceans.
    let result = []
    for (let index of pacific){
        if (atlantic.get(index[0]) !== undefined){
            console.log(index[0].split('-'))
            result.push([parseFloat(index[0].split('-')[0]), parseFloat(index[0].split('-')[1])]);
        }
    }
    
    return result;
};