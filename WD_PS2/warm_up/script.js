window.onload = init;

function init() {
	const additionNumbers = document.getElementById('addition');
	additionNumbers.onclick = addition;

	const convertTime = document.getElementById('convert_time');
	convertTime.onclick = timeConverter;

	const spaceOfTime = document.getElementById('time_space');
	spaceOfTime.onclick = timeSpace

	const deckButton = document.getElementById('chess_deck');
	deckButton.onclick = paintDeck;
	const resetChess = document.getElementById('deck_reset');
	resetChess.onclick = removeDeck;

	const links = document.getElementById('link-area');
	links.onblur = linkFilter;

	const mark = document.getElementById('marker');
	mark.onclick = markText;

	const reloadPage = document.getElementById('global-reload');
	reloadPage.onclick = () => window.location.reload();
}

function markText() {
	const text = document.getElementById('marker-area').value;
	const reg = document.getElementById('reg-exp').value;
	const regExp = new RegExp(reg, 'g');
	const matchContainer = text.match(regExp);
	const uniqueMatchContainer = Array.from(new Set(matchContainer));
	if (text === ''||reg === ''){
		document.getElementById('marker-messege').innerHTML = 'Input correct value(s)';
		return;
	}
	document.getElementById('marker-messege').innerHTML = text.replace(new RegExp(reg, 'ig'), '<mark>$&</mark>');
	}

	function linkFilter() {
		document.getElementById('links-messege').innerHTML = 'List of address(es) : ' + '<br>';
		const links = document.getElementById('link-area').value;
		const arrayOfLinks = links.split(/,/);
		let urlsContainer = [];
		let ipsContainer = [];
		const regNumber = /^\s*\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
		let regUrlOne = /^\s*https?:\/\/\w+\.\S+$/;
		const regUrlTwo = /^\s*www\.\w+\.\S+$/;
		const regUrlThree = /^\s*\w+\.\w+\S+$/;
		const regUrlPrefix = /^https?:\/\//;
		for (let i = 0; i < arrayOfLinks.length; i++) {
			arrayOfLinks[i] = arrayOfLinks[i].replace(/^\s+/,'');
			if (regUrlOne.test(arrayOfLinks[i])) {
				console.log(regUrlOne);
				console.log(arrayOfLinks[i]);
				let temp = arrayOfLinks[i].replace(regUrlPrefix, '');
				urlsContainer.push(temp);
			}
			if (regNumber.test(arrayOfLinks[i])) {
				console.log('asdas');
				const ip = arrayOfLinks[i].split(/\./);
				if (parseInt(ip[0]) < 256 & parseInt(ip[1]) < 256 & parseInt(ip[2]) < 256 & parseInt(ip[3]) < 256) {
					ipsContainer.push(arrayOfLinks[i]);
				}
			}
			if (regUrlTwo.test(arrayOfLinks[i])){
				urlsContainer.push(arrayOfLinks[i]);
			}
			if (regUrlThree.test(arrayOfLinks[i])){
				urlsContainer.push(arrayOfLinks[i]);
			}
		}
		urlsContainer.sort();

		for (let i = 0; i < ipsContainer.length; i++) {
			let reportArea = document.getElementById('links-messege');
			let reportRef = document.createElement('a');
			reportArea.appendChild(reportRef);
			reportRef.target = 'blank';
			
			reportRef.innerHTML = ipsContainer[i] +'<br>';
			reportRef.href = "http://" + ipsContainer[i];
		}
		for (let i = 0; i < urlsContainer.length; i++) {
			let reportArea = document.getElementById('links-messege');
			let linkRef = document.createElement('a');
			reportArea.appendChild(linkRef);
			linkRef.target = 'blank';
			linkRef.innerHTML = urlsContainer[i] + '<br>';
			linkRef.href = "http://" + urlsContainer[i];
			
		}
	}

	function removeDeck() {
		const blank = document.getElementById('blank');
		blank.innerHTML = '';
	}

	function paintDeck() {
		removeDeck();
		const size = document.getElementById('deck-format').value;
		const regexp = /\dx\d/;
		if (!regexp.test(size)) {
			document.getElementById('paint-messege').innerHTML = 'Wrong format';
			return 0;
		} 
		const height = parseInt(size.split('x')[0]);
		const width = parseInt(size.split('x')[1]);
		document.getElementById('paint-messege').innerHTML = 'Size is : ' + 'height - ' + height + ',width - ' + width;
		let blank = document.getElementById('blank');

		for (let i = 0; i < width; i++) {
			let row = document.createElement('div');
			row.className = 'deckrow';
			blank.appendChild(row);
			for (let j = 0; j < height; j++) {
				let cell = document.createElement('div');
				cell .className = (i + j) % 2 === 0 ? 'cell-dark': 'cell-light';
				row.appendChild(cell);
			}
		}
	}

	function timeSpace() {
		let num1 = document.getElementById('f-date').value;
		let num2 = document.getElementById('s-date').value;
		if (!num1||!num2){
			document.getElementById('ts-messege').innerHTML = 'Input value(s)';
			return 0;
		}
		const dateOne = new Date(num1);
		const dateTwo = new Date(num2);
		const y = Math.abs(dateOne.getFullYear() - dateTwo.getFullYear());
		const m = Math.abs(dateOne.getMonth() - dateTwo.getMonth());
		const d = Math.abs(dateOne.getDate() - dateTwo.getDate());
		const h = Math.abs(dateOne.getHours() - dateTwo.getHours());
		const min = Math.abs(dateOne.getMinutes() - dateTwo.getMinutes());
		const s = Math.abs(dateOne.getSeconds() - dateTwo.getSeconds());
		const report = y + " year(s), " + m + " month(s), " + d + " day(s), " + h + " hour(s), " + min + " minute(s), "  + s + " seconds";
		document.getElementById('ts-messege').innerHTML = 'Result is : ' + report;
	}

	function addition() {
		const valueOne = document.getElementById('fnum').value;
		const valueTwo = document.getElementById('snum').value;
		const inputMold = /^-?\d{1,2}$/;
		if (!inputMold.test(valueOne) || !inputMold.test(valueTwo)) {
			document.getElementById('sum-messege').innerHTML = 'Input correct value(s)';
			return;
		} else {
			num1 = parseInt(valueOne);
			num2 = parseInt(valueTwo);
		}
		if (num1 > num2) {
			let res = 0;
			const reg = /\d*[237]$/;
			for (let i = num2; i < num1; i++) {
				if (reg.test(i)) {
					res += i;
				}
			}
			document.getElementById('sum-messege').innerHTML = 'Result is : ' + res;
		} else if (num1 < num2) {
			let res = 0;
			const reg = /\d*[237]$/;
			for (let i = num1; i < num2; i++) {
				if (reg.test(i)) {
					res += i;
				}
			}
			document.getElementById('sum-messege').innerHTML = 'Result is : ' + res;
		}
	}

	function timeConverter() {
		let timeValue = document.getElementById('sec').value;
		let report = "Input a value";
		const regHrs = /^\d{2}:\d{2}:\d{2}$/;
		const regSec = /^\d+$/;
		if (!regSec.test(timeValue)&!regHrs.test(timeValue) ){
			report = 'Input correct value';
			document.getElementById('tc-messege').innerHTML = report;
			return 0;
		}
		if (regSec.test(timeValue)) {
			seconds = timeValue % (3600*24);
			let hrs = Math.floor(seconds / 3600);
			let min = Math.floor((seconds % 3600) / 60);
			let sec = seconds % 60;
			if (hrs < 10) {
				hrs = '0' + hrs;
			}
			if (min < 10) {
				min = '0' + min;
			}
			if (sec < 10) {
				sec = '0' + sec;
			}
			report = 'Result is : ' + hrs + ':' + min + ':' + sec + ' fulltime';
		}

		if (regHrs.test(timeValue)) {
			const fulltime = timeValue.split(':');
			let res = 0;
			res += parseInt(fulltime[0]) * 3600 + parseInt(fulltime[1]) * 60 + parseInt(fulltime[2]);
			report = 'Result is : ' + res + ' seconds';
		}
		document.getElementById('tc-messege').innerHTML = report;
	}