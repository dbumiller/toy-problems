/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.mins = [];
};

/**
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  this.stack.push(val);
  if (this.mins.length === 0) {
      this.mins.push(val);
  } else if (this.mins[this.mins.length - 1] >= val) {
      this.mins.push(val);
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  var popped = this.stack.pop();
  if (this.mins[this.mins.length - 1] === popped) {
      this.mins.pop();
  }
  return popped;
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
  return this.mins[this.mins.length - 1];
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/