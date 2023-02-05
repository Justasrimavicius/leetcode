/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    if(s.length == 1)return [[s]];

    let ans = [];
    let sArr = [];

    function recursion(i){
        if(i >= s.length){
            ans.push(JSON.parse(JSON.stringify(sArr)));
            return;
        }

        for(let j = i; j < s.length; j++){
            let palindrome = checkPalindrome(i,j);
            if(palindrome){
                sArr.push(palindrome);
                recursion(j + 1);
                sArr.pop();
            }
        }
    }

    recursion(0);

    return ans;

    function checkPalindrome(start, end){
        let str = s.slice(start, end + 1);

        let leftP = 0;
        let rightP = str.length - 1;
        while(leftP < rightP){
            if(str[leftP] != str[rightP])return false;
            leftP++;
            rightP--;
        }
        return str;
    }
};