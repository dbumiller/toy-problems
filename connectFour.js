// please complete the challenge according to the instructions
function checkWinner(array) {
  var currentStreak = 0;
  var color = null;
  var winner = null;
  for (var i = 0; i < array.length; i++) {
      if (array[i] === 'red') {
          if (color === 'red') {
              currentStreak++;
              if (currentStreak === 4) {
                  return 'Red Wins!';
              }
          } else {
              color = 'red';
              currentStreak = 1;
          }
      } else {
          if (color === 'black') {
              currentStreak++;
              if (currentStreak === 4) {
                  return 'Black Wins!';
              }
          } else {
              color = 'black';
              currentStreak = 1;
          }
      }
  }
  return 'Draw!'
}



function assertEqual(expected, actual, testName) {
  if (expected === actual) {
      console.log('passed');
  } else {
      console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
  }
}

var failArray = ['red', 'black', 'black', 'black', 'red', 'red', 'red'];
var failActual = checkWinner(failArray);
var failExpected = 'Draw!';
assertEqual(failExpected, failActual, 'should return a draw');

var trueArray = ['red', 'black', 'black', 'red', 'red', 'red', 'red'];
var trueActual = checkWinner(trueArray);
var trueExpected = 'Red Wins!';
assertEqual(trueExpected, trueActual, 'should return red wins');