/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
  var output = [];
  var current;
  for (var i = 0; i < queries.length; i++) {
      current = 0;
      nums[queries[i][1]] += queries[i][0];
      for (var j = 0; j < nums.length; j++) {
          if (nums[j] % 2 === 0) {
              current += nums[j];
          }
      }
      output.push(current);
  }
  return output;
};