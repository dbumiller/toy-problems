/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  var changeObj = {
      five: 0,
      ten: 0
  };

  for (var i = 0; i < bills.length; i++) {
      if (bills[i] === 5) {
          changeObj.five++;
      } if (bills[i] === 10) {
          changeObj.ten++;
          if (changeObj.five > 0) {
              changeObj.five--;
          } else {
              return false;
          }
      } if (bills[i] === 20) {
          if (changeObj.five > 0 && changeObj.ten > 0) {
              changeObj.five--;
              changeObj.ten--;
          } else if (changeObj.five > 2) {
              changeObj.five -= 3;
          } else {
              return false;
          }
      }
  }

  return true;
};