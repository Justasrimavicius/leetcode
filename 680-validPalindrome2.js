/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let leftP = 0;
    let rightP = s.length - 1;
    let leftP_beforeChange = null;
    let rightP_beforeChange = null;
    let isDone = false;
    loop1:
    while(leftP < rightP){
        if(s[leftP] == s[rightP]){
            leftP++;
            rightP--;
        } else{
            if(leftP_beforeChange == null){
                leftP_beforeChange = leftP;
                rightP_beforeChange = rightP;
                leftP++;
                continue loop1;
            } else if(isDone == false){
                isDone = true;
                rightP = rightP_beforeChange;
                leftP = leftP_beforeChange;
                rightP--;
                continue loop1;
            } else{
                return false;
            }
            }
        }
    return true;
};