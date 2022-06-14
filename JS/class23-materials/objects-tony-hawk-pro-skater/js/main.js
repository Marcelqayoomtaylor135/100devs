//Create a Tony Hawk Pro Skater constructor that makes skating game characters with 4 properties and 3 methods

function CreateSkaterCharacter(name, age, usesGear, boardColor){
    this.name = name
    this.age = age
    this.usesGear = usesGear
    this.boardColor = boardColor

    this.ollie = height => console.log(`${this.name} just ollied ${height} metres!!`)
    this.kickFlip = function(){
        console.log(`${this.name} just did a sick kickflip!`)
    }
    this.grind = function(duration){
        console.log(`${this.name} grinded for ${duration} seconds!!`)
    }
}

let marcel = new CreateSkaterCharacter("Marcel", 19, true, "black and purple")