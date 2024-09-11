// Each function get its private scope: this is module scope
// the first paranthesis wraps the function to that it does not conflict with other simmilar functions 
// this is encapsulation
//IIFE
(function (massahe) {
  const superhero = "batman";
  console.log(massahe, superhero);
})("Hello"); // dont forget the colon or else it wont run

// this is how we pass a parameter  
(function (massage) {
  const superhero = "superman";
  console.log(massage, superhero);
})('hey');

// this parameter run through node on execution
// (function (exports, require, module, __filename, __dirname) {
//   const superhero = "superman";
//   console.log(massage, superhero);
// })('hey');