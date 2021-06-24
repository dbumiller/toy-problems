/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  var current;
  var sumArray = [];
  while(n !== 1) {
      var holder = n;
      current = 0;
      while (holder > 0) {
          current += ((holder % 10) * (holder % 10));
          holder = holder / 10;
          holder = Math.floor(holder);
      }
      for (var i = 0; i < sumArray.length; i++) {
          if (current === sumArray[i]) {
              return false;
          }
      }
      n = current;
      sumArray.push(n);
  }
  return true;
};