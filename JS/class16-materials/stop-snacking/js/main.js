//Create a function that grabs the number of snacks from the input and tells you to stop that many times

document.querySelector("#help").addEventListener('click', stopSnacking)

function stopSnacking(){
    document.querySelector("#stops").innerHTML = ""
    console.log("works")
    let numOfSnacks = Number(document.querySelector("input").value)
    console.log(`num of snacks: ${numOfSnacks}`)
    for (let i = 1; i <= numOfSnacks; i++){
        document.querySelector("#stops").innerHTML += " stop snacking"
    }
}