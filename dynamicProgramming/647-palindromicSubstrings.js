/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let ans = 0;
    let leftP;
    let rightP;
    for(let i = 0; i < s.length; i++){
        ans++;

        leftP = i;
        rightP = i;
        while(leftP > 0 && rightP < s.length - 1 && s[leftP - 1] === s[rightP + 1]){
            ans++;
            leftP--;
            rightP++;
        }

        leftP = i;
        rightP = i + 1;

        while(leftP >= 0 && rightP < s.length && s[leftP] === s[rightP]){
            ans++;
            leftP--;
            rightP++;
        }
    }




    return ans;

};