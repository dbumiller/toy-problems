/*
* @param {number[]} nums
* @return {number}
*/

var findMin = function(nums) {
  if (nums.length === 0) {
    return 'Empty array';
  }
  for (var i = 0; i < nums.length; i++) {
    if (i != 0) {
      if (nums[i - 1] > nums[i]) {
        return nums[i];
      }
    }
  }

  return nums[0];
};

console.log(findMin([11,13,15,17]));