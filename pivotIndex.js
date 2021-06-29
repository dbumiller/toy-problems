/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  var leftSum;
  var rightSum;
  for (var i = 0; i < nums.length; i++) {
      leftSum = 0;
      for (var j = 0; j < i; j++) {
          leftSum += nums[j];
      }

      rightSum = 0;
      for (var j = i + 1; j < nums.length; j++) {
          rightSum += nums[j];
      }

      if (leftSum === rightSum) {
          return i;
      }
  }

  return -1;
};