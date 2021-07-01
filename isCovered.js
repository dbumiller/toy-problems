/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function(ranges, left, right) {
  var combined = [];
  var extended;

  for (var i = 0; i < ranges.length; i++) {
      extended = false;
      for (var j = 0; j < combined.length; j++) {
          if (ranges[i][1] > combined[j][1]) {
              if (ranges[i][0] <= combined[j][1] + 1) {
                  if (ranges[i][0] < combined[j][0]) {
                      combined[j][0] = ranges[i][0];
                  }
                  combined[j][1] = ranges[i][1];
                  extended = true;
              }
          } else if (ranges[i][0] < combined[j][0]) {
              if (ranges[i][1] >= combined[j][0] - 1) {
                  combined[j][0] = ranges[i][0];
              }
          }
      }
      if (!extended) {
          combined.push(ranges[i]);
      }
  }

  for (var i = 0; i < combined.length; i++) {
      if (left >= combined[i][0] && right <= combined[i][1]) {
          return true;
      }
  }
  return false;
}