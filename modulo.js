function modulo(num1, num2) {
  // your code here
  if (isNaN(num2) || num2 === 0) {
      return NaN;
  }

  var done = false;
  if (num1 < 0 && num2 > 0) {
      while (!done) {
          if ((num1 + num2) <= 0) {
              num1 += num2;
          } else {
              return num1;
          }
      }
  } else if (num1 > 0 && num2 < 0) {
      num2 = num2 - num2 - num2;
  }

  while (!done) {
      if ((num1 - num2) >= 0) {
          num1 -= num2;
      } else {
          return num1;
      }
  }
}