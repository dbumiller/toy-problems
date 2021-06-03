/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  var optionObj = {};
  for (var i = 0; i < list1.length; i++) {
      optionObj[list1[i]] = [i];
  }
  var min = Infinity;
  for (var j = 0; j < list2.length; j++) {
    if (typeof optionObj[list2[j]] === 'object') {
        if (typeof optionObj[list2[j]][0] === 'number' && (j + optionObj[list2[j]][0] <= min)) {
          min = j + optionObj[list2[j]][0];
          optionObj[list2[j]].push(min);
      }
    }
  }

  var output = [];
  for (key in optionObj) {
    if (optionObj[key][1] === min) {
      output.push(key);
    }
  }
  return output;
};