/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(t.length > s.length)return "";
    // populate first initial hashMap of the string that needs to be a substring in s
    let substringHashmap = {};
    let uniqueCharLength = 0;
    for(let i = 0; i < t.length; i++){
        if(substringHashmap[t[i]] === undefined){
            substringHashmap[t[i]] = 1;
            uniqueCharLength++;
        } else {
            substringHashmap[t[i]]++;
        }
    }
    let S_hashmap = Object.assign({}, substringHashmap);

    let leftP = 0;
    let rightP = 0;
    let ansString = 'A'.repeat(50001);
    let currString = "";
    let length = 0;

    // "ADOBECODEBANC"
    // "ABC"
    while(leftP < s.length){
        if(rightP >= s.length)break;

        if(substringHashmap[s[rightP]] === undefined){
            rightP++;
        } else {
            S_hashmap[s[rightP]]--;
            if(S_hashmap[s[rightP]] == 0){
                length++;
            }

            if(length == uniqueCharLength){
                currString = s.slice(leftP, rightP + 1);
                if(currString.length < ansString.length)ansString = currString;
                while(length == uniqueCharLength){
                    if(S_hashmap[s[leftP]] !== undefined)S_hashmap[s[leftP]]++;
                    if(S_hashmap[s[leftP]] == 1){
                        if(rightP - leftP + 1 < ansString.length)ansString = s.slice(leftP, rightP + 1);
                        length--;
                    }
                    leftP++;

                }
            }
            rightP++;
        }
    }
    if(ansString.length > 50000)return "";
    return ansString;
};