/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s2.length < s1.length)return false;
    let s1Map = {};
    for(let i = 0; i < s1.length; i++){
        if(s1Map[s1[i]] === undefined){
            s1Map[s1[i]] = 1;
        } else {
            s1Map[s1[i]]++;
        }
    }

    let s2Map = Object.assign({}, s1Map);

    let length = s1.length;
    let leftP = 0;
    let rightP = 0;
    
    // "hello"
    // "o o olleoooleh"

    while(rightP < s2.length){
        if(s1Map[s2[rightP]] === undefined){
            rightP++;
            leftP = rightP;
            length = s1.length;
            s2Map = Object.assign({}, s1Map);
        } else {
            if(s2Map[s2[rightP]] !== 0){
                s2Map[s2[rightP]]--;
                length--;
                rightP++;
                if(length==0)return true;
            } else {
                length++;
                leftP++;
                s2Map[s2[leftP - 1]]++;
            }
        }
    }

    return false;
};