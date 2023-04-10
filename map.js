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

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback){
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  
 
  }
  return results;
}
const result1 = map(words, word => word[0]);
console.log(result1)


assertArraysEqual(result1, [ 'g', 'c', 't', 'm', 't' ]);


