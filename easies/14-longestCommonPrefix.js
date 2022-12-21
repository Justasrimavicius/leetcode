/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = "";
    if(strs.length == 1) return strs[0];
    
        for(let ii = 0; ii < strs[0].length; ii++){
            for(let j = 0 + 1; j < strs.length; j++){
                if(strs[0][ii] != strs[j][ii]){
                    return prefix;
                } else if(j == strs.length - 1){
                    prefix += strs[0][ii];
                }
            }
        }

    return prefix;
};