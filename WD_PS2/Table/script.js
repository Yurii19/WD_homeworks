window.onload = init;
let sortFlag = false;

function init() {
	tableSet = GOODS;
	fillTable();
	search.addEventListener('input', searchByName);
	category_select.addEventListener('change', filterBySelect);
	tablehead.addEventListener('click', sortByProperty);
}

function searchByName() {
	let word = document.getElementById('search').value;
	let tableRow = [];
	for (let i = 0; i < tableSet.length; i++) {

		if (tableSet[i].name.toLowerCase() === word.toLowerCase()) {
			document.getElementById('table_body').innerHTML = '';
			tableRow.push(tableSet[i]);
			tableSet = tableRow;
			fillTable();
		} else {
			document.getElementById('table_body').innerHTML = '';
		}
	}
	if (word === '') {
		filterBySelect();
		fillTable();
	}
}

function filterBySelect() {
	let goodsSelected = [];
	document.getElementById('table_body').innerHTML = '';
	const valueSelected = document.getElementById('category_select').value;
	if (valueSelected === '') {
		tableSet = GOODS;
		fillTable();
	} else {
		for (let i = 0; i < GOODS.length; i++) {
			for (let variable in GOODS[i]) {
				if (GOODS[i][variable] === valueSelected) {
					goodsSelected.push(GOODS[i]);
				}
			}
		}
		tableSet = goodsSelected;
		fillTable();
	}
}

 function sortByProperty(eventSource){
 	sortFlag = sortFlag ? false : true;
 	const key = eventSource.target.id.split('_');
 	const keySort = key[0];
	
	if (sortFlag) {
		tableSet.sort(function(a, b) {
			if (a[keySort] > b[keySort]) {
				return 1;
			}
			if (a[keySort] < b[keySort]) {
				return -1;
			}
			return 0;
		});
	} else {
		tableSet.sort(function(a, b) {
			if (a[keySort] > b[keySort]) {
				return -1;
			}
			if (a[keySort] < b[keySort]) {
				return 1;
			}
			return 0;
		});
	}
	fillTable();
}

function fillTable() {
	document.getElementById('table_body').innerHTML = '';
	let tableParent = document.getElementById('table_body');
	let totalPrice = 0;
	for (let i = 0; i < tableSet.length; i++) {
		var tableRow = document.createElement('tr');
		tableParent.appendChild(tableRow);
		let localPrice = 1;
		for (let col in tableSet[i]) {
			let tableCell = document.createElement('td');
			tableRow.appendChild(tableCell);
			tableCell.innerHTML = tableSet[i][col];
			if (col === 'price') {
				localPrice *= tableSet[i][col];
				tableCell.innerHTML += '$';
			}
			if (col === 'amount') {
				localPrice *= tableSet[i][col];
			}
		}
		totalPrice += localPrice;
	}
	document.getElementById('total').innerHTML = totalPrice + '$';
}

const GOODS = [{
	category : 'furniture',
	name : 'Chair',
	amount : 1,
	price : 20
}, {
	category : 'supplies',
	name : 'Gel Pen',
	amount : 20,
	price : 2
}, {
	category : 'other',
	name : 'Trash Bin',
	amount : 1,
	price : 5
}, {
	category : 'furniture',
	name : 'Sofa',
	amount : 1,
	price : 50
}, {
	category : 'supplies',
	name : 'Notebook',
	amount : 3,
	price : 3
}, {
	category : 'other',
	name : 'Calendar 2019',
	amount : 1,
	price : 3
}];
