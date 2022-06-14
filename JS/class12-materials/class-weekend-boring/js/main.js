document.querySelector("#check").addEventListener('click', check);


function check(){
  const day = document.querySelector("#day").value;
  const output = document.querySelector("#placeToSee");

  // Conditionals
  if (day.toLowerCase() === "tuesday" || day.toLowerCase() === "thursday"){
    output.innerHTML = "CLASS!!!";
  } else if (day.toLowerCase() === "saturday" || day.toLowerCase() === "sunday"){
    output.innerHTML = "WEEKEND!!";
  } else {
    output.innerHTML = "boring....";
  }
  
}







































// document.querySelector('#check').addEventListener('click', check)

// function check() {

//   const day = document.querySelector('#day').value

//   //Conditionals go here
//   if (day.toLowerCase() === "tuesday" || day.toLowerCase() === "thursday"){
//     alert("CLASSSS!!!");
//   } else if (day.toLowerCase() === "saturday" || day.toLowerCase() === "sunday"){
//     alert("WEEKENDDD!!!");
//   } else {
//     alert("boring...");
//   }

// }
