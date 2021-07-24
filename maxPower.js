/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
  //loop through string
    //for each character, start seeing how long the current chain is
    //if its longer than the max chain, set a new max chain

  var max = -1;
  for (var i = 0; i < s.length; i++) {
      var j = i + 1;
      var current = 1;
      while (s[j] === s[i]) {
          current++;
          j++;
      }
      if (current > max) {
          max = current;
      }
  }
  return max;
};