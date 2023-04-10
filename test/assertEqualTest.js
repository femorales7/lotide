const assert = require(`chai`).assert;
const assertEqual = require(`../assertEqual`)

describe(`#assertEqual`, () => {
  it("returns equal ", () => {
    assert.equal(assertEqual("Lighthouse Labs", "Bootcamp"))
  })
})

describe(`#assertEqual`, () => {
  it("returns equal ", () => {
    assert.equal(assertEqual(1,1))
  })
})