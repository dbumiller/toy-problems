var moveZeroes = (arr) => {
  //given an array of #'s, write a function to move all teh 0's to the end of it
  //maintain the order of the non-zero elements
  //must do it in place, without making a copy of the array
  //minimize the total number of operations
  var lastBeforeMovedZeroes = arr.length - 1;
  movedZeroes = 0;
  for (var i = 0; i < lastBeforeMovedZeroes; i++) {
    if (arr[i] === 0) {
      var holder = arr[lastBeforeMovedZeroes];
      arr[lastBeforeMovedZeroes] = 0;
      for (var j = lastBeforeMovedZeroes - 1; j >= i; j--) {
        var placeholder = arr[j];
        arr[j] = holder;
        holder = placeholder;
      }
      // console.log(i, arr);
      lastBeforeMovedZeroes--;
    }
    if (arr[i] === 0) {
      i--;
    }
  }
  return arr;
}

console.log(moveZeroes([1, 2, 0, 0, 0, 0, 3, 2, 1, 5, 6, 7]));