var buildPalindrome = function(st) {

  var checkPalindrome = (st, center) => {
    var isPalindrome = true;
    var right = center + 1;

    if (st.length % 2 === 1) {
      center += .5;
      var right = center + 1;

      for (var i = center - 1; i >= 0; i--) {
        if (st[i] !== st[right]) {
          isPalindrome = false;
          break;
        }
        right++;
      }
    } else {
      var right = center + 1;
      for (var i = center; i >= 0; i--) {
        if (st[i] !== st[right]) {
          isPalindrome = false;
          break;
        }
        right++;
      }
    }

    return isPalindrome;
  }


  var maxPalindrome = st.length - 1;

  for (var j = st.length - 1; j >=0; j--) {
    var current = st.substring(j);
    var middle = st.substring(j).length / 2;
    middle -= 1;

    if (checkPalindrome(current, middle)) {
        maxPalindrome = j;
    }
  }


  var output = st;
  for (var k = maxPalindrome - 1; k >= 0; k--) {
      output += st[k];
  }
  return output;
}

console.log(buildPalindrome('abba'));
console.log(buildPalindrome('aabaa'));
console.log(buildPalindrome('aba'));
console.log(buildPalindrome('abcdc'));
console.log(buildPalindrome('abc'));
console.log(buildPalindrome('abaa'));
console.log(buildPalindrome('aa'));
console.log(buildPalindrome('a'));
console.log(buildPalindrome('dad'));