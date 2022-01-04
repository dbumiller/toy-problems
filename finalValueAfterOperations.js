/**
 * @param {string[]} operations
 * @return {number}
 */
 var finalValueAfterOperations = function(operations) {
  var output = 0;
  for (var i = 0; i < operations.length; i++) {
      if (operations[i] === "++X" || operations[i] === "X++") {
          output++;
      } else {
          output--;
      }
  }
  return output;
};