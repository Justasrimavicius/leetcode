// medium, start 10:35 end 10:50
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    for(let i = 0; i < tokens.length; i++){
        if(tokens[i] == '+'){
            stack.push(parseFloat(stack.pop())+parseFloat(stack.pop()));
        } else if(tokens[i] == '-'){
            let lastElem = parseFloat(stack.pop());
            let OneBeforeLastElem = parseFloat(stack.pop());
            stack.push(OneBeforeLastElem-lastElem)
        } else if(tokens[i] == '*'){
            stack.push(stack.pop()*stack.pop())
        } else if(tokens[i] == '/'){
            let lastElem = parseFloat(stack.pop());
            let oneBeforeLastElem = parseFloat(stack.pop());
            stack.push(Math.trunc(oneBeforeLastElem/lastElem))
        } else {
            stack.push(tokens[i]);
        }
    }
    return stack[0]
};