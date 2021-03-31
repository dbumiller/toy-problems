function getStringLength(string) {
  // your code here
  var done = false;
  var index = 0;
  while(!done) {
      if (string.substring(index + 1) === '') {
          done = true;
      }
      if (index === 0 && done) {
          return index;
      }
      index++;
  }
  return index;
}