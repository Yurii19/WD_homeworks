
$(document).ready(function() {
	const path = 'logos/';
	let opened = false;
	let menuCellWrapper = '<div class="cell"><div class="cell_pic"></div><div class="cell_name"></div></div>';
	$('.drop-container').append('<div class="wrapper"><div class="drop-head"></div></div>');
	$('.drop-head').append(menuCellWrapper).append('<p class="arrow"><i>▼</i></p>');
	$('.wrapper').append('<ul class="list-head hidden"></ul>');
	$('.cell_name').append('<p>Select game</p>');


	for (let i in GAMES) {
		const id = 'select-option' + i;
		$('.list-head').append('<li id="' + id + '"></li>');
		$('#' + id).append(menuCellWrapper);
		$('#' + id + '>.cell>.cell_name').append('<p>' + GAMES[i].fullName + '</p>');  
		$('#' + id + '>.cell>.cell_pic').css('background', 'url('+ path +  GAMES[i].logo +') center center');
	}
	
	$('.drop-head').on('click', (event) => {
		if (!opened){
			$('.list-head').removeClass('hidden');
			opened = true;
		} else {
			$('.list-head').addClass('hidden');
			opened = false;
		}
	}); 

	$("html").on('click', (event) => {
		if (event.target.nodeName === 'BODY') {
			$('.list-head').addClass('hidden');
			opened = false;
		}
	});

	$('.drop-container').on('click','li', function(event) {
		const selected = $(this).children('div').clone();
		$('.drop-head>.cell').replaceWith(selected);
		$('.list-head').addClass('hidden');
		opened = false;
	});

});

const GAMES = [
{
	fullName: "League of Legends",
	name: "lol",
	publisher:"Riot Games", 
	logo: "lol.jpg"
},
{
	fullName: "Hearthstone: Heroes of Warcraft",
	name: "hearthstone", 
	publisher:"Blizzard Entertainment",
	logo: "hearthstone.jpg"
},
{
	fullName: "Minecraft",
	name:"minecraft", 
	publisher:"Mojang",
	logo: "minecraft.jpg"
},
{
	fullName: "Counter-Strike: Global Offensive",
	name:"csgo",
	publisher:"Valve Corporation",
	logo: "csgo.jpg"
},
{
	fullName: "Fortnite",
	name:"fort",
	publisher:"Epic Games",
	logo: "fort.jpg"
}
];
