/*

PLAN

Goal: Click on the winner -> show the profile. Click the loser -> alert "Wrong!"

Steps:
1. Add event listeners to each name
2. Add function for conditional

*/

const contestants = document.querySelectorAll('.contestant');

Array.from(contestants).forEach(element => element.addEventListener('click', checkWinner));

function checkWinner(click){
	if (click.target.classList.contains('rose')){
		document.querySelector('#nikki').classList.toggle('hidden');
	} else {
		alert("Wrong!");
	}
}


























// const contestants = document.querySelectorAll(/*INSERTCODE*/)

// Array.from(contestants).forEach(element => element.addEventListener('click', /*INSERTCODE*/))

// function checkForRose(click){
// 	if(click.target.classList.contains(/*INSERTCODE*/)){
// 		document.querySelector('#nikki').classList.toggle(/*INSERTCODE*/)
// 	}else{
// 		alert("Wrong!");
// 	}
// }
