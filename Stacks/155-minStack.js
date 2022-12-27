// medium, start 9:00, end 9:40. Looked at a video, heard the hint that was provided in leetcode, did the problem from there on
var MinStack = function() {
    this.stack = [];
    this.min = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if(this.stack.length == 1){
        this.min.push(val);
    } else if(this.min[this.min.length - 1] > val){
        this.min.push(val);
    } else {
        this.min.push(this.min[this.min.length - 1]);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.min.splice(this.min.length - 1, 1)
    // if(this.min[this.min.length - 1] == this.stack[this.stack.length - 1])this.min.splice(this.min.length - 1, 1)
    return this.stack.splice(this.stack.length - 1, 1);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */