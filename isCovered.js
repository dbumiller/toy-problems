/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function(ranges, left, right) {
  //loop through ranges
    //set left for current range
    //set right for current range
    //loop through remaining ranges
      //if ranges dont connect, break
      //else, set right for current range and increment original loop
    //check if left/right fits in current range
    //if yes, return true

  //return false

  var rangeLeft;
  var rangeRight;

  for (var i = 0; i < ranges.length; i++) {
      rangeLeft = ranges[i][0];
      rangeRight = ranges[i][1];

      for (var j = i + 1; j < ranges.length; j++) {
          if (ranges[j][0] <= rangeRight + 1) {
              if (ranges[j][1] > rangeRight) {
                  rangeRight = ranges[j][1];
              }
          } else {
              break;
          }
      }

      if (left >= rangeLeft && right <= rangeRight) {
          return true;
      }
  }

  return false;
};