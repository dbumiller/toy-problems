// please complete the challenge according to the instructions
var solution = function(arr) {
  //create output, rangeMin, and rangeMax variables
  var output = '';
  var rangeMin = arr[0];
  var rangeMax = arr[0];

  //loop through array
  for (var i = 1; i < arr.length; i++) {
    //if current element is one greater than rangeMax
    if (arr[i] === rangeMax + 1) {
      //increment rangeMax
      rangeMax++;

    //else
    } else {
      //if rangeMin is equal to rangeMax
      if (rangeMin === rangeMax) {
        //add rangeMax to output
        output += rangeMax + ',';
        //update rangeMin and max to current element
        rangeMin = arr[i];
        rangeMax = arr[i];

      //else
      }else if (rangeMin + 1 === rangeMax) {
          output += rangeMin + ',' + rangeMax + ',';
          rangeMin = arr[i];
          rangeMax = arr[i];
      } else {
        //add correct range to output
        output += rangeMin + '-' + rangeMax +',';
        //update rangeMin and max to current element
        rangeMin = arr[i];
        rangeMax = arr[i];
      }
    }

  }
  //if rangeMin and max are the same
  if (rangeMin === rangeMax) {
    //add final element to output
    output += rangeMax;

  //else
  } else if(rangeMin + 1 === rangeMax) {
      output += rangeMin + ',' + rangeMax;
  } else {
    //add range to output
    output += rangeMin + '-' + rangeMax;
  }
  //return output
  return output;
}