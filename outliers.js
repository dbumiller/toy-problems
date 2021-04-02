function detectOutlierVariable(strOfNumbers) {
  //create counter variables for even and odd
  //create an index variable for the most recent even and most recent odd
  //split the string into an array
  //loop through the array, turning elements into numbers and checking if they're even or odd
  //check for which counter  variable is equal to 1
  //return the index of the outlier

  var evenCount = 0;
  var oddCount = 0;
  var evenIndex;
  var oddIndex;
  var arrayOfNumbers = strOfNumbers.split(' ');

  for (var i = 0; i < arrayOfNumbers.length; i++) {
    var currentNumber = arrayOfNumbers[i];
    if (currentNumber % 2 === 0) {
      evenCount++;
      evenIndex = i + 1;
    } else {
      oddCount++;
      oddIndex = i + 1;
    }
  }

  if (evenCount === 1) {
    return evenIndex;
  } else {
    return oddIndex;
  }
}