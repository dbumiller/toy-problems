/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
  var count = 1;
  for (var i = 1; i < arr.length; i++) {
      if (arr[i] === arr[i - 1]) {
          count++;
          if (count > arr.length / 4) {
              return arr[i];
          }
      } else {
          count = 1;
      }
  }
  return arr[0];
};