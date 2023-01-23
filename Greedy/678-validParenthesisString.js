/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let openingStack = [];
    let starStack = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] === '('){
            openingStack.push(i);
        } else if(s[i] === ')'){
            if(openingStack.length <= 0 && starStack.length <= 0){
                return false;
            } else if(openingStack.length > 0){
               openingStack.pop();
            } else {
                starStack.pop();
            }
        } else {
            starStack.push(i);
        }
    }
    
    while(openingStack.length > 0 && starStack.length > 0){
        if(starStack[starStack.length - 1] < openingStack[openingStack.length - 1]){
            return false;
        }
        openingStack.pop();
        starStack.pop();
    }
    if(openingStack.length > 0)return false;
    return true;

};