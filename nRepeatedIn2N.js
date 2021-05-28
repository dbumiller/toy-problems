/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
  var countObj = {};
  for (var i = 0; i < nums.length; i++) {
      if (countObj[nums[i]] === undefined) {
          countObj[nums[i]] = 1;
      } else {
          countObj[nums[i]]++;
      }
      if (nums.length / 2 === countObj[nums[i]]) {
          return nums[i];
      }
  }
};