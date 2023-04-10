
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {}
  for (const item of allItems){
    if (itemsToCount[item]){
      console.log(item)
      if (results[item]){
      results[item] += 1
      }else {
      results[item] = 1
      }
    }
  }
  //console.log(results)
  return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

module.exports = countOnly;

