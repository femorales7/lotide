const assertEqual = function(actual, expected) {
  const rights = String.fromCodePoint(0x2705);
  const wrong = String.fromCodePoint(0x274C);

  if (actual === expected) {
    console.log(`${rights} Assertion Passed: ${actual} === ${expected}`);
    
  } else {
    console.log(`${wrong} Assertion Failed: ${actual} !== ${expected}`);
  }

};

module.exports = assertEqual;


//Test Code

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1,1);
