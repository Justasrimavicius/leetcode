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

// revision
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let map = new Map();
    for(let i = 65; i <= 90; i++){
        map.set(String.fromCharCode(i), 0);
    }

    let longestLength = 0;
    let longestLetter = [0, '-'];
    let leftP = 0;
    let rightP = 0;
    // AA BABBA //
    while(rightP < s.length){
        let val = map.get(s[rightP]);
        map.set(s[rightP], val + 1);
        


        if(val + 1 > longestLetter[0]){
            longestLetter[0] = val + 1;
            longestLetter[1] = s[rightP];
            
        }

        while(rightP - leftP + 1 - longestLetter[0] > k){
            let temp = map.get(s[leftP]);
            map.set(s[leftP], temp - 1);

            leftP++;
        }  

        if(rightP - leftP + 1 > longestLength)longestLength = rightP - leftP + 1;



        rightP++;

    }
    return longestLength;

};