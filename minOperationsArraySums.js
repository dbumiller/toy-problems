var minOperations = function(arr) {
  var sums = [];
  var length = arr.length / 2;
  for (var i = 0; i < length; i++) {
      sums.push(arr[i] + arr[arr.length - 1 - i]);
  }

  var sumCounter = {};
  for (var i = 0; i < sums.length; i++) {
      var current = sums[i];
      var max = sums[0];
      if (sumCounter[current] === undefined) {
          sumCounter[current] = 1;
      } else {
          sumCounter[current]++;
          if (sumCounter[current] > sumCounter[max]) {
              max = current;
          }
      }
  }

  var output = 0;
  for (key in sumCounter) {
      if (Number(key) !== max) {
          output += sumCounter[key];
      }
  }

  return output;
}
