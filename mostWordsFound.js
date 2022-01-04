/**
 * @param {string[]} sentences
 * @return {number}
 */
 var mostWordsFound = function(sentences) {
  var max = 0;
  for (var i = 0; i < sentences.length; i++) {
      var currentArray = sentences[i].split(" ");
      if (currentArray.length > max) {
          max = currentArray.length;
      }
  }
  return max;
};