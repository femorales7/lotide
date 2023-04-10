const assert = require(`chai`).assert;
const tail = require(`../tail`);

describe("#tail", () => {
  it("This the tail of the array", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]),["Lighthouse", "Labs"]);
  })
});  