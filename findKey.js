const findKey = function (object ,  callback){
  const keys = Object.keys(object)
  
   for (const key of keys){
    //console.log (key)
    if (callback(object[key])){
      return key
    }

   }
  

}

module.exports = findKey;
