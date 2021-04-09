function splitPairs(input) {
  // your code here
  if (input.length === 0) {
      return [];
  }

  var outputArray = [];
  for (var i = 0; i < input.length; i++) {
      if (i !== input.length - 1) {
      var currentElement = input[i] + input[i + 1];
      outputArray.push(currentElement);
      i++;
      } else {
          var currentElement = input[i] + '_';
          outputArray.push(currentElement);
      }
  }
  return outputArray;
}