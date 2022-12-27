/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let leftP = 0;
    let rightP = numbers.length - 1;
    while(leftP < rightP){
        if(numbers[leftP] + numbers[rightP] == target){
            return [leftP + 1, rightP + 1]
        } else if(numbers[leftP] + numbers[rightP] > target){
            rightP--;
        } else if(numbers[leftP] + numbers[rightP] < target){
            leftP++;
        }
    }
};