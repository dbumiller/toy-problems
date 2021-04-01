function convertScoreToGradeWithPlusAndMinus(score) {
  // your code here
  var plusMinus = function(score, grade) {
      if (score % 10 >= 8 || score === 100) {
          grade += '+';
      } else if (score % 10 <= 2) {
          grade += '-';
      }
      return grade;
  }

  if (score > 100) {
      return 'INVALID SCORE';
  }
  else if (score >= 90) {
      return plusMinus(score, 'A');
  } else if (score >= 80) {
       return plusMinus(score, 'B');
  } else if (score >= 70) {
       return plusMinus(score, 'C');
  } else if (score >= 60) {
       return plusMinus(score, 'D');
  }
  else if (score >= 0) {
      return 'F';
  } else {
      return 'INVALID SCORE';
  }
}