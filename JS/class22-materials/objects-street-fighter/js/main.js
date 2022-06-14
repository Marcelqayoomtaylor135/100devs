//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function MakeSFCharacter(name, level, voiceActor, fightingStyle){
    this.name = name
    this.level = level
    this.voiceActor = voiceActor
    this.fightingStyle = fightingStyle

    this.punch = function(){
        alert("HIIYAAAH")
    }

    this.kick = function(){
        alert("HYAH")
    }

    this.dodge = function(){
        alert("WOAHH")
    }
}

let ryu = new MakeSFCharacter("Ryu", 42, "Johnny Chan", "HADDDUUUUUKEEEEENNNN")