/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
  var highest = -1;
  var secondHighest = -1

  for (var i = 0; i < s.length; i++) {
      var current = Number(s[i]);
      if (current !== NaN) {
          if (current === highest) {

          } else if (current > highest) {
              secondHighest = highest;
              highest = current;
          } else if (current > secondHighest) {
              secondHighest = current;
          }
      }
  }
  return secondHighest;
};
