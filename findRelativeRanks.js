var findRelativeRanks = function(nums) {
  const sortedNums = [...nums].sort((a,b) => b-a)
  const sortedResults = []
  const sortedIndices = []
  const result = []

  sortedResults[0] = 'Gold Medal'
  sortedResults[1] = 'Silver Medal'
  sortedResults[2] = 'Bronze Medal'

  for(let i=3; i<nums.length; i++) {
      sortedResults[i] = i+1
  }

  for(let i=0; i<nums.length; i++) {
      const currentNumber = sortedNums[i]
      const mappedIndex = nums.indexOf(currentNumber)
      sortedIndices.push(mappedIndex)
  }

  for(let i=0; i<nums.length; i++) {
      const sortedIndex = sortedIndices[i]
      let sortedResult = sortedResults[i]

      if(typeof sortedResult === 'number') {
          sortedResult = sortedResult.toString()
      }

      result[sortedIndex] = sortedResult
  }

  return result
};