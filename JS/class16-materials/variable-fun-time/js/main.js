//--- Easy
//create a variable and assign it a number

let myCuteVar = 42;

//minus 10 from that number

myCuteVar -= 10;

//print that number to the console

console.log(myCuteVar);

//--- Medium
//create a variable that holds a value from the input

let input = document.getElementById('danceDanceRevolution').value;

//add 25 to that number

input += 25;

//alert that number

alert(input);

//--- Hard
//create a variable that holds the h1

let heading = document.querySelector('h1');

//add an event listener to that element that console logs the sum of the two previous variables

heading.addEventListener('click', sum);

function sum(){
    console.log(myCuteVar+Number(input))
}