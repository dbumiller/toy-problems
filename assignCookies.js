/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {

  g.sort((a, b) => a-b);
  s.sort((a, b) => a-b);

  var content = 0;


  for (var i = 0; i < s.length; i++) {
      for (var j = 0; j < g.length; j++) {
          if (s[i] >= g[j]) {
              content++;
              g[j] = Infinity;
              j++;
              break;
          }
      }
  }
  return content;
};