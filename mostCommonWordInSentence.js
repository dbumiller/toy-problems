/*
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  var countObj = {};
  var paraNoPunct = paragraph.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"");
  var paraArray = paraNoPunct.split(' ');
  var current;
  var max = 0;
  var maxWord;
  for (var i = 0; i < paraArray.length; i++) {
      current = paraArray[i].toLowerCase();
      var currentBanned = false;
      for (var j = 0; j < banned.length; j++) {
          if (current === banned[j]) {
              currentBanned = true;
          }
      }
      if (!currentBanned && current !== '') {
          if (countObj[current] === undefined) {
              countObj[current] = 1;
          } else {
              countObj[current]++;
          }
          if (countObj[current] > max) {
              maxWord = current;
              max++;
          }
      }
  }
  return maxWord;
};