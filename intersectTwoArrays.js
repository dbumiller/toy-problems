/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  var countObj = {};
  for (var i = 0; i < nums1.length; i++) {
      if (countObj[nums1[i]] === undefined) {
          countObj[nums1[i]] = 1;
      }
  }
  var output = [];
  for (var i = 0; i < nums2.length; i++) {
      if (countObj[nums2[i]]) {
          countObj[nums2[i]] = 2;
      }
  }
  for (key in countObj) {
      if (countObj[key] === 2) {
          output.push(key);
      }
  }
  return output;
};