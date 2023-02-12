/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    
    let zeroTiles = new Map();
    
    for(let i = 0; i < board.length; i++){
        // check first row and last row for Os
        if(board[i][0] == 'O'){
            findAllZeros(i,0);
        }
        
        if(board[i][board[0].length - 1] == 'O'){
            findAllZeros(i,board[0].length - 1);
        }
    }
    for(let j = 1; j < board[0].length - 1; j++){
        // check first row and last row for Os
        if(board[0][j] == 'O'){
            findAllZeros(0,j);
        }
        
        if(board[board.length - 1][j] == 'O'){
            findAllZeros(board.length - 1,j);
        }
    }

    function findAllZeros(i, j){
        if(i < 0 || i == board.length || j < 0 || j == board[0].length)return;
        if(board[i][j] === 'X')return;


        let currTile = zeroTiles.get(`${i}-${j}`);
        if(currTile !== undefined)return;
        zeroTiles.set(`${i}-${j}`, true);

        findAllZeros(i + 1, j);
        findAllZeros(i - 1, j);
        findAllZeros(i, j + 1);
        findAllZeros(i, j - 1);
    }

    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            if(zeroTiles.get(`${i}-${j}`) === undefined){
                board[i][j] = 'X';
            } else {
                board[i][j] = 'O';
            }
        }
    }
};