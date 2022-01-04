/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var getConcatenation = function(nums) {
  var ans = [];
  for (var i = 0; i < (nums.length * 2); i++) {
      if (i > nums.length - 1) {
          ans.push(nums[i - nums.length]);
      } else {
          ans.push(nums[i]);
      }
  }
  return ans;
};