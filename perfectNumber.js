/*
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  var divisors = 0;
  for (var i = 0; i < num; i++) {
      if (num % i === 0) {
          divisors+= i;
      }
  }
  return (divisors === num);
};