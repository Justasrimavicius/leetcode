/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let hashMapPatternKeys = {};
    let hashMapWordKeys = {};
    let words = s.split(' ');
    if(words.length != pattern.length)return false;

    let patternPointer = 0;
    for(let i = 0; i < words.length; i++){
        if(hashMapPatternKeys[pattern[patternPointer]] === undefined){
            if(hashMapWordKeys[words[i]] === undefined){
                hashMapPatternKeys[pattern[patternPointer]] = words[i];
                hashMapWordKeys[words[i]] = pattern[patternPointer];
                patternPointer++;
            } else return false;
        } else {
            if(hashMapWordKeys[words[i]] == pattern[patternPointer]){
                patternPointer++;
            } else return false;
        }
    }
    return true;
};