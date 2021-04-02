function transposeTwoStrings(arrayOfStrings) {
  //create an output variable
  //determine which string is longer
  //loop through the strings, inputting single characters separated by spaces and ended by new lines
  //return output variable

  var transposed = '';
  var longer;
  if (arrayOfStrings[0].length > arrayOfStrings[1].length) {
      longer = arrayOfStrings[0].length;
  } else {
      longer = arrayOfStrings[1].length;
  }
  for (var i = 0; i < longer; i++) {
      if (arrayOfStrings[0][i]) {
          transposed += arrayOfStrings[0][i] + ' ';
      } else {
          transposed += '  ';
      }
      if (arrayOfStrings[1][i]) {
          transposed += arrayOfStrings[1][i] + '\n';
      } else {
          transposed += ' \n';
      }
  }
  return transposed;
}