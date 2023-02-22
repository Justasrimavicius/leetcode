/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // This works, but requires m*n space
    
    // let matrix1D = [];
    // for(let i = 0; i < matrix.length; i++){
    //     matrix1D.push(...matrix[i]);
    // }
    

    // let start = 0;
    // let end = matrix1D.length - 1;
    // while(start < end){
    //     let middle = start + Math.floor((end - start + 1)/2);

    //     if(matrix1D[middle] == target)return true;

    //     if(matrix1D[middle] > target){
    //         end = middle - 1;
    //     } else {
    //         start = middle;
    //     }
    // }
    // if(matrix1D[start]==target)return true;
    // return false;

    let start = 0;
    let end = matrix.length - 1;
    let middle;
    while(start < end){
        middle = start + Math.floor((end - start + 1)/2);
        if(target < matrix[middle][0]){
            end = middle - 1;
        } else if(target >= matrix[middle][matrix[middle].length - 1]){
            start = middle;
        } else {
            return firstDirectionFound(matrix[middle]);
        }
    }

    // if it exits the loop, that means the value could still exist in matrix[start]
    if((target >= matrix[start][0]) && (target <= matrix[start][matrix[start].length - 1])){
        return firstDirectionFound(matrix[start]);
    }
    return false;

    function firstDirectionFound(matrix){
        let start = 0;
        let end = matrix.length - 1;
        let middle;
        while(start < end){
            middle = start + Math.floor((end - start + 1)/2);
            if(matrix[middle] == target)return true;

            if(matrix[middle] > target){
                end = middle - 1;
            } else {
                start = middle;
            }
        }
        if(matrix[start] == target)return true;

        return false;
    }
};



//revision 20minutes
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    let start = 0;
    let end = matrix.length - 1;
    let mid = end;

    while(start < end){
        mid = start + Math.floor((end - start + 1)/2);
        if(target >= matrix[mid][0] && target <= matrix[mid][matrix[mid].length - 1]){
            end = mid;
            break;
        } else {
            
            if(target < matrix[mid][0]){
                end = mid - 1;
            } else {
                start = mid;
            }
        }
    }
    if(target < matrix[end][0] || target > matrix[end][matrix[end].length - 1])return false;
    // end is the row needed.
    let row = end;

    start = 0;
    end = matrix[row].length - 1;
    mid = end;

    while(start < end){
        mid = start + Math.floor((end - start + 1)/2);

        if(target == matrix[row][mid]){
            return true;
        } else {
            
            if(target < matrix[row][mid]){
                end = mid - 1;
            } else {
                start = mid;
            }

        }
    }

    if(matrix[row][end] == target)return true;
    return false;
};