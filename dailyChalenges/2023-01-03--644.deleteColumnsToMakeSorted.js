/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let answer = 0;
    let minAsciiNum = 0;

    loop1:
    for(let i = 0; i < strs[0].length; i++){
        minAsciiNum = strs[0][i].charCodeAt();
        for(let j = 1; j < strs.length; j++){
            let ASCII = strs[j][i].charCodeAt();
            if(ASCII < minAsciiNum){
                answer++;
                continue loop1;
            } else {
                minAsciiNum = ASCII;
            }
        }
    }

    return answer;
};