/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
  var subordinates = [];
  var sum = 0;
  for (var i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
          sum += employees[i].importance;
          for (var j = 0; j < employees[i].subordinates.length; j++) {
              subordinates.push(employees[i].subordinates[j]);
          }
      }
  }


  for (var i = 0; i < employees.length; i++) {
      for (var j = 0; j < subordinates.length; j++) {
          if (employees[i].id === subordinates[j]) {
              sum += employees[i].importance;
          }
      }
  }

  return sum;
};