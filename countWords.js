function countWords(str) {
  // your code here
  var array = str.split(' ');
  var output = {};
  for (var i = 0; i < array.length; i++) {
      if (output[array[i]] === undefined) {
          output[array[i]] = 1;
      } else {
          output[array[i]] = output[array[i]] + 1;
      }
  }
  return output;
}