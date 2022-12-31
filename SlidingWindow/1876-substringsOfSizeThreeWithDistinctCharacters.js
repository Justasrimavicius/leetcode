/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    if(s.length < 3)return 0;

    let leftP = 0;
    let rightP = 2;
    let hashMapOrg = {};
    for(let i = 97; i <= 122; i++){
        hashMapOrg[String.fromCharCode(i)] = 0;
    }
    let hashMap = JSON.parse(JSON.stringify(hashMapOrg));


    let ans = 0;
    let createNewMap = true;
    loop1:
    while(rightP < s.length){
        if(createNewMap === true){
            for(let i = leftP; i <= rightP; i++){
                if(hashMap[s[i]] === 0){
                    hashMap[s[i]] = 1;
                } else {
                    leftP++;
                    rightP++;
                    hashMap = JSON.parse(JSON.stringify(hashMapOrg));
                    continue loop1;
                }

                if(i == rightP){
                    createNewMap = false;
                    ans++;
                }
            }
        }
        leftP++;
        rightP++;
        if(rightP > s.length)return ans;
        hashMap[s[leftP - 1]]--;
        hashMap[s[rightP]]++;
        if(hashMap[s[rightP]] == 1 && hashMap[s[leftP]] == 1){
            ans++;
        }
    }
    return ans;
};