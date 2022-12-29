/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    if(s.length == 1)return s;
    leftP = 0;
    rightP = s.length - 1;
    let temp;
    while(leftP < rightP){
        temp = s[rightP];
        s[rightP] = s[leftP];
        s[leftP] = temp;
        leftP++;
        rightP--;
    }
};