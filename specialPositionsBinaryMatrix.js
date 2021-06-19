/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
  var counter = 0;
  for (var i = 0; i < mat.length; i++) {
      for (var j = 0; j < mat[0].length; j++) {
          if (mat[i][j] === 1) {
              var special = true;
              for (var k = 0; k < mat.length; k++) {
                  if (k !== i) {
                      if (mat[k][j] === 1) {
                          special = false;
                      }
                  }
              }
              for (var k = 0; k < mat[0].length; k++) {
                  if (k !== j) {
                      if (mat[i][k] === 1) {
                          special = false;
                      }
                  }
              }
              if (special) {
                  counter++;
              }
          }
      }
  }
  return counter;
};