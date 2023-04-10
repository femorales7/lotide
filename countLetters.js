
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

  // console.log (result)

}

module.exports = countLetters;

