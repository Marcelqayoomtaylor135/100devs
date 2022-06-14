/*
PLAN

Goal: When a user clicks on a name, there image pops up and the others disappear

Extension: make it one function instead of three

Steps:
1. Add event listeners to each name
2. On click, call the function passing the first argument as the chosen one, hide the other two

*/

const claire = document.querySelector('#claire');
const andi = document.querySelector('#andi');
const sharleen = document.querySelector('#sharleen');

contestants = document.querySelectorAll('h2');

document.querySelector('#andiNext').addEventListener('click', andiNext)

document.querySelector('#claireNext').addEventListener('click', claireNext)

document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)


// function next(contestant){
// 	Array.from(contestants).forEach(element => 
// 			if (element.innerHTML.toLowerCase() != element.id){

// 			}
// 		)
// 	contestant.classList.toggle('hidden');
// }

function andiNext(){
	claire.classList.add('hidden');
	sharleen.classList.add('hidden');
	andi.classList.toggle('hidden');
}

function claireNext(){
	andi.classList.add('hidden');
	sharleen.classList.add('hidden');
	claire.classList.toggle('hidden');
}

function sharleenNext(){
	claire.classList.add('hidden');
	andi.classList.add('hidden');
	sharleen.classList.toggle('hidden');
}


































// const andi = document.querySelector('#andi')
// const claire = document.querySelector('#claire')
// const sharleen = document.querySelector('#sharleen')

// document.querySelector('#andiNext').addEventListener('click', andiNext)
// document.querySelector('#claireNext').addEventListener('click', claireNext)
// document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

// function andiNext(){
// 	claire.classList.add("hidden")
// 	sharleen.classList.add("hidden")
// 	andi.classList.toggle("hidden")
// }

// function claireNext(){
// 	sharleen.classList.add("hidden")
// 	andi.classList.add("hidden")
// 	claire.classList.toggle('hidden')
// }

// function sharleenNext(){
// 	andi.classList.add("hidden")
// 	claire.classList.add("hidden")
// 	sharleen.classList.toggle('hidden')
// }
