// easy, start 21:45, end 22:05
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let answer = [];
    let firstRow = {};
    let firstRowString = 'qwertyuiop';
    let secondRow = {};
    let secondRowString = 'asdfghjkl';
    let thirdRow = {};
    let ThirdRowString = 'zxcvbnm';

    for(let i = 0; i < firstRowString.length; i++){
        firstRow[`${firstRowString[i]}`] = true;
        firstRow[`${firstRowString[i].toUpperCase()}`] = true;
    }
    for(let i = 0; i < secondRowString.length; i++){
        secondRow[`${secondRowString[i]}`] = true;
        secondRow[`${secondRowString[i].toUpperCase()}`] = true;
    }
    for(let i = 0; i < ThirdRowString.length; i++){
        thirdRow[`${ThirdRowString[i]}`] = true;
        thirdRow[`${ThirdRowString[i].toUpperCase()}`] = true;
    }

    loop1:
    for(let i = 0; i < words.length; i++){
        if(firstRow[words[i][0]]){
            for(let j = 0; j < words[i].length; j++){
                if(firstRow[words[i][j]] === undefined){
                    continue loop1;
                }
                if(j == words[i].length - 1){
                    answer.push(words[i]);
                }
            }
         }
        if(secondRow[words[i][0]]){
            for(let j = 0; j < words[i].length; j++){
                if(secondRow[`${words[i][j]}`] === undefined){
                    continue loop1;
                }
                if(j == words[i].length - 1){
                    answer.push(words[i]);
                }
            }
         }
        if(thirdRow[words[i][0]]){
            for(let j = 0; j < words[i].length; j++){
                if(thirdRow[`${words[i][j]}`] === undefined){
                    continue loop1;
                }
                if(j == words[i].length - 1){
                    answer.push(words[i]);
                }
            }
         }
    }
    return answer;
};