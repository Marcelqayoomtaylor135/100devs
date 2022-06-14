/*
PLAN

Goal: On click of Final Rose, hide the losers and show the winner
Steps: 
1. Add event listener to final rose
2. on click of rose, hide others and show winner

*/

document.getElementById('finalRose').addEventListener('click', showWinner);

function showWinner(){
	alert("working");
	document.getElementById('claire').style.display = 'none';
	document.getElementById('sharleen').style.display = 'none';
	
}
