/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  var leftSum = 0;
  var rightSum;

  var sum = 0;
  for (var i = 0; i < nums.length; i++) {
      sum += nums[i];
  }

  rightSum = sum;
  for (var i = 0; i < nums.length; i++) {
      rightSum -= nums[i];
      if (i > 0) {
          leftSum += nums[i - 1];
      }
      if (leftSum === rightSum) {
          return i;
      }
  }
  return -1;
};