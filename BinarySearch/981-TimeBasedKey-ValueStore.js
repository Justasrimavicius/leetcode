var TimeMap = function() {
    this.storage = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    let alreadySavedVal = this.storage.get(key);
    if(alreadySavedVal !== undefined){
        this.storage.set(alreadySavedVal.push({value, timestamp}));
    } else {
        this.storage.set(key, [{value, timestamp}]);
    }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    let alreadySavedVal = this.storage.get(key);
    if(alreadySavedVal === undefined)return "";
    if(alreadySavedVal[0].timestamp > timestamp)return "";

    let start = 0;
    let end = alreadySavedVal.length - 1;
    while(start < end){
        let middle = start + Math.floor((end - start + 1)/2);
        // 5 10 20 25 30
        // 6
        if(alreadySavedVal[middle].timestamp > timestamp){
            end = middle - 1;
        } else {
            start = middle;
        }
    }
    return alreadySavedVal[start].value;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */