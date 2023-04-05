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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0 ; i < sentence.length; i++){
    if (results[sentence[i]]){
      results[sentence[i]].push(i);

    }else{
      results[sentence[i]] = [i]
    }

  }
  return results;
};
const result = letterPositions("hello")
console.log(result)
assertArraysEqual(result['h'], [0]); 
assertArraysEqual(result['e'], [1]); 
assertArraysEqual(result['l'], [2, 3]);   
assertArraysEqual(result['o'], [4]); 
assertArraysEqual(result['h'], [1]); 
