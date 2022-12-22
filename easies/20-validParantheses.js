/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    if(s.length % 2 != 0) return false;

    for(let i = 0; i < s.length; i++){
        if(s[i] == '(' || s[i] == '{' || s[i] == '['){
            stack.push(s[i]);
        } else {
            if(s[i] == ')'){
                if(stack[stack.length - 1] != '(')return false;
            } else if(s[i] == '}'){
                if(stack[stack.length - 1] != '{')return false;
            } else if(s[i] == ']'){
                if(stack[stack.length - 1] != '[')return false;
            }
            stack.pop();
        }
        
    }
    if(stack.length == 0) return true;
    return false;
};