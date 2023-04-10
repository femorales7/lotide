const middle = require(`../middle`);
const assertArraysEqual = require(`../assertArraysEqual`)

// const result = middle(getArguments())
// console.log(result)
assertArraysEqual(middle([5,2,4,8]),[2,4])