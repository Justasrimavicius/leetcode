// start 8:45 end 9:20
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = Array(9);
    let collumns = Array(9);
    let grids = Array(9);

    for(let i = 0; i < board.length; i++){

        for(let j = 0; j < board.length; j++){

            let number = board[i][j];
            if(number != '.'){
                // populate rows hashMap. index of rows[] is the row of the grid. It should contain a hashmap. If a collision would happen, that means 2 same elements in the same row. return false.
                if(rows[i] === undefined){
                    rows[i] = {};
                    rows[i][`${number}`] = true;
                } else if(rows[i][`${number}`] === undefined){
                    rows[i][`${number}`] = true;
                } else {
                    return false;
                }

                // populate collumns hashMap. Same as rows - if collisions at certain collumn happen, return false.
                if(collumns[j] === undefined){
                    collumns[j] = {};
                    collumns[j][`${number}`] = true;
                } else if(collumns[j][`${number}`] === undefined){
                    collumns[j][`${number}`] = true;
                } else {
                    return false;
                }

                let gridX = Math.floor(j/3) + 1;
                let gridY = Math.floor(i/3) + 1;
                if(grids[`${gridX} ${gridY}`] === undefined){
                    grids[`${gridX} ${gridY}`] = {};
                    grids[[`${gridX} ${gridY}`]][`${number}`] = true;
                } else if(grids[[`${gridX} ${gridY}`]][`${number}`] === undefined){
                    grids[[`${gridX} ${gridY}`]][`${number}`] = true;
                } else {
                    return false;
                }
            }

        }


    }
    return true;
};