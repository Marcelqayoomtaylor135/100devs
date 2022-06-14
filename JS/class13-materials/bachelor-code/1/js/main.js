/* 
PLAN:

Goal: When a user clicks on the "Final Rose" h2, the losers (claire and sharleen)
will disappear and leave nikki being the only one visible

Steps:
1. Add an eventlistener on final rose
2. on click call a hide function
3. the hide function sets the style.display to be hidden on claire and sharleen

*/


document.querySelector('#finalRose').addEventListener('click', hide);

function hide(){
	document.querySelector('#claire').style.display = 'none';
	document.querySelector('#sharleen').style.display = 'none';
}




































// document.querySelector('#finalRose').addEventListener('click', hide)

// function hide(){
// 	document.querySelector('#claire').style.display = 'none'
// 	document.querySelector('#sharleen').style.display = 'none'
// }
