/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  var triangle = [];
  for (var i = 1; i <= numRows; i++) {
      var currentRow = [1];
      for (var j = 1; j < i - 1; j++) {
          currentRow.push(triangle[i - 2][j - 1] + triangle[i - 2][j]);
      }
      if (i !== 1) {
          currentRow.push(1);
      }
      triangle.push(currentRow);
  }
  return triangle;
};