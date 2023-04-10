const eqArrays = function(array1, array2){
  return JSON.stringify(array1) === JSON.stringify(array2)
}  
  
module.exports = eqArrays;


// assertEqual(eqArrays(["1", "2", "3", "*"], ["1", "2", "3", 25]), true); // => should PASS
