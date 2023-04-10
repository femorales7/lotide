const assert = require(`chai`).assert;
const middle = require(`../middle`);

describe("#middle", () => {
  it("This the middle of the array", () => {
    assert.deepEqual(middle([5,2,4,8]),[2,4]);
  })
});  