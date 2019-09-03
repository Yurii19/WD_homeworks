window.onload = init;

function init(){
	document.getElementById('bulletin').addEventListener('click', vote);
}

function vote(event){
	let targetElement = event.target;
	if (targetElement.className === 'button-container'){
		let branches = targetElement.children;
		branches[0].click(); 
	}
}