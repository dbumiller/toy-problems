/*
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  var output = 0;
  for (var i = 0; i < stones.length; i++) {
      for (var j = 0; j < jewels.length; j++) {
          if (stones[i] === jewels[j]) {
              output++;
          }
      }
  }
  return output;
};