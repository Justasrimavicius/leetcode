/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = '';
    x = x.toString();
    if(x < 0)return false;
    else{
        for(let i = 0; i < x.length; i++){
            str+=x[x.length-i-1];
        }
        console.log(str)
        if(str==x.toString())return true;
        else return false;
    }
};