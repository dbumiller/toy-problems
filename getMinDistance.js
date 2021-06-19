/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
  var minDistance = nums.length;


  for (var i = 0; i < nums.length; i++) {
      if (nums[i] === target) {
          if (Math.abs(i - start) < minDistance) {
              minDistance = Math.abs(i - start);
          }
      }
  }
  return minDistance;
};