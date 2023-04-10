const eqArrays = require("./eqArrays");
const assertArraysEqual = function(arg1, arg2){
  const rights = String.fromCodePoint(0x2705);
  const wrong = String.fromCodePoint(0x274C);

  if (eqArrays(arg1, arg2)){
    console.log(`${rights} The argument ${arg1} is exactly the same as ${arg2}`)
    return true;
    
  }else {
    console.log(`${wrong} The argument ${arg1} is different to ${arg2}`)
    return false;
    
  }
};

module.exports = assertArraysEqual;
// assertArraysEqual(["1", "2", "3" ], ["1", "2", "3"]);