import { expect } from 'chai'
import { describe, it } from 'mocha'

import { Solution } from '../src/solution'

describe('Solution', () => {
  describe('.solution', () => {
    const dataTable = [
      { input: [3, 1, 2, 4, 3], expected: 1 },
      { input: [-1, -1], expected: 0 },
      { input: [-1, 1], expected: 2 },
      { input: [1, -1], expected: 2 },
      { input: [0, -1], expected: 1 },
      { input: [-1, 0], expected: 1 },
      { input: [0, 1], expected: 1 },
      { input: [1, 0], expected: 1 },
      { input: [0, 0], expected: 0 },
    ]

    // Check efficiency as required
    // Maximum
    // Minimum
    // Odd
    // Even
    // Negative numbers
    // Load Test

    for (let i = 0; i < dataTable.length; i += 1) {
      describe(`when given ${dataTable[i].input}`, () => {
        it(`returns ${dataTable[i].expected}`, () => {
          expect(Solution.solution(dataTable[i].input)).to.eq(
            dataTable[i].expected
          )
        })
      })
    }
  })
})
