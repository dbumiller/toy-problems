/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
  var total = 0;
  var monday = 1;
  while (n > 0) {
      var counter = 0;
      while (counter <= 6 && n > 0) {
          total += monday + counter;
          n--;
          counter++;
      }
      monday++;
  }
  return total;
};