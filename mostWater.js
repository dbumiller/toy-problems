//Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var max = 0;

  for (var i = 0; i < height.length; i++) {

    for (var k = 0; k < height.length; k++) {
      var lower;
      if (height[i] < height[k]) {
        lower = height[i];
      } else {
        lower = height[k];
      }
      if (max < (lower * (k - i))) {
        max = lower * (k - i);
      }
    }
  }

  return max;
};
