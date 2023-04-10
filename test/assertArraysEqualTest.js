const assert = require(`chai`).assert;
const assertArraysEqual = require(`../assertArraysEqual`)

describe(`#assertArraysEqual`, () => {
  it("returns equal ", () => {
    assert.equal(assertArraysEqual(["1", "2", "3" ], ["1", "2", "3"]), true)
  })
})