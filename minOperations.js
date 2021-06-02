/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  var output = 0;
  for (var i = 1; i < nums.length; i++) {
      if (nums[i] <= nums[i - 1]) {
          output = output + 1 + (nums[i - 1] - nums[i]);
          nums[i] = nums[i - 1] + 1;
      }
  }
  return output;
};