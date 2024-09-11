// Each function get its private scope: this is module scope
(function () {
  const superhero = "batman";
  console.log(superhero);
})(); // dont forget the colon or else it wont run

(function () {
  const superhero = "superman";
  console.log(superhero);
})();
