var convertToTitle = function(columnNumber) {
  let roundQuotient= 0;
  let result =""
  while (columnNumber){
      result = String.fromCharCode(((columnNumber-1)%26)+97) + result
      columnNumber = Math.floor((columnNumber-1)/26);
      console.log("result in loop", result, "column#", columnNumber)
  }
  console.log("final",result)
  return result.toUpperCase()
};