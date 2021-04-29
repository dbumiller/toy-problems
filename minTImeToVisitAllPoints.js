/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
  //create an output variable
  //loop through points
    //check if there is a next point in the array
      //if there is, find whether the delta x or delta y is longer
      //add the longer delta to output
  //return output

  var time = 0;
  for (var i = 0; i < points.length; i++) {
      if (i !== points.length - 1) {
          if (Math.abs(points[i][0] - points[i + 1][0]) > Math.abs(points[i][1] - points[i + 1][1])) {
              time += Math.abs(points[i][0] - points[i + 1][0]);
          } else {
              time += Math.abs(points[i][1] - points[i + 1][1]);
          }
      }
  }
  return time;
};