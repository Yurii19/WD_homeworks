
$(document).ready(function() {
	let opened = false;
	let menuCellWrapper = '<div class="cell"><div class="cell_pic"></div><div class="cell_name"></div></div>';
	$("body").append("<div class='wrapper'><div class='drop-head'></div></div>");
	$("body>div>div").append(menuCellWrapper).append('<p class="arrow"><i>▼</i></p>');
	$("body>div").append("<ul></ul>");
	const cellContent = $("body>div>div>div").children();
	$(cellContent[1]).append('<p>Select game</p>');
	
	
	$('i').bind('click', function(event) {
		if(opened){
			$("body>div>ul").empty();
			opened = false;
			return;
		}
		for (let i in GAMES){
			const id = 'select-option' + i;
			$("body>div>ul").append('<li id="' + id + '"></li>');
			$('#' + id).append(menuCellWrapper);
			const liUnits = $('#' + id +'>div').children('div');
			$(liUnits[1]).append('<p>'+GAMES[i].fullName+'</p>');  		
			$(liUnits[0]).css('background', 'url('+ GAMES[i].logo +') center center');
		}
		opened = true;
	}); 

	$("body").on('click','li', function(event) {
		const selected = $(this).children('div').clone();
		$("body>div>div>div").replaceWith(selected);
		$("body>div>ul").empty();
		opened = false;
	});

});

const GAMES = [
{fullName: "League of Legends",
name: "lol",
publisher:"Riot Games", 
logo: "logos/lol.jpg"
},
{fullName: "Hearthstone: Heroes of Warcraft",
name: "hearthstone", 
publisher:"Blizzard Entertainment",
logo: "logos/hearthstone.jpg"
},
{fullName: "Minecraft",
name:"minecraft", 
publisher:"Mojang",
logo: "logos/minecraft.jpg"
},
{fullName: "Counter-Strike: Global Offensive",
name:"csgo",
publisher:"Valve Corporation",
logo: "logos/csgo.jpg"
},
{fullName: "Fortnite",
name:"fort",
publisher:"Epic Games",
logo: "logos/fort.jpg"}
];
