/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hashMap = {};
    let uniqueNums = [];
    let bucketSort = Array(k);
    let answer = [];
    for(let i = 0; i < nums.length; i++){
        if(hashMap[nums[i]] === undefined){
            hashMap[nums[i]] = 1;
            uniqueNums.push(nums[i]);
        } else {
            hashMap[nums[i]]++;
        }
    }
    for(let i = 0; i < uniqueNums.length; i++){
        if(bucketSort[hashMap[uniqueNums[i]]] === undefined){
            bucketSort[hashMap[uniqueNums[i]]] = [uniqueNums[i]];
        } else {
            bucketSort[hashMap[uniqueNums[i]]] = [...bucketSort[hashMap[uniqueNums[i]]],uniqueNums[i]]
        }
    }
    let i = bucketSort.length - 1;
    while(answer.length != k  && i >=0){
        if(bucketSort[i] !== undefined){
            for(let j = 0; j < bucketSort[i].length; j++){
                answer.push(bucketSort[i][j])
            }
        }
        i--;

    }
    return answer;
};