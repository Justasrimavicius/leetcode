// medium, start 10:52 end 11:42
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let answer = [];
    
    function recursion(){
        let openingParNum = n;
        let closingParNum = n;
        let answerString = '';
        function innerRecursion(answerString, openingParNum, closingParNum){
            if(openingParNum == 0 && closingParNum == 0){
                answer.push(answerString);
                return;
            };
            if(openingParNum == 0){
                return innerRecursion(answerString + ')', openingParNum, closingParNum - 1);
            } else if(openingParNum == n && closingParNum == n){
                return innerRecursion(answerString + '(', openingParNum - 1, closingParNum);
            } else if(openingParNum < closingParNum){
                innerRecursion(answerString + '(', openingParNum - 1, closingParNum);
                innerRecursion(answerString + ')', openingParNum, closingParNum - 1);
            } else if(openingParNum == closingParNum){
                return innerRecursion(answerString + '(', openingParNum - 1, closingParNum);
            }
        }
        innerRecursion(answerString, openingParNum, closingParNum);
    }

    recursion();

    return answer;
};