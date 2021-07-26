var twoSum = function(numbers, target) {
  let arr = [];
  let map = {};
  for (let i = 0; i < numbers.length; i++) {
    let complement = target - numbers[i];
    // if it's the second time we see the complement, we have our answer
    if (map[complement]) {
      arr[0] = map[complement];
      arr[1] = i + 1;
      return arr;
    }
    // if it's the first time we see the complement, add it to the map
    else {
      // value is i + 1 because the solution wants us to find the "first" and "second" number instead of index 0 and index 1
      map[numbers[i]] = i + 1;
    }
  }
};