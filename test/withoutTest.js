const assert = require(`chai`).assert;
const without = require(`../without`);
describe("#without", () => {
  it(`remove parts of elements `, () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  })
});  

describe("#without", () => {
  it(`remove parts of elements `, () => {
    assert.deepEqual(without(["hello", "world", "lighthouse"],["lighthouse"]), ["hello", "world"]);
  })
});  

