/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    
    let start = 1;
    let end = num;
    let middle;
    while(start < end){
        middle = start + Math.floor((end - start + 1)/2);

        if(middle * middle == num)return true;

        if(middle * middle > num){
            end = middle - 1;
        } else {
            start = middle;
        }
    }
    return start * start == num ? true : false;
};