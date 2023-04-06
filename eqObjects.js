const eqArrays = function(array1, array2){
 
  return JSON.stringify(array1) === JSON.stringify(array2)
}  
  

const assertEquals = function(actual, expected) {
  const rights = String.fromCodePoint(0x2705);
  const wrong = String.fromCodePoint(0x274C);
  console.log(actual, expected)

  if (actual === expected) {
    console.log(`${rights} Assertion Passed: ${actual} === ${expected}`);
    
  } else {
    console.log(`${wrong} Assertion Failed: ${actual} !== ${expected}`);
  }

};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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





// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject= { size: "medium", color: "red" };
// eqObjects(shirtObject , anotherShirtObject); // => true

// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// eqObjects(shirtObject , longSleeveShirtObject); // => false

// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject= { size: "medium", color: "red" };
// eqObjects(shirtObject , anotherShirtObject); // => true
// //We need to use that return value in combination with assertEquals to test if the function is working correctly.
// assertEquals(eqObjects(shirtObject , anotherShirtObject), true);

// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// eqObjects(shirtObject , longSleeveShirtObject); // => false
// assertEquals(eqObjects(shirtObject , longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEquals(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEquals(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false