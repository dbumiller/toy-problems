/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  var dec = false;
  var inc = false;
  for (var i = 0; i < A.length; i++) {
      if (A[i + 1] !== undefined) {
          if (A[i + 1] > A[i]) {
              inc = true;
          } else if (A[i + 1] < A[i]) {
              dec = true;
          }
      }
      if (inc && dec) {
          return false;
      }
  }
  return true;
};