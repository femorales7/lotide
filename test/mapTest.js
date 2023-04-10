const assert = require(`chai`).assert;
const map = require(`../map`);
describe("#map", () => {
  const words = ["ground", "control", "to", "major", "tom"];
  it(`make a map over the firs letter of the words" `, () => {
    assert.deepEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
  })
});  
