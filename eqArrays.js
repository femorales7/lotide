const assertEqual = function(actual, expected) {
  const rights = String.fromCodePoint(0x2705);
  const wrong = String.fromCodePoint(0x274C);

  if (actual === expected) {
    console.log(`${rights} Assertion Passed: ${actual} === ${expected}`);
    
  } else {
    console.log(`${wrong} Assertion Failed: ${actual} !== ${expected}`);
  }

};


const eqArrays = function(array1, array2){
  return JSON.stringify(array1) === JSON.stringify(array2)
}  
  



assertEqual(eqArrays(["1", "2", "3", "*"], ["1", "2", "3", 25]), true); // => should PASS
