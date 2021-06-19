/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var countObj = {};
  var current;
  for (var i = 0; i < nums.length; i++) {
      current = nums[i];
      if (countObj[current] === undefined) {
          countObj[current] = 1;
      } else {
          countObj[current]++;
          if (countObj[current] >= nums.length / 2) {
              return current;
          }
      }
  }
  return nums[0];
};