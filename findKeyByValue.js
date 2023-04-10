const findKeyByValue = function (objects, value){
  let results = Object.keys(objects)
  //console.log(results)

  

  for (let result of results){
    if (objects[result] === value){
      console.log(`This show ${value} is of genere ${result}`)
      return result
    }
    
  }
  console.log(`This show ${value} is of genre undefined`)
  return undefined
  
  
};
module.exports = findKeyByValue;

