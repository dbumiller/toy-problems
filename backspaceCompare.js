/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  var newS = '';
  var newT = '';

  for (var i = 0; i < s.length; i++) {
      if (s[i] === '#' && newS.length !== 0) {
          newS = newS.slice(0, -1);
      } else if (s[i] !== '#') {
          newS += s[i];
      }
  }

      for (var j = 0; j < t.length; j++) {
      if (t[j] === '#' && newT.length !== 0) {
          newT = newT.slice(0, -1);
      } else if (t[j] !== '#') {
          newT += t[j];
      }
  }
  return (newS === newT);
};
