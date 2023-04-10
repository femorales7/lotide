// const middle = require(`../middle`);
// const assertArraysEqual = require(`../assertArraysEqual`)

// const result = middle(getArguments())
// console.log(result)
// assertArraysEqual(middle([5,2,4,8]),[2,4])

const assert = require(`chai`).assert;
const middle = require(`../middle`);

describe("#middle", () => {
  it("This the middle of the array", () => {
    assert.deepEqual(middle([5,2,4,8]),[2,4]);
  })
});  