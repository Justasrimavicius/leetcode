/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // possible values - values, that have ASCII number 65-90 or 97-122
    let leftPointer = 0;
    let rightPointer = s.length - 1;
    while(rightPointer > leftPointer){
        if((s[rightPointer].charCodeAt() < 48 || s[rightPointer].charCodeAt() > 122) || (s[rightPointer].charCodeAt() > 90 && s[rightPointer].charCodeAt() < 97) || (s[rightPointer].charCodeAt() > 57 && s[rightPointer].charCodeAt() < 65)){
            rightPointer--;
        } else if((s[leftPointer].charCodeAt() < 48 || s[leftPointer].charCodeAt() > 122) || (s[leftPointer].charCodeAt() > 90 && s[leftPointer].charCodeAt() < 97) || (s[leftPointer].charCodeAt() > 57 && s[leftPointer].charCodeAt() < 65)){
            leftPointer++;
        } else if(s[leftPointer].toLowerCase() != s[rightPointer].toLowerCase()){
            return false;
        } else {

            leftPointer++;
            rightPointer--;
        }

    }
    return true;
};