/**
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */
var maximumRemovals = function(s, p, removable) {
    let removedIndices;
    let k = 0;

    let start = 0;
    let end = removable.length - 1;
    let middle;
    while(start <= end){
        middle = start + Math.floor((end - start + 1)/2);
        let removableIndex = 0;
        removedIndices = new Map();
        while(removableIndex <= middle){
            removedIndices.set(removable[removableIndex], true);
            removableIndex++;
        }

        isSubseq = isSubsequence();
        if(isSubseq){
            k = middle + 1;
            start = middle + 1;
        } else {
            end = middle - 1;
        }

    }

    return k;


    function isSubsequence(){
        subseqLength = 0;
        for(let i = 0; i < s.length; i++){
            if(removedIndices.get(i) !== undefined)continue;

            if(s[i] == p[subseqLength]){
                subseqLength++;
            }
            if(subseqLength == p.length)return true;
        }
        return false;
    }
};