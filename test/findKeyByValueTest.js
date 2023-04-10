const assert = require(`chai`).assert;
const findKeyByValue = require(`../findKeyByValue`);
describe("#findKeyByValue", () => {
  it(`the value of type is "drama" `, () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  })
});  
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};