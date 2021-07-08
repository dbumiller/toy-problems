/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
  var nums = [];
  for (var i = 0; i < mat.length; i++) {
      for (var j = 0; j < mat[0].length; j++) {
          nums.push(mat[i][j]);
      }
  }

  if (r * c !== nums.length) {
      return mat;
  }

  var n = 0;
  var output = [];
  for (var i = 0; i < r; i++) {
      output.push([]);
      for (var j = 0; j < c; j++) {
          output[i].push(nums[n]);
          n++;
      }
  }

  return output;
};