var hammingWeight = function(n) {
  var string = n.toString(2);
  var count = 0;
  for (var i = 0; i < string.length; i++) {
      if (string[i] === '1') {
          count++;
      }
  }
  return count;
};