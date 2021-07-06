/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  //create an output variable
  //loop through cookies
    //for each cookie, find the hardest to please recipient and give them the cookie
    //if such a recipient exists, add one to output variable

  var content = 0;
  for (var i = 0; i < s.length; i++) {
      var size = s[i];
      for (var j = size; j > 0; j--) {
          var found = false;
          for (var k = 0; k < g.length; k++) {
              if (g[k] === j) {
                  content++;
                  g[k] = Infinity;
                  found = true;
                  break;
              }
          }
          if (found) {
              break;
          }
      }
  }
  return content;



};