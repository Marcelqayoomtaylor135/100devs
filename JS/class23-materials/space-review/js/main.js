//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let numbers = [1,2,3,4,5,6,7,8]
let sum = numbers.reduce((total, num) => total + num, 0)
alert(sum)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

/*
function squareArray(numbers){
    
    let squaredNumbers = []
    numbers.forEach(x => {
        squaredNumbers.push(x**2)
    })
    return squaredNumbers
    
}
*/

let newArr = nums => nums.map( num => num**2)

//Create a function that takes string
//Print the reverse of that string to the console
/*
function reverseString(string){
    for (let i = string.length-1; i >= 0; i--){
        let newString = ""
        newString += string.charAt(i)
    }
    return reverseString
}
*/

let unoReverse = str => str.split('').reverse().join('')

//Create a function that takes in a string
//Alert if the string is a palindrome or not

/*
function isPallendrome(string){
    for (let i = 0; i < string.length; i++){
        for (let j = string.length-1; j >= 0; j--){
            if (string.charAt(i) !== string.charAt(j)){
                return false
            }
        }
    }
    return true
}
*/

const palindromeCheck = str => alert(str === unoReverse(str))

palindromeCheck('racecar')