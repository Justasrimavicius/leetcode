/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length)return false;

    let hashMapS = {};
    let hashMapT = {};

    for(let i = 0; i < s.length; i++){
        if(!hashMapS[s[i]]){
            hashMapS[s[i]] = 1;
        } else {
            hashMapS[s[i]]++;
        }

        if(!hashMapT[t[i]]){
            hashMapT[t[i]] = 1;
        } else {
            hashMapT[t[i]]++;
        }
    }

    for(let i = 0; i < t.length; i++){
        if(hashMapT[t[i]] != hashMapS[t[i]])return false;
    }
    return true;
};