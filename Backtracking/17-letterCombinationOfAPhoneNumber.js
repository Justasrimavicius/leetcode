/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length == 0)return [];

    let ans = [];

    const indToChars = ['', '', ['a', 'b', 'c'], ['d','e','f'], ['g','h','i'], ['j','k','l'], ['m','n','o'], ['p','q','r','s'], ['t','u','v'], ['w','x','y','z']];

    calc(0, '');

    function calc(digitIndex, combination){
        if(combination.length == digits.length){
            ans.push(combination);
            return;
        } 
        for(let i = 0; i < indToChars[parseFloat(digits[digitIndex])].length; i++){
            calc(digitIndex+1, combination + indToChars[parseFloat(digits[digitIndex])][i]);
        }
    }

    return ans;

};

// revision 12 minutes
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length == 0)return [];

    let ans = [];
    let map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

    // for(let i = 0; i < digits.length; i++){
        combinations("", 0);
    // }

    function combinations(str, index){
        if(str.length == digits.length || index == digits.length){
            ans.push(str);
            return;
        }
        for(let i = 0; i < map[digits[index]].length; i++){
            combinations(str + map[digits[index]][i], index + 1);
        }
    }


    return ans;
};