const assert = require(`chai`).assert;
const countLetters = require(`../countLetters`);
describe("#countLetters", () => {
  it("count letters: hello have {h: 1, e: 1, l: 2, o: 1}", () => {
    assert.deepEqual(countLetters("hello"),{ h: 1, e: 1, l: 2, o: 1 });
  })
});  