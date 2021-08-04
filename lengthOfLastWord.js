var lengthOfLastWord = function(s) {
  const arr=s.split(' ');
  let n = arr.length-1;
  let last = n;
  for(let i=n;i>=0;i--){
      if(arr[i].length !== 0){
          last=i;
          break;
      }
  }
  return arr[last].length;
};