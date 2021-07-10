/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
  var countObj = {};
  var halfLength = arr.length / 2;
  halfLength = Math.ceil(halfLength);

  for (var i = 0; i < arr.length; i++) {
      var curr = arr[i];
      if (countObj[curr] === undefined) {
          countObj[curr] = 1;
      } else {
          countObj[curr]++;
      }
  }

  //set up a variable to keep track of the numbers that i have removed, and how many entries they have in the array
  //loop through object
    //find max that isn't in the tracking variable
    //add it to the tracking variable
    //check if # of elements removed is greater than or equal to halfLength
    //if so, return tracking variable's length

  var tracker = [];

  while(true) {
      var max = -1;
      var maxNo;
      for (key in countObj) {
          if (countObj[key] > max) {
              var found = false;
              for (var i = 0; i < tracker.length; i++) {
                  if (key === tracker[i][0]) {
                      found = true;
                  }
              }
              if (!found) {
                  max = countObj[key];
                  maxNo = key;
              }

          }
      }
      tracker.push([maxNo, max]);

      var eleCounter = 0;
      for (var i = 0; i < tracker.length; i++) {
          eleCounter += tracker[i][1];
      }

      if (eleCounter >= halfLength) {
          return tracker.length;
      }
  }

};