window.onload = init;

function init(){
	document.getElementById('bulletin').addEventListener('click', vote);
}

function vote(event){
	const targetElement = event.target;

	if (targetElement.parentElement.className === 'button-container'){
		const oldTarget = document.querySelector('.checked');
		if (typeof oldTarget !=="undefined" & oldTarget != null){
			oldTarget.classList.remove('checked');
		}
		targetElement.parentElement.classList.add('checked');
	}

	if (targetElement.className === 'button-container'){

		const oldTarget = document.querySelector('.checked');
		if (typeof oldTarget !=="undefined" & oldTarget != null){
			oldTarget.classList.remove('checked');
		}
		targetElement.classList.add('checked');

		const branches = targetElement.children;
		branches[0].click(); 
	}

	
}