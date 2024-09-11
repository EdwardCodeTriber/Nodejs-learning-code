// Commonjs , used to import node modules and executes them in order
const add = require('./add')
console.log("this one")

const sum = add(4, 9)
const sub = add(-4,9)
console.log(sum)
console.log(sub)