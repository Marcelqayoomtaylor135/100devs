// *Variables*
// Create a variable and console log the value

let myCuteVar = "uwu";
console.log(myCuteVar);

// Create a variable, add 10 to it, and alert the value

let epicNumber = 72;
epicNumber += 10;
alert(epicNumber);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtractFourNumbers(num1, num2, num3, num4){
    let difference = num1 - num2 - num3 - num4;
    alert(difference);
}

// Create a function that divides one number by another and returns the remainder

function getRemainder(num1, num2){
    let rem = num1 / num2;
    return rem;
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addTwo(num1, num2){
    if (num1 + num2 > 50){
        alert("Jumanji");
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function zebraChecker(num1, num2, num3){
    let multiple = num1 * num2 * num3;
    if (multiple % 3 == 0){
        alert("ZEBRA");
    }
}

subtractFourNumbers(10,2,2,2);
alert(getRemainder(4,2));
addTwo(25,29);
zebraChecker(3,3,3);