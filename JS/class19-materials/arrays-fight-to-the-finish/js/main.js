//Create an array of movie titles. Loop through the array and each element to the h2.

let movies = ["Simpsons Movie", "Alien", "Predator", "Top Gun"]

let headingTwo = document.querySelector("h2")
movies.forEach((x) => headingTwo.innerText += ` ${x}`)

//Create an array of numbers. Loop through the array and three to each number and replace the old number.

let nums = [4,6,231,8,4,1]
nums.forEach((_,i,a) => a[i] += 3)
console.log(nums)

//Find the average of all the numbers from question three

let avg = 0
// the following notation could have been written the same as line 11 but just practicing
nums.forEach((x) => {
    avg += x
})
avg = avg / nums.length
console.log(avg)