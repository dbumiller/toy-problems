/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
  var binary = '';
  var highest = 1;
  while (highest <= n) {
      highest *= 2;
  }
  if (highest !== n) {
      highest = highest / 2;
  }


  while (highest >= 1) {
      if (n - highest >= 0) {
          n = n - highest;
          binary += '1';
      } else {
          binary += '0';
      }
      highest /= 2;
  }

  var current = binary[0];
  for (var i = 1; i < binary.length; i++) {
      if (binary[i] === current) {
          return false;
      } else {
          current = binary[i];
      }
  }
  return true;
};