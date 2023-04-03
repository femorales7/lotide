const assertEqual = function(actual, expected) {
  const rights = String.fromCodePoint(0x2705);
  const wrong = String.fromCodePoint(0x274C);
  if (actual === expected) {
    console.log(`${rights} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${wrong} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  if (array.length === 0) {
    return undefined;
  } else {
    return array[0];
  }
};

const tail = function(array) {
  let newArray = [];

  if (array.length <= 1) {
    return newArray;
    
  } else {
    for (let i = 1; i < array.length; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  }
 
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(words.length, 3);

assertEqual(words.length, 2);
assertEqual(words[0], "Lighthouse");
assertEqual(words[1], "Labs");

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");