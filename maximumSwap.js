var selfDividingNumbers = function(num) {
  //create output variable
  //create string variable set to num as a string
  //loop through the string
    //create a variable to hold the current digit
    //loop through the rest of the string
      //create another variable holding the other digit
      //pass those digits, indices, and the full number to a helper function
        //return the new number
      //compare new number to max (output)
        //if higher, set max to what was returned
  //return output
  var swapper = function (word, i, j, left, right) {
    var newNum = '';
    for (var k = 0; k < word.length; k++) {
      if (k === i) {
        newNum += right;
      } else if (k === j) {
        newNum += left;
      } else {
        newNum += word[k];
      }
    }
    return Number(newNum);
  }



  //HELPER FUNCTION
  //create output variable
  //loop through input
    //if index is equal to left index, put in right digit
    //if index is equal to right index, put in left digit
    //otherwise, put in digit from input
  //return output cast as a number

  var output = num;
  var word = num.toString();
  for (var i = 0; i < word.length; i++) {
    var leftDigit = word[i];
    for (var j = i + 1; j < word.length; j++) {
      var rightDigit = word[j];
      var current = swapper(word, i, j, leftDigit, rightDigit);
      if (current > output) {
        output = current;
      }
    }
  }
  return output;
};

console.log(selfDividingNumbers(9973));