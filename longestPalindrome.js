function findLongestPalindrome(sentence) {
  // split sentence into words
  // iterate words and collect the palindromes
  // sort the list of palindromes by word length
  // return the largest item in the sorted list
  var sentenceArr = sentence.split(' ');
  var paliArr = [];
  for (var i = 0; i < sentenceArr.length; i++) {
      if (isPalindrome(sentenceArr[i])) {
          paliArr.push(sentenceArr[i]);
      }
  }
  paliArr.sort(sortAscendingByLength);
  return paliArr[paliArr.length - 1];
}


function reverseString(string) {
    var reverse = '';
    for (var i = string.length - 1; i >= 0; i--) {
        reverse += string[i];
    }
    return reverse;
}

function isPalindrome(word) {
  return (word.toLowerCase() === reverseString(word).toLowerCase());
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}