const assert = require(`chai`).assert;
const assertEqual = require(`../assertEqual`)
const eqArrays = require(`../eqArrays`)

describe(`#assertArraysEqual`, () => {
  it("returns equal ", () => {
    assert.equal(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true))
  })
})