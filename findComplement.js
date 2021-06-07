/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  var temp = num;
  var currentBit = 1;

  while (temp >= currentBit * 2) {
      currentBit *= 2;
  }

  var maxBit = currentBit;
  var binaryRep= '';

  while (currentBit >= 1) {
      if (temp - currentBit >= 0) {
          temp -= currentBit;
          binaryRep += 1;
      } else {
          binaryRep += 0;
      }
      currentBit /= 2;
  }

  var output = 0;
  for (var i = 0; i < binaryRep.length; i++) {
      if (binaryRep[i] === '0') {
          output += maxBit;
      }
      maxBit /= 2;
  }

  return output;
};