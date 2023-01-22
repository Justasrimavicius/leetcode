/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    // [1,2,3,6,2,3,4,7,8]
    // [1,2,2, 3,3,4, 6,7,8]
    if(hand.length%groupSize !== 0)return false;

    hand.sort((a,b)=>{return a - b})

    let ansArr = [];
    let pointer = 0;
    let initialHandLength = hand.length;
    while(ansArr.length < initialHandLength/groupSize){
        let currSize = 0;
        let ansArrPush = [];
        while(currSize < groupSize && pointer < hand.length){
            if(ansArrPush[ansArrPush.length - 1] === hand[pointer]){
                pointer++;
            } else if(ansArrPush[ansArrPush.length - 1] + 1 !== hand[pointer] && ansArrPush.length != 0){
                return false;
            } else {
                ansArrPush.push(hand.splice(pointer,1)[0]);
                currSize++;
            }
        }
        ansArr.push(ansArrPush);
        if(pointer == hand.length && currSize != groupSize)return false;
        pointer = 0;

    }
    return hand.length == 0 ? true : false;
};