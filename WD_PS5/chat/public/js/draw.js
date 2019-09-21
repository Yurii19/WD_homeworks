jQuery(document).ready(function($) {
	const collors = ["#635960", "#8b8e59", "#eada7d", "#fffecd", "#7bc3ab"];
	const $line = $('.top_line');
	for (let i = 0; i < 10; i++) {
		$line.append('<div class="brick">');
	}

	const $bricks = $('.top_line').children();

	for (let i = 0; i < $bricks.length; i++) {
		let colorIndex = i % 5;
		color = collors[colorIndex];
		$($bricks[i]).css("background-color", color);
	}

});
