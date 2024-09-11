const superHero = require('./super-hero')

console.log(superHero.getName());

superHero.setName("superman");

console.log(superHero.getName());

// Module Caching
const newSuperHero = require('./super-hero')
console.log(newSuperHero.getName())

