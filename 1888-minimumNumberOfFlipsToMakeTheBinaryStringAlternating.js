// sacrificed some space and speed(from n to 2n) for readability
/**
 * @param {string} s
 * @return {number}
 */
var minFlips = function(s) {
    if(s.length == 1)return 0;
    let doubleS = s + s;
    let firstZero = [];
    let changesForFirstZero = 0;
    let firstOne = [];
    let changesForFirstOne = 0;
    for(let i = 0; i < (s.length*2); i++){
        if(i%2==0){
            firstZero.push('0');
            firstOne.push('1');
            if(s[i] === '0' && i < s.length){
                changesForFirstOne++;
            } else if(s[i] === '1'){
                changesForFirstZero++;
            }
        } else {
            firstZero.push('1');
            firstOne.push('0');
            if(s[i] === '1' && i < s.length){
                changesForFirstOne++;
            } else if(s[i] === '0'){
                changesForFirstZero++;
            }
        }
    }
    let minChangesForFirstZero = Number.MAX_VALUE;
    let minChangesForFirstOne = Number.MAX_VALUE;

    let leftP = 1;
    let rightP = s.length;
    while(rightP < doubleS.length){
            if(firstZero[leftP - 1] !== doubleS[leftP - 1]){
                changesForFirstZero--;
            }
            if(firstOne[leftP - 1] !== doubleS[leftP - 1]){
                changesForFirstOne--;
            }

            if(firstZero[rightP] !== doubleS[rightP]){
                changesForFirstZero++;
            }
            if(firstOne[rightP] !== doubleS[rightP]){
                changesForFirstOne++;
            }


            if(changesForFirstZero < minChangesForFirstZero)minChangesForFirstZero = changesForFirstZero;
            if(changesForFirstOne < minChangesForFirstOne)minChangesForFirstOne = changesForFirstOne;
            leftP++;
            rightP++;
    }
    return Math.min(minChangesForFirstOne, minChangesForFirstZero);


};