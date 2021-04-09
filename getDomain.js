function getDomain(url) {
  // your code here
  var beginningOfDotCom;
  for (var i = 0; i < url.length; i++) {
      if (url.substring(i) === '.com')
      beginningOfDotCom = i;
  }

  var isThereWWW = false;
  var afterWWW;
  for (var i = 0; i < beginningOfDotCom; i++) {
      if (url.substring(i, i + 3) === 'www') {
          isThereWWW = true;
          afterWWW = i + 4;
      }
  }

  if (isThereWWW) {
      return url.substring(afterWWW, beginningOfDotCom);
  } else {
      return url.substring(6, beginningOfDotCom);
  }
}