// const assertEqual = require('../assertEqual');
// const head = require('../head');
// const tail = require(`../tail`)
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);

// assertEqual(words.length, 2);
// assertEqual(words[0], "Lighthouse");
// assertEqual(words[1], "Labs");

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

const assert = require(`chai`).assert;
const tail = require(`../tail`);

describe("#tail", () => {
  it("This the tail of the array", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]),["Lighthouse", "Labs"]);
  })
});  