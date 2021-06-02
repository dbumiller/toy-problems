/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  nums = nums.sort(function(a, b) {
    if (Number(b) > Number(a)) {
      return -1;
    } else {
      return 1;
    }
  });
  for (var i = 0; i < nums.length; i++) {
    if (i !== nums[i]) {
      return i;
    }
  }
  return nums.length;
};