const assertEqual = function(actual, expected) {
  const rights = String.fromCodePoint(0x2705);
  const wrong = String.fromCodePoint(0x274C);
  // console.log(actual)
  // console.log(expected)
  if (actual === expected) {    
    console.log(`${rights} Assertion Passed: ${actual} === ${expected}`);    
  } else {
    console.log(`${wrong} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array){
  if (array.length === 0){
    return undefined;
  } else {
    return array[0];
  }  
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");