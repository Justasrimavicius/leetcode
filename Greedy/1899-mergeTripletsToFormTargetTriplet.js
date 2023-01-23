/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function(triplets, target) {
    let goodTriplets = [];
    for(let i = 0; i < triplets.length; i++){
        if(triplets[i][0] <= target[0] && triplets[i][1] <= target[1] && triplets[i][2] <= target[2]){
            goodTriplets.push(triplets[i]);
        }
    }
    let xExist = false;
    let yExist = false;
    let zExist = false;
    
    for(let i = 0; i < goodTriplets.length; i++){
        if(goodTriplets[i][0] == target[0])xExist = true;
        if(goodTriplets[i][1] == target[1])yExist = true;
        if(goodTriplets[i][2] == target[2])zExist = true;
    }
    if(xExist == true && yExist == true && zExist == true)return true;
    return false;
};