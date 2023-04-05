
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


const without = function(source, itemsToRemove){

  let sourceNew =  JSON.stringify(source);
  let removeNew = JSON.stringify(itemsToRemove);

  // console.log(sourceNew)
  // console.log(removeNew)
  let finalArray = [];

  for (let i =0; i < source.length; i++){
    if (!itemsToRemove.includes(source[i])){
      finalArray.push(source[i])
    }  
  }
console.log(finalArray)

}
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); 
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);



// without([1, 2, 3], [1])// => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"])