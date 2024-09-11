//Module Caching

class SuperHero{
    constructor(name) {
        this.name = name;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
}
// FOR a need to create separate instances of superhere
// Export the class instead
module.exports = SuperHero;