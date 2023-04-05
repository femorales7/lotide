
const assertEqual = function(actual, expected) {
  const rights = String.fromCodePoint(0x2705);
  const wrong = String.fromCodePoint(0x274C);

  if (actual === expected) {
    console.log(`${rights} Assertion Passed: ${actual} === ${expected}`);
    
  } else {
    console.log(`${wrong} Assertion Failed: ${actual} !== ${expected}`);
  }

};

const findKeyByValue = function (objects, value){
  let results = Object.keys(objects)
  //console.log(results)

  for (let result of results){
    if (objects[result] === value){
      console.log(`This show ${value} is of genre ${result}`)
      return result
    }
    
  }
  console.log(`This show ${value} is of genre undefined`)
  return undefined
  
  
};









const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};





assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);