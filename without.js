const without = function(source, itemsToRemove){

  let sourceNew =  JSON.stringify(source);
  let removeNew = JSON.stringify(itemsToRemove);

  let finalArray = [];

  for (let i =0; i < source.length; i++){
    if (!itemsToRemove.includes(source[i])){
      finalArray.push(source[i])
    }  
  }
  return finalArray

}
module.exports = without;
