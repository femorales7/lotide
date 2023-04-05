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
console.log(countLetters("hello"));
console.log(assertEqual(countLetters("hello"), { h: 1, e: 1, l: 2, o: 1 } ));