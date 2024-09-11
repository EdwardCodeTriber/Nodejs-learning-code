// Each function get its private scope: this is module scope
// the first paranthesis wraps the function to that it does not conflict with other simmilar functions 
// this is encapsulation
//IIFE
(function () {
  const superhero = "batman";
  console.log(superhero);
})(); // dont forget the colon or else it wont run

(function () {
  const superhero = "superman";
  console.log(superhero);
})();
