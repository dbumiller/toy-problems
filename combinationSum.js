//Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

//The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

//It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

/*
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */


var combinationSum = function(candidates, target) {
  var output = [];

  for (var i = 0; i < candidates.length; i++) {
    var currentArray = [];
    var arraySum = 0;
    for (var k = 0; k < currentArray.length; k++) {
      arraySum += currentArray[k];
    }
    var foundSurpassed = false;
    while (!foundSurpassed) {
      if (arraySum + candidates[i] === target) {
        currentArray.push(candidates[i]);
        output.push(currentArray);
        foundSurpassed = true;
      } else if (arraySum + candidates[i] > target) {
        foundSurpassed = true;
      } else {
        currentArray.push(candidates[i]);
        arraySum += candidates[i];
      }
    }
  }

  return output;
};

var candidates = [2, 3, 5];
target = 8;

console.log(combinationSum(candidates, target));