const SuperHero = require('./super-hero')

// altered code for muiltiple scenarios
const batman = new  SuperHero('batman');
console.log(batman.getName())
batman.setName('bruce wayne')
console.log(batman.getName())

const newSuperHero = new SuperHero('superman')
console.log(newSuperHero.getName())

