/*
PLAN

Goal: Choose a corresponding photo based on the name chosen

Steps:
1. Add event listeners to each name 
2. Hide the photos that dont have the name
3. Show the photo that has that name

*/

const claire = document.getElementById('claire');
const andi = document.getElementById('andi');
const sharleen = document.getElementById('sharleen');

document.getElementById('claireNext').addEventListener('click', claireNext);
document.getElementById('andiNext').addEventListener('click', andiNext);
document.getElementById('sharleenNext').addEventListener('click', sharleenNext);

function claireNext(){
	andi.classList.add('hidden');
	sharleen.classList.add('hidden');
	claire.classList.toggle('hidden');
}

function andiNext(){
	claire.classList.add('hidden');
	sharleen.classList.add('hidden');
	andi.classList.toggle('hidden');
}

function sharleenNext(){
	andi.classList.add('hidden');
	claire.classList.add('hidden');
	sharleen.classList.toggle('hidden');
}





















// const andi = document.querySelector('#andi')
// const claire = document.querySelector('#claire')
// const sharleen = document.querySelector('#sharleen')

// document.querySelector('#andiNext').addEventListener('click', /*INSERTCODE*/)
// document.querySelector('#claireNext').addEventListener('click', /*INSERTCODE*/)
// document.querySelector('#sharleenNext').addEventListener('click', /*INSERTCODE*/)

// function andiNext(){
// 	claire.classList.add(/*INSERTCODE*/)
// 	sharleen.classList.add(/*INSERTCODE*/)
// 	andi.classList.toggle(/*INSERTCODE*/)
// }

// function claireNext(){
// 	/*INSERTCODE*/.classList.add(/*INSERTCODE*/)
// 	/*INSERTCODE*/.classList.add(/*INSERTCODE*/)
// 	/*INSERTCODE*/.classList.toggle(/*INSERTCODE*/)
// }

// function sharleenNext(){
// 	/*INSERTCODE*/.classList.add(/*INSERTCODE*/)
// 	/*INSERTCODE*/.classList.add(/*INSERTCODE*/)
// 	/*INSERTCODE*/.classList.toggle(/*INSERTCODE*/)
// }
