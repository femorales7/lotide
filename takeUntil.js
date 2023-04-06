
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
const takeUntil = function(array, callback) {
  const resultArr = []
  for (const arr of array){
    if (callback(arr)){
      return resultArr
    }
      resultArr.push(arr)
  };
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);