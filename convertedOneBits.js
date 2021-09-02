
var hammingWeight = function(n) {
  var current = 1;
  var binary = '';
  while (current < n) {
      current *= 2;
  };
  current /= 2;
  while (n > 0) {
      if (n - current >= 0) {
          n -= current;
          binary += '1';
      } else {
          binary += '0';
      }
      current /= 2;
  }

  var count = 0;
  for (var i = 0; i < binary.length; i++) {
      if (binary[i] === '1') {
          count++;
      }
  }

  return count;
};