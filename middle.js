// const getArguments = function () {
//   const args = JSON.parse(process.argv.slice(2));
//   console.log('args:', args);

//   return args
// }

// const assertArraysEqual = function(arg1, arg2){
//   const rights = String.fromCodePoint(0x2705);
//   const wrong = String.fromCodePoint(0x274C);

//   if (eqArrays(arg1, arg2)){
//     console.log(`${rights} The argument ${arg1} is exactly the same as ${arg2}`)
//   }else {
//     console.log(`${wrong} The argument ${arg1} is different to ${arg2}`)
//   }
// };


// const eqArrays = function(array1, array2){
//   return JSON.stringify(array1) === JSON.stringify(array2)
// } 

const middle = function(array){

  let middleArray = [];
  let index = 0
  // console.log(array.length)
  if (array.length <= 2){
    return middleArray
  }else if ( array.length % 2 === 0){
    index = array.length/2
    middleArray.push(array[index - 1])
    middleArray.push(array[index ])  
    return middleArray 

  }else {
    index = (array.length + 1)/2
    middleArray.push(array[index -1])
    return middleArray
  }


}

module.exports = middle;
// const result = middle(getArguments())
// console.log(result)
// assertArraysEqual(middle([5,2,4,8]),[2,4])

