const assert = require(`chai`).assert;
const countOnly = require(`../countOnly`);
describe("#countOnly", () => {
  it(`count : the name repeat `, () => {
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.deepEqual(result1["Fang"], 2);
  })
});  

const firstNames = [
  "Karl",
  "Salima", 
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
