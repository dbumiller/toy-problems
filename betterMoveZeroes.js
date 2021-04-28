/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  for (var i = 0; i < nums.length; i++) {
      if (i !== nums.length - 1 && nums[i] === 0) {
          nums.splice(i, 2, nums[i + 1]);
          nums.push(0);
      }
  }
  return;
};