//Create a constructor with 4 properties and 3 methods

function MakePizza(crustType, toppings, sauce, base){
    this.crustType = crustType
    this.toppings = toppings
    this.sauce = sauce
    this.base = base

    this.burnMouth = function(){
        alert("AHHHHH")
    }

    this.calculateDeliveryTime = function(){
        alert("hmmm cALCUlating")
    }
}

let pizza = new MakePizza("thin", ["olives", "pepporoni", "capsicum"], "red", "regular")