const takeUntil = function(array, callback) {
  const resultArr = []
  for (const arr of array){
    if (callback(arr)){
      return resultArr
    }
      resultArr.push(arr)
  };
}
module.exports = takeUntil;

