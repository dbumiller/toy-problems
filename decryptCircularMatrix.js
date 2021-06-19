/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
  var output = [];
  for (var i = 0; i < code.length; i++) {
      output.push(0);
  }

  if (k === 0) {
      return output;
  } if (k > 0) {
      for (var i = 0; i < code.length; i++) {
          var decrypted = 0;
          var j = i;
          while (j < k + i) {
              j++;
              if (j < code.length) {
                  decrypted += code[j];
              } else {
                  decrypted += code[j - code.length];
              }
          }
          output[i] = decrypted;
      }
  } if (k < 0) {
      for (var i = 0; i < code.length; i++) {
          var decrypted = 0;
          var j = i;
          while (j > k + i) {
              j--;
              if (j >= 0) {
                  decrypted += code[j];
              } else {
                  decrypted += code[j + code.length];
              }
          }
          output[i] = decrypted;
      }
  }
  return output;
};