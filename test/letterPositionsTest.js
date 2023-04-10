const assert = require(`chai`).assert;
const letterPositions = require(`../letterPositions`);
describe("#letterPositions", () => {
  it(`fin the letter position of l `, () => {
    const result = letterPositions("hello")
    assert.deepEqual(result['l'],  [2, 3]);
  })
});  
