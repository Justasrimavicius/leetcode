/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length == 0)return 0;
    if(s.length == 1)return 1;
    let maxLength = 0;

        let leftP = 0;
        let rightP = 0;

        let hashMap = {};
        let currLength = 0;

        while(rightP < s.length){
            if(hashMap[s[rightP]] === undefined){
                hashMap[s[rightP]] = rightP;
                currLength++;
                if(currLength > maxLength)maxLength = currLength;
                rightP++;
            } else {
                while(leftP <= hashMap[s[rightP]]){
                    hashMap[s[leftP]] = undefined;
                    leftP++;
                    currLength--;
                }
            }
        }

    return maxLength;

};