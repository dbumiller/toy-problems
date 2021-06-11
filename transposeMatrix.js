/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
  var output = [];
  for (var i = 0; i < matrix[0].length; i++) {
      var currentRow = [];
      for (var j = 0; j < matrix.length; j++) {
          currentRow.push(matrix[j][i])
      }
      output.push(currentRow);
  }
  return output;
};