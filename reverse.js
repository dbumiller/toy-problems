var reverse = function(x) {
  var numString = x.toString();
  var holder = '';
  for (var i = numString.length - 1; i >= 0; i--) {
    holder += numString[i];
  }
  return Number(holder);
};

console.log(reverse(321));
console.log(reverse(120));