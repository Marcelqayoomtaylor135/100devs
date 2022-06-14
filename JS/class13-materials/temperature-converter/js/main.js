//Write your pseduo code first! 

/*
    Steps:
        1. Read in temp from user (either from c or f reader)
        2. Calculate other temp
        3. Display converted temp to use

        * Maybe have the option to choose c->f or f->c

*/

document.querySelector("#convert").addEventListener("click", calculateTemp);

function calculateTemp(){
    let temp = document.querySelector("#celcius").value;
    temp = (temp * 9/5)+32;
    document.querySelector("#displayHere").innerHTML = `${temp}`;
}