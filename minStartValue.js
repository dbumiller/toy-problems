/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
  var min = Infinity;
  var sum = 0;
  for (var i = 0; i < nums.length; i++) {
      sum += nums[i];
      if (sum < min) {
          min = sum;
      }
  }
  if (min <= 0) {

      return Math.abs(min) + 1;
  } else {
      return 1;
  }
};