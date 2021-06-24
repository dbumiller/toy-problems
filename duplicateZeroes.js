/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === 0) {
          for (var j = arr.length - 1; j > i; j--) {
              arr[j] = arr[j - 1];
          }
      }
  }
};