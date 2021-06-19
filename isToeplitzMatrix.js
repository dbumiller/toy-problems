/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
  var current;
  var k;
  var l;
  for (var i = 0; i < matrix.length; i++)
      for (var j = 0; j < matrix[0].length; j++) {
          current = matrix[i][j];
          k = i + 1;
          l = j + 1;
          while (k < matrix.length && l < matrix[0].length) {
              if (matrix[k][l] !== current) {
                  return false;
              }
              k++;
              l++;
          }
      }
  return true;
};