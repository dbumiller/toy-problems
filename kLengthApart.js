/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
  var distance = -1;
  for (var i = 0; i < nums.length; i++) {
      if (nums[i] === 1) {
          if (distance === -1) {
              distance = 0;
          } else {
              if (distance < k) {
                  return false;
              }
              distance = 0;
          }
      } else {
          if (distance !== -1) {
              distance++;
          }

      }
  }
  return true;
};

