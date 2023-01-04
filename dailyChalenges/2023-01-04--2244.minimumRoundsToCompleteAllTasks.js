/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    let hashMap = {};
    let ans = 0;

    for(let i = 0; i < tasks.length; i++){
        if(hashMap[tasks[i]] === undefined){
            hashMap[tasks[i]] = 1;
        } else {
            hashMap[tasks[i]]++;
        }
    }
    // for(let i = 0; i < entries.length; i++){
    for(let entry in hashMap){
        if(hashMap[entry] == 1)return -1;
        if(hashMap[entry] == 2){
            ans+=1;
        } else{
            if(hashMap[entry]%3==0){
                ans+=hashMap[entry]/3;
            }
            if(hashMap[entry]%3==1){
                // %3==1 can be, when it is 4/3, 7/3, 10/3, ...
                // therefore we need to complete 2 tasks twice and fill with 3.
                ans += 2; 
                ans += (hashMap[entry]-4)/3;
            } else if(hashMap[entry]%3==2){
                // %3==1 can be, when its 5/3, 8/3, 11/3, ..
                ans += 1;
                ans += (hashMap[entry]-2)/3;
            }
        }
    }
    return ans;
};