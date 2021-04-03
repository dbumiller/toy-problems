// Binary search is a technique for very rapidly searching a sorted collection by cutting the search space in half at every pass.

// Given a sorted array, such as this:
// [1, 3, 16, 22, 31, 33, 34]

// You can search for the value 31, as follows:

// 1) Pick the midpoint: 22.
// 2) The value is higher than 22, so now consider only the right half of the previous array:
// [...31, 33, 34]
// 3) Pick the midpoint: 33
// 4) The value is lower than 33, so now consider only the left half of the previous array:
// [...31...]
// 5) Pick the midpoint: 31
// 6) You've hit the value.
// 7) Return the index of the value.

// Notes:
// * If you don't find the value, you can return null.
// * If at any point you calculate the index of the midpoint and get a fractional number, just round it down ("floor" it).

// wninfpevcg


function binarySearch(numArray, target) {
  var left = 0;
  var right = numArray.length - 1;
  var mid = Math.floor((left + right) / 2);
  while (left <= right) {

    if (numArray[mid] === target) {
      return true;
    } else if (target < numArray[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
    }
    if (left === right) {
      return false;
  }
  return false;
}

function assertEqual(expected, actual, testName) {
  if (expected === actual) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
  }
}

var trueArray = [1, 3, 16, 22, 26, 31, 32];
var expectedTrue = true;
var actualTrue = binarySearch(trueArray, 31);
assertEqual(expectedTrue, actualTrue, 'should find 31 and return true');

var falseArray = [1, 3, 16, 22, 26, 32];
var expectedFalse = false;
var actualFalse = binarySearch(falseArray, 31);
assertEqual(expectedFalse, actualFalse, 'should fail to find 31 and return false');

