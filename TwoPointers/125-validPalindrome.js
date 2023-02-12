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


// revision - 5mins
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let singleString = '';

    for(let i = 0; i < s.length; i++){
        if((s[i].charCodeAt() <= 90 && s[i].charCodeAt() >= 65) || (s[i].charCodeAt() <= 122 && s[i].charCodeAt() >= 97) || (s[i].charCodeAt() <= 57 && s[i].charCodeAt() >= 48)){
            singleString+=s[i].toLowerCase();
        }
    }

    let leftP = 0;
    let rightP = singleString.length - 1;
    while(leftP < rightP){
        if(singleString[leftP] != singleString[rightP]){
            return false;
        }
        leftP++;
        rightP--;
    }
    return true;
};