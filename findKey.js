const eqArrays = function(array1, array2){
  return JSON.stringify(array1) === JSON.stringify(array2)
}  

const assertArraysEqual = function(arg1, arg2){
  const rights = String.fromCodePoint(0x2705);
  const wrong = String.fromCodePoint(0x274C);

  if (eqArrays(arg1, arg2)){
    console.log(`${rights} The argument ${arg1} is exactly the same as ${arg2}`)
  }else {
    console.log(`${wrong} The argument ${arg1} is different to ${arg2}`)
  }
};

const findKey = function (object ,  callback){
  const keys = Object.keys(object)
  
   for (const key of keys){
    //console.log (key)
    if (callback(object[key])){
      return key
    }

   }
  

}
const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3) // => "noma"

console.log (result)
assertArraysEqual(result, "Akaleri");