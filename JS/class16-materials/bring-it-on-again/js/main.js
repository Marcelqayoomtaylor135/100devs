// *Variables*
// Declare a variable, assign it a value, and alert the value

let num = 8
alert(num)

// Create a variable, divide it by 10, and console log the value

let coolerNum = 40
coolerNum = coolerNum / 10
console.log(coolerNum)

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product

function multiplyThree(num1,num2,num3){
    alert(num1*num2*num3)
}

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result

function mathFour(num1,num2,num3,num4){
    let sum = num1 + num2 - num3 - num4
    console.log(sum)
}

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"

function weHaveAWinna(num1,num2,num3){
    let finalNumber = (100 + num1 - num2) / 3
    if (finalNumber > 25){
        console.log("WE HAVE A WINNNA")
    }
}

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"

function dayAlert(day){
    day = day.toLower()
    if (day === "saturday" || day === "sunday"){
        alert("weekend")
    } else {
        alert("week day")
    }
}

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3

function countByThree(num){
    for (let i = 1; i < num+2; i += 3){
        console.log(i);
    }
}

countByThree(100)