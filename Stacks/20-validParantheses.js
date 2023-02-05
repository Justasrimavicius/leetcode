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


// revision - took 9 minutes, a little bit too mutch guessing was made. Make sure to read the problem caraefully.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 !== 0)return false;

    let stack = [];



    for(let i = 0; i < s.length; i++){
        if(s[i] == '(' || s[i] == '{' || s[i] == '['){
            stack.push(s[i]);
        } else {
            if(stack.length <= 0)return false;
            
            let opening = stack.pop();
            if(opening == '[' && s[i] != ']')return false;
            if(opening == '(' && s[i] != ')')return false;
            if(opening == '{' && s[i] != '}')return false;
        }

    }

    if(stack.length != 0)return false;

    return true;
};