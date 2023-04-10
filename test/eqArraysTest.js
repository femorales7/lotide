// const assertEqual = require('../assertEqual');
// const eqArrays = require(`../eqArrays`)
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
// assertEqual(eqArrays(["1", "2", "3", 5], ["1", "2", "3"]), true)

const assert = require(`chai`).assert;
const assertEqual = require(`../assertEqual`)
const eqArrays = require(`../eqArrays`)

describe(`#assertArraysEqual`, () => {
  it("returns equal ", () => {
    assert.equal(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true))
  })
})