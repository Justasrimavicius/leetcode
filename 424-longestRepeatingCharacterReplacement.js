/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    if(s.length == 1)return 1;

    let hashMap = {};

    let leftP = 0;
    let rightP = 0;
    let longestLength = 0;
    let substringLength;
    
    let mostFreqChar = ['TEMP', 1];
    while(rightP < s.length){
        substringLength = rightP - leftP + 1;

        if(hashMap[s[rightP]] === undefined){
            hashMap[s[rightP]] = 1;
        } else {
            hashMap[s[rightP]]++;
            if(hashMap[s[rightP]] > mostFreqChar[1]){
                mostFreqChar[0] = s[rightP];
                mostFreqChar[1] = hashMap[s[rightP]];
            }
        }
        if(substringLength - mostFreqChar[1] <= k){
            if(substringLength > longestLength)longestLength = substringLength;
            rightP++;
        } else {
            leftP++;
            substringLength--;
            if(s[leftP-1] !== mostFreqChar[0]){
                if(mostFreqChar[1]/2 == substringLength){
                    mostFreqChar[1]--;
                }
            }
            hashMap[s[rightP]]--;
            hashMap[s[leftP-1]]--;
        }

    }

    return longestLength;
};