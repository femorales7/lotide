const assertEqual = function(actual, expected) {
  const rights = String.fromCodePoint(0x2705);
  const wrong = String.fromCodePoint(0x274C);

  if (actual === expected) {
    console.log(`${rights} Assertion Passed: ${actual} === ${expected}`);
    
  } else {
    console.log(`${wrong} Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function (letters){
  let result = {};
  for (const letter of letters){
    if (result[letter]){
      result[letter] ++
    }else{
      result[letter] = 1
    }

  }
  return result

}

const finalResult = countLetters("hello")
console.log(finalResult)
assertEqual(finalResult["h"], 1)
assertEqual(finalResult["e"], 1)
assertEqual(finalResult["l"], 2)
assertEqual(finalResult["o"], 1)
assertEqual(finalResult["l"], 1)