/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  //create arrays to hold divisors for both strings
  //loop through the first half of both strings
  //For every given index in this range, check if a substring going from the first character to the index could evenly divide the entire string
  //if it can, check if each subsequent set of that many characters matches the possible divisor
  //if it does, add it to the array of divisors
  //compare the divisor arrays for the largest common divisor

  var divisors = [''];
  var shorter;
  var isDivisor;
  var current;
  if (str1.length < str2.length) {
      shorter = str1.length;
  } else {
      shorter = str2.length;
  }

  for (var i = 0; i < shorter; i++) {
      if (str1.length % (i + 1) === 0 && str2.length % (i + 1) === 0) {
          isDivisor = true;
          current = str1.substring(0, i + 1);

          for (var j = 0; j < str2.length; j += current.length) {
              if (str2.substring(j, j + current.length) !== current) {
                  isDivisor = false;
                  break;
              }
          }
          if (isDivisor) {
              for (var j = 0; j < str1.length; j += current.length) {
                  if (str1.substring(j, j + current.length) !== current) {
                      isDivisor = false;
                      break;
                  }
              }
          }

          if (isDivisor) {
              divisors.push(current);
          }
      }
  }


  var maxIndex = 0;
  for (var i = 1; i < divisors.length; i++) {
      if (divisors[i].length > divisors[maxIndex].length) {
          maxIndex = i;
      }
  }

  return divisors[maxIndex];
};