/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
  arr.sort(function(a, b) {
      return a - b;
  });
  length = arr.length;
  arr.splice(length * 19 / 20);
  arr.splice(0, length / 20);
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
  }
  return sum / arr.length;
};