/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  var maxWealth = 0;
  for (var i = 0; i < accounts.length; i++) {
      var currWealth = 0;
      for (var j = 0; j < accounts[i].length; j++) {
          currWealth += accounts[i][j];
      }
      if (currWealth > maxWealth) {
          maxWealth = currWealth;
      }
  }
  return maxWealth;
};