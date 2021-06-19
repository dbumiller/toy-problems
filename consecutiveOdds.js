/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
  var counter = 0;
  for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 1) {
          counter++;
          if (counter === 3) {
              return true;
          }
      } else {
          counter = 0;
      }
  }
  return false;
};