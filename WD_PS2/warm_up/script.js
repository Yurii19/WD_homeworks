window.onload = init;

function init() {
	var addition = document.getElementById('addition');
	addition.onclick = sum;

	var convert_time = document.getElementById('convert_time');
	convert_time.onclick = timeConverter;

	var space_of_time = document.getElementById('time_space');
	space_of_time.onclick = timeSpace

	var deckButton = document.getElementById('chess_deck');
	deckButton.onclick = paintDeck;
	var resetChess = document.getElementById('deck_reset');
	resetChess.onclick = removeDeck;

	var links = document.getElementById('link_area');
	links.onblur = linkFilter;

	var mark = document.getElementById('marker');
	mark.onclick = markText;
}

function markText() {
	var text = document.calculate6.marker_area.value;
	var reg = document.calculate6.reg_exp.value;
	var regExp = new RegExp(reg, 'g');
	var matchContainer = text.match(regExp);
	// var uniqueMatchContainer = [... new Set(matchContainer)];
	var uniqueMatchContainer = Array.from(new Set(matchContainer));
		for (var i = 0; i < uniqueMatchContainer.length; i++) {
			text = text.replace(new RegExp(uniqueMatchContainer[i], 'g'), "<mark>" + uniqueMatchContainer[i] + "</mark>")
		}
		document.getElementById('marker-messege').innerHTML = text;
	}

	function linkFilter() {
		document.getElementById('links-messege').innerHTML = 'List of address(es) : ' + '<br>';
		var links = document.calculate5.link_area.value;
		var arrayOfLinks = links.split(/,/);
		var urlsContainer = [];
		var ipsContainer = [];
		var regNumber = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
		var regText = /^https?:\/\/\w+\.\S+/;
		var regText2 = /^www\.\w+\.\S+/;
		var regUrlPrefix = /^https?:\/\//;
		for (var i = 0; i < arrayOfLinks.length; i++) {
			if (regText.test(arrayOfLinks[i])) {
				var temp = arrayOfLinks[i].replace(regUrlPrefix, '');
				urlsContainer.push(temp);
			}
			if (regNumber.test(arrayOfLinks[i])) {
				var ip = arrayOfLinks[i].split(/\./);
				if (parseInt(ip[0]) < 256 & parseInt(ip[1]) < 256 & parseInt(ip[2]) < 256 & parseInt(ip[3]) < 256) {
					ipsContainer.push(arrayOfLinks[i]);
				}
			}
			if (regText2.test(arrayOfLinks[i])){
					urlsContainer.push(arrayOfLinks[i]);
			}
		}
		urlsContainer.sort();

		for (var i = 0; i < ipsContainer.length; i++) {
			var link_parent = document.getElementById('links-messege');
			var link_child = document.createElement('a');
			link_parent.appendChild(link_child);
			link_child.target = 'blank';
			link_child.href = "";
			link_child.innerHTML = ipsContainer[i] +'<br>';
		}
		for (var i = 0; i < urlsContainer.length; i++) {
			var link_parent = document.getElementById('links-messege');
			var link_child = document.createElement('a');
			link_parent.appendChild(link_child);
			link_child.target = 'blank';
			link_child.href = "";
			link_child.innerHTML = urlsContainer[i] + '<br>';
		}
	}

	function removeDeck() {
		var blank = document.getElementById('blank');
		blank.innerHTML = '';
	}

	function paintDeck() {
		removeDeck();
		var size = document.calculate4.fnum.value;
		var regexp = /\dx\d/;
		if (!regexp.test(size)) {
			document.getElementById('paint-messege').innerHTML = 'Wrong format';
		} else {
			var height = parseInt(size.split('x')[0]);
			var width = parseInt(size.split('x')[1]);
			document.getElementById('paint-messege').innerHTML = 'Size is : ' + 'height - ' + height + ',width - ' + width;
			var blank = document.getElementById('blank');

			for (var i = 0; i < width; i++) {
				var row = document.createElement('div');
				row.className = 'deckrow';
				blank.appendChild(row);
				for (var j = 0; j < height; j++) {
					if ((i + j) % 2 == 0) {
						var cell = document.createElement('div');
						cell.className = 'cell-dark';
						row.appendChild(cell);
					} else {
						var cell = document.createElement('div');
						cell.className = 'cell-light';
						row.appendChild(cell);
					}
				}
			}
		}
	}

	function timeSpace() {
		var num1 = document.calculate3.fnum.value;
		var num2 = document.calculate3.snum.value;
		var date_one = new Date(num1);
		var date_two = new Date(num2);
		var dif = Math.abs(date_one.getTime() - date_two.getTime());
		var seconds = dif/1000;
		var space = new Date(dif);
		var y = Math.floor(seconds/31556926);
		var temp = seconds	%	31556926;
		var m = Math.floor(temp/2592000);
		var temp = temp % 2592000;
		var d = Math.floor(temp/86400);
		var temp = temp % 86400;
		var h = Math.floor(temp/3600);
		var temp = temp % 3600;
		var m = Math.floor(temp/60);
		var s = temp % 60;
		var report = y + " year(s)," + m + " month(s)," + d + " day(s), " + h + " hour(s)," + m + " minute(s)," + s + " seconds";
		document.getElementById('ts-messege').innerHTML = 'Result is : ' + report;
	}

	function sum() {
		var num_one = document.calculate.fnum.value;
		var num_two = document.calculate.snum.value;
		var input_mold = /^-?\d{1,2}$/;
		if (!input_mold.test(num_one) || !input_mold.test(num_two)) {
			document.getElementById('sum-messege').innerHTML = 'Input correct value(s)';
			return;
		} else {
			num1 = parseInt(num_one);
			num2 = parseInt(num_two);
		}
		if (num1 > num2) {
			var res = 0;
			var reg = /\d*[237]$/;
			for (var i = num2; i < num1; i++) {
				if (reg.test(i)) {
					res += i;
				}
			}
			document.getElementById('sum-messege').innerHTML = 'Result is : ' + res;
		} else if (num1 < num2) {
			var res = 0;
			var reg = /\d*[237]$/;
			for (var i = num1; i < num2; i++) {
				if (reg.test(i)) {
					res += i;
				}
			}
			document.getElementById('sum-messege').innerHTML = 'Result is : ' + res;
		}
	}

	function timeConverter() {
		var seconds = document.calculate2.fnum.value;
		var hours = document.calculate2.snum.value;
		var report = "Input a value";
		var prehrs = "";
		var premin = "";
		var presec = "";
		var reg_hrs = /^\d{2}:\d{2}:\d{2}$/;
		var reg_sec = /^\d+$/;
		if (!reg_sec.test(seconds)&!reg_hrs.test(hours) ){
			report = 'Input correct value';
		}

		if (reg_sec.test(seconds) & hours == "") {
			seconds = seconds % (3600*24);
			var hrs = Math.floor(seconds / 3600);
			var min = Math.floor((seconds % 3600) / 60);
			var sec = seconds % 60;
			if (hrs < 10) {
				prehrs = "0";
			}
			if (min < 10) {
				premin = "0";
			}
			if (sec < 10) {
				presec = "0";
			}
			report = 'Result is : ' + prehrs + hrs + ':' + premin + min + ':' + presec + sec;
		}

		if (reg_hrs.test(hours) & seconds == "") {
			var fulltime = hours.split(':');
			var res = 0;
			res += parseInt(fulltime[0]) * 3600 + parseInt(fulltime[1]) * 60 + parseInt(fulltime[2]);
			report = 'Result is : ' + res;
		}
		document.getElementById('tc-messege').innerHTML = report;
	}

	function reset() {
		window.location.reload();
	}
