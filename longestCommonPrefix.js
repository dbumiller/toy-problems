/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  //create an output variable
  //create a testing variable
  //loop through the letters of the first string
    //create a variable to test for a discrepancy
    //loop through remaning strings
      //if any of those strings holds a discrepancy
        //
      //else
        //update the output variable

  var output = '';
  var testing = '';
  for (var i = 0; i < strs[0].length; i++) {
    testing += strs[0][i];
    var discrepancy = false;
    for (var j = 1; j < strs.length; j++) {
      if (testing !== strs[j].substring(0, i + 1)) {
        discrepancy = true;
      }
    }
    if (!discrepancy) {
      output = testing;
    }
  }
  return output;
};

longestCommonPrefix(["flower","flow","flight"]);