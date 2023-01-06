// medium, start 12:00 end 12:40. Not sure if I did it according to the restriction of doing it in-place. I am guessing it meant not creating a new array, which I did?
// space complexity is O(m + n), where m and n are matrix collumn and row quantity, time complexity O(nk), where n is quantity of zeros(could be all the elements) and k is row quantity 
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rowsToZero = [];
    let CollumnsToZero = [];
    let zeroRow = [];
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(i == 0)zeroRow[j] = 0;

            if(matrix[i][j] == 0){
                rowsToZero[i] = true;
                CollumnsToZero[j] = true;
            }
        }
    }

    for(let i = 0; i < zeroLocations.length; i++){
        matrix[zeroLocations[i][0]] = zeroRow;
        for(let j = 0; j < matrix.length; j++){
            matrix[j][zeroLocations[i][1]] = 0;
        }
    }
};

// a bit more concise solution
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rowsToZero = {};
    let collumnsToZero = {};
    let zeroRow = [];

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(i == 0)zeroRow[j] = 0;

            if(matrix[i][j] == 0){
                rowsToZero[i] = true;
                collumnsToZero[j] = true;
            }
        }
    }
    
    for(let i = 0; i < matrix.length; i++){
        if(rowsToZero[i] !== undefined){
            matrix[i] = zeroRow;
        }

        for(let j = 0; j < matrix[i].length; j++){
            if(collumnsToZero[j] !== undefined){
                for(let k = 0; k < matrix.length; k++){
                    matrix[k][j] = 0;
                }
            }

        }

    }
};