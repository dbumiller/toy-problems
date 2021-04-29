/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
  //create an output variable
  //loop through input
  //create a temporary array to hold new row
    //loop through individual array
      //create an average variable set to the gray scale of that element
      //create a counter variable set to 1
      //if there exists a previous row (by checking the for loop variable)
        //if there exists an element to the top left
          //add it to the average
          //add to the counter variable
      //extrapolate until all 8 cells have been checked
      //push the floor of the average into the temp array variable
     //push temp array into the output variable

  var output = [];

  for (var i = 0; i < M.length; i++) {
      var tempArray = [];
      for (var j = 0; j < M[i].length; j++) {

          var average = M[i][j];
          var counter = 1;

          if (i !== 0) {
              if (j !== 0) {
                  average += M[i - 1][j - 1];
                  counter++;
              }
              average += M[i - 1][j];
              counter++;
              if (j !== M[i].length - 1) {
                  average += M[i - 1][j + 1];
                  counter++;
              }
          }

          if (j !== 0) {
              average += M[i][j - 1];
              counter++;
          }
          if (j !== M[i].length - 1) {
              average += M[i][j + 1];
              counter++;
          }

          if (i !== M.length - 1) {
              if (j !== 0) {
                  average += M[i + 1][j - 1];
                  counter++;
              }
              average += M[i + 1][j];
              counter++;
              if (j !== M[i].length - 1) {
                  average += M[i + 1][j + 1];
                  counter++;
              }
          }

          tempArray.push(Math.floor(average / counter));
      }
      output.push(tempArray);
  }
  return output;
};