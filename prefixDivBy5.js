/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
  var sum;
  var value;
  var output = [];
  for (var i = 0; i < nums.length; i++) {
      sum = 0;
      value = 1;
      for (var j = 0; j <= i; j++) {
          if (nums[j] === 1) {
              sum += value;
          }
          value *= 2;
      }
      if (sum % 5 === 0) {
          output.push('true');
      } else {
          output.push('false');
      }
  }
  return output;
};