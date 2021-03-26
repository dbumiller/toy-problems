/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
//Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
//Output: [[2,4],[1,3],[2,4],[1,3]]

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  var output = [];

  for (var i = 0; i < node.length; i++) {
    var currentNode = [];
    for (var k = 0; k < node[i].length; k++) {
      currentNode.push(node[i][k]);
    }
    output.push(currentNode);
  }

  return output;
};

var input = [[2,4],[1,3],[2,4],[1,3]];
console.log(cloneGraph(input));