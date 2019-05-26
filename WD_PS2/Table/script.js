window.onload = init;
var sortCounter = 0;
var nameCounter = 0;

function init() {
	table_set = GOODS;
	fillTable();
	search.addEventListener('input', searchByName);
	category_sort.addEventListener('click', sortByCategory);
	name_sort.addEventListener('click', sortByName);
	category_select.addEventListener('change', sortBySelect);
}

function searchByName() {
	var word = document.getElementById('search').value;
	if (word == '') {
		table_set = GOODS;
		fillTable();
	}
	var table_row = [];
	for (var i = 0; i < GOODS.length; i++) {
		if (GOODS[i].name == word) {
			document.getElementById('table_body').innerHTML = '';
			table_row.push(GOODS[i]);
			table_set = table_row;
			fillTable();
		}
	}
}

function sortBySelect() {
	var goods_selected = [];
	document.getElementById('table_body').innerHTML = '';
	var value_selected = document.getElementById('category_select').value;
	if (value_selected == '') {
		table_set = GOODS;
		fillTable();
	} else {
		for (var i = 0; i < GOODS.length; i++) {
			for (var variable in GOODS[i]) {
				if (GOODS[i][variable] == value_selected) {
					goods_selected.push(GOODS[i]);
				}
			}
		}
		table_set = goods_selected;
		fillTable();
	}
}

function sortByName() {
	nameCounter++;
	document.getElementById('table_body').innerHTML = '';
	if (nameCounter % 2 == 0) {
		table_set.sort(function(a, b) {
			if (a.name > b.name) {
				return 1;
			}
			if (a.name < b.name) {
				return -1;
			}
			return 0;
		});
	} else {
		table_set.sort(function(a, b) {
			if (a.name > b.name) {
				return -1;
			}
			if (a.name < b.name) {
				return 1;
			}
			return 0;
		});
	}
	fillTable();
}

function sortByCategory() {
	sortCounter++;
	document.getElementById('table_body').innerHTML = '';
	if (sortCounter % 2 == 0) {
		table_set.sort(function(a, b) {
			if (a.category > b.category) {
				return 1;
			}
			if (a.category < b.category) {
				return -1;
			}
			return 0;
		});
	} else {
		table_set.sort(function(a, b) {
			if (a.category > b.category) {
				return -1;
			}
			if (a.category < b.category) {
				return 1;
			}
			return 0;
		});
	}
	fillTable();
}

function fillTable() {
	var table_parent = document.getElementById('table_body');
	var total_price = 0;
	for (var i = 0; i < table_set.length; i++) {
		var table_row = document.createElement('tr');
		table_parent.appendChild(table_row);
		var local_price = 1;
		for (var col in table_set[i]) {
			var table_cell = document.createElement('td');
			table_row.appendChild(table_cell);
			table_cell.innerHTML = table_set[i][col];
			if (col == 'price') {
				local_price *= table_set[i][col];
				table_cell.innerHTML += '$';
			}
			if (col == 'amount') {
				local_price *= table_set[i][col];
			}
		}
		total_price += local_price;
	}
	document.getElementById('total').innerHTML = total_price + '$';
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
