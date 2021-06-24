/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
  var current = 'c';
  var count = 0;
  var output = [];

  for (var i = 0; i < s.length; i++) {
      if (s[i] === current) {
          count++;
      } else {
          if (count >= 3) {
              output.push([i - count, i - 1]);
          }
          count = 1;
          current = s[i];
      }
  }
  if (count >= 3) {
      output.push([s.length - count, s.length - 1]);
  }
  return output;
};