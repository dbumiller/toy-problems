function flipEveryNCharacters(input, n) {
  var output = '';
  for (var i = 0; i < input.length; i += n) {
      var currentChunk = input.substring(i, i + n);
      for (var k = currentChunk.length - 1; k >= 0; k--) {
          output += currentChunk[k];
      }
  }
  return output;
}