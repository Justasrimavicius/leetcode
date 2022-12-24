/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let answer = [];

    let temp = [];
    let hashMap = {};

    for(let i = 0; i < strs.length; i++){
        let x = strs[i].split("").sort().join("");
        if(hashMap[x] === undefined){
            hashMap[x] = [i];
            temp.push(x);
        } else {
            hashMap[x] = [...hashMap[x],i]
        }
    }
    for(let i = 0; i < temp.length; i++){
        answer.push([]);
        for(let j = 0; j < hashMap[temp[i]].length; j++){
            answer[i].push(strs[hashMap[temp[i]][j]])
        }
    }
    return answer;
};