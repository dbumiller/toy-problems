/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  for (var i = 0; i < s.length; i++) {
      if (s[i] === '#') {
          if (i !== 0) {
              s = s.slice(0,i - 1) + s.slice(i + 1);
              i -= 2;
          } else {
              s = s.slice(i + 1);
              i--;
          }

      }
  }
  for (var i = 0; i < t.length; i++) {
      if (t[i] === '#') {
          if (i !== 0) {
              t = t.slice(0,i - 1) + t.slice(i + 1);
              i -= 2;
          } else {
              t = t.slice(i + 1);
              i--;
          }

      }
  }
  return (s === t);
};
