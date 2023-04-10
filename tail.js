const tail = function(array) {
  let newArray = [];

  if (array.length <= 1) {
    return newArray;
    
  } else {
    for (let i = 1; i < array.length; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  }
 
};
module.exports = tail;
