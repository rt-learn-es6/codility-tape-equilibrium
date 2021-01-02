export class Solution {
  static solution(theArray) {
    let minimumDelta = Number.MAX_SAFE_INTEGER

    const theSum = Solution.sum(theArray)

    let sumLeft = 0
    for (let i = 0; i < theArray.length - 1; i += 1) {
      sumLeft += theArray[i]
      const sumRight = theSum - sumLeft
      const delta = Math.abs(sumRight - sumLeft)
      if (delta < minimumDelta) {
        minimumDelta = delta
      }
    }
    return minimumDelta
  }

  static sum(theArray) {
    let sum = 0
    for (let i = 0; i < theArray.length; i += 1) {
      sum += theArray[i]
    }
    return sum
  }
}
