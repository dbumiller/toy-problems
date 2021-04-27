/*
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  var output = [];
  var currentDigit;
  for (var i = left; i <= right; i++) {

      var current = i;
      var perfect = true;
      while (current >= 1) {
          currentDigit = current % 10;
          current = Math.trunc(current / 10);
          if (i % currentDigit !== 0) {
              perfect = false;
          }
      }
      if (perfect) {
          output.push(i);
      }

  }
  return output;
};