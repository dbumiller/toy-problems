function sumDigits(num) {
  // your code here
  var negative = false;
  var numWord;
  if (num < 0) {
      negative = true;
      numWord = (num).toString().substring(1);
  } else {
      numWord = (num).toString();
  }
  var sum = 0;
  if (negative) {
      sum = sum - (2 * Number(numWord[0]));
  }
  for (var i = 0; i < numWord.length; i++) {
      sum += Number(numWord[i]);
  }
  return sum;
}