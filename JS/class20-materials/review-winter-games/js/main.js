//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function makeArrayEven(arr){
    let evenArray = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0){
            evenArray.push(arr[i])
        }
    }
    return evenArray
}

console.log(makeArrayEven([1,2,3,4,5,6,7,8]))