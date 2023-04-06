// FUNCTION IMPLEMENTATION

const eqObjects = function(object1, object2) {
  let keyOb = Object.keys(object1)
  let keyob2 = Object.keys(object2)

  if (keyOb.length !== keyob2.length){
    return false
  }
    
    for(const key of keyOb){
      
      if (Array.isArray(object1[key])&&Array.isArray(object2[key])){
        
        if (!eqArrays(object1[key], object2[key])){
          
          return false
        }
      }else if (object1[key] !== object2[key]){
        return false
      }
      return true
    }
    return false
  }

const assertObjectsEqual = function(arg1, arg2) {
  const inspect = require('util').inspect;
  const rights = String.fromCodePoint(0x2705);
  const wrong = String.fromCodePoint(0x274C);

  if (eqObjects(arg1, arg2)){
    console.log(`Example label: ${inspect(arg1)}`);
    console.log(`${rights} The argument ${inspect(arg1)} is exactly the same as ${inspect(arg2)}`)
  }else {
    console.log(`${wrong} The argument ${inspect(arg1)} is different to ${inspect(arg2)}`)
  }
  
};
console.log(assertObjectsEqual({ a: '1', b: 2 } , { b: 2, a: '1' }));
