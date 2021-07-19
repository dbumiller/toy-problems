/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  //     var output = [];
      var counter = 0;
      for (var i = 0; i < s.length; i++) {
          for (var j = i + 2; j <= s.length; j+=2) {
              var current = '';
              for (var k = i; k < j; k++) {
                  current += s[k];
              }
  //             output.push(current);
              var good = true;
              var first = current[0];
              var swap = current.length / 2;
              for (var k = 0; k < current.length; k++) {
                  if (k < swap) {
                      if (current[k] !== first) {
                          good = false;
                      }
                  } else {
                      if (current[k] === first) {
                          good = false;
                      }
                  }
              }
              if (good) {
                  counter++;
              }
          }
      }
      return counter;
  };
