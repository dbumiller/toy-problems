/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
  var max = nums[0];
  var current = nums[0];
  for (var i = 1; i < nums.length; i++) {
      if (nums[i] > nums[i - 1]) {
          current += nums[i];
      } else {
          if (current > max) {
              max = current;
          }
          current = nums[i];
      }
  }
  if (current > max) {
      return current;
  }
  return max;
};