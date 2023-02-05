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



// revisited problem - took 3 minutes.
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length)return false;

    let map = new Map();
    let distinctChars = 0;

    for(let i = 0; i < t.length; i++){
        let val = map.get(t[i]);
        if(val === undefined){
            map.set(t[i], 1); 
            distinctChars++;
        } else {
            map.set(t[i], val + 1);
        }
    }

    for(let i = 0; i < s.length; i++){
        let val = map.get(s[i]);
        if(val === undefined)return false;
        map.set(s[i], val - 1);

        if(val == 1)distinctChars--;
    }

    if(distinctChars == 0)return true;
    return false;
};