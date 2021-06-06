/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
  var sumObj = {};
  var currentSum;
  var currentNum;

  for (var i = 1; i <= n; i++) {
      currentNum = i;
      currentSum = 0;

      while (currentNum >= 1) {
          currentSum += currentNum % 10;
          currentNum /= 10;
          currentNum = parseInt(currentNum);
      }

      if (sumObj[currentSum] === undefined) {
          sumObj[currentSum] = [i];
      } else {
          sumObj[currentSum].push(i);
      }
  }

  var max = 0;
  for (key in sumObj) {
      if (sumObj[key].length > max) {
          max = sumObj[key].length;
      }
  }

  var output = 0;
  for (key in sumObj) {
      if (sumObj[key].length === max) {
          output++;
      }
  }

  return output;
};