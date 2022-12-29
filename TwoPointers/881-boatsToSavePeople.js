/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    if(people.length == 1)return 1;
    
    people.sort((a,b)=>{return a - b});
    let answer = 0;

    let leftP = 0;
    let rightP = people.length - 1;
    while(leftP < rightP){
        if(people[leftP] + people[rightP] <= limit){
            answer++;

            leftP++;
            rightP--;
            if(leftP == rightP)answer++;
        } else {
            answer++;
            rightP--;
            if(leftP == rightP)answer++;
        }
    }
    return answer;

};