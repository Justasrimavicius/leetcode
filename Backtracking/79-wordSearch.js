/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let map = new Map();
    for(let i = 0; i < board.length; i++){

        for(let j = 0; j < board[i].length; j++){
            if(board[i][j] == word[0]){
                if(word.length == 1)return true;
                if(startingLetterFound(i,j,0))return true;
            }
        }
    }
    return false;


    function startingLetterFound(i, j, k){

        if(map.get(`${i}${j}`) == true)return false;
        if(i >= board.length || i < 0)return false;
        if(j >= board[0].length || j < 0)return false;
        if(word[k] != board[i][j])return false;
        if(k == word.length - 1)return true;

        
        map.set(`${i}${j}`, true);
        let a = startingLetterFound(i,j+1,k+1);
        let b = startingLetterFound(i+1,j,k+1);
        let c = startingLetterFound(i,j-1,k+1);
        let d = startingLetterFound(i-1,j,k+1);
        map.delete(`${i}${j}`);
        if(a || b || c || d)return true;
        return false;
    }
};