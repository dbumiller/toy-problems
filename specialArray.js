/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
  var max = -1;
  for (var i = 0; i < nums.length; i++) {
      if (max < nums[i]) {
          max = nums[i];
      }
  }

  for (var i = 0; i <= max; i++) {
      var counter = 0;
      for (var j = 0; j < nums.length; j++) {
          if (nums[j] >= i) {
              counter++;
          }
      }
      if (counter === i) {
          return i;
      }
  }
  return -1;
};