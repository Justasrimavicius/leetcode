/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let start = 1;
    let end = n;
    while(start < end){

        let middle = start + Math.floor((end - start + 1)/2);
        let hi_lo = guess(middle);
        if(hi_lo == 0)return middle;
        
        if(hi_lo == -1){
            end = middle - 1;
        } else {
            start = middle + 1;
        }

    }

    return start;
};