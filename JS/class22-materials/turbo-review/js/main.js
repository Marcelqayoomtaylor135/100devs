// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

let faveDrink = "Hot Chocolate"
console.log(faveDrink.trim())

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let faveFruits = "apple orange banana"
if (faveFruits.includes("apple")){
    console.log("Contains the word apple")
}

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors(){
    let chance = Math.random()
    if (chance < 0.3333){
        return "rock"
    } else if (chance < 0.6666){
        return "paper"
    } else {
        return "scissors"
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function playRockPaperScissors(playerChoice){
    let botChoice = rockPaperScissors()
    // Could've been written quicker with one if using || to check win condition
    if (playerChoice == botChoice){
        return("you tie!")
    } else if (playerChoice === "rock"){
        if (botChoice === "paper"){
            return("you lost!")
        } else {
            return("you won!")
        }
    } else if (playerChoice === "paper"){
        if (botChoice === "scissors"){
            return("you lost!")
        } else {
            return("you won!")
        }
    } else if (playerChoice === "scissors"){
        if (botChoice === "rock"){
            return("you lost!")
        } else {
            return("you won!")
        }
    }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playRPSMulti(choices){
    for (let i = 0; i < choices.length; i++){
        console.log(playRockPaperScissors(choices[i]))
    }
}

playRPSMulti(["rock", "paper", "scissors", "rock", "paper", "scissors"])