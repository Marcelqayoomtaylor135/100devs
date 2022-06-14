//Create a dog object that has four properties and three methods

let dog = {
    name: "barry",
    age: 10,
    breed: "staffy",
    colour: "brown and white",

    bark: function(){
        alert("WOOF")
    },

    sit: function(){
        alert("sitting")
    },

    rollOver: function(){
        alert("rolll")
    }

}

dog.legs = 4

dog.shake = function(){
    console.log("shake shake")
}

dog.jump = h => console.log(`dog jumped ${h} metres!`)

dog.jump(4)