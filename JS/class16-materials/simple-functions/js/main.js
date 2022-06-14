//---Easy
//create a function that subtracts two numbers and alerts the difference

function subtractTwo(num1, num2){
    alert(num1 - num2)
}

//create a function that divides three numbers and console logs the quotient

function divideThree(num1, num2, num3){
    console.log(num1 / num2 / num3)
}

//create a function that multiplys three numbers and returns the product

function multiplyThree(num1, num2, num3){
    return num1*num2*num3
}

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function mathThree(num1,num2,num3){
    let sum = num1 + num2
    return sum % num3
}

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function mathFour(num1,num2,num3,num4){
    let multiple = num1 * num2
    if (multiple > 100){
        let sum = num3 + num4
        console.log(sum)
    } else if (multiple < 100){
        let diff = num3 - num4
        console.log(diff)
    } else if (multiple == 100){
        let newMultiple = num1*num2*num3
        alert(newMultiple/num4)
    }
}

subtractTwo(6,3)

divideThree(8,2,2)

console.log(`Multiply three result ${multiplyThree(2,2,2)}`)

console.log(`Math three result ${mathThree(4,4,2)}`)



mathFour(50,1,1,1)