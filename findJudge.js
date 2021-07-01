/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
  var trustObject = {};
  for (var i = 1; i <= n; i++) {
      trustObject[i] = [];
  }

  var current;
  for (var i = 0; i < trust.length; i++) {
      current = trust[i][0];
      trustObject[current].push(trust[i][1]);
  }

  var potentialJudge;
  for (key in trustObject) {
      if (trustObject[key].length === 0) {
          if (potentialJudge !== undefined) {
              return -1;
          } else {
              potentialJudge = key;
          }
      }
  }

  for (key in trustObject) {
      var found = false;
      if (key === potentialJudge) {
          found = true;
      }
      for (var i = 0; i < trustObject[key].length; i++) {
          if (trustObject[key][i] === Number(potentialJudge)) {
              found = true;
          }
      }
      if (!found) {
          return -1;
      }
  }


  return Number(potentialJudge);
};
