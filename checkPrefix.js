/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
  sentence = sentence.split(' ');
  for (var i = 0; i < sentence.length; i++) {
      if (sentence[i].substring(0, searchWord.length) === searchWord) {
          return i + 1;
      }
  }
  return -1;
};