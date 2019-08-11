
$(document).ready(function() {
	const headTop = $('html').offset();

	$("#move-up").click( function(){
		$("html,body").animate({ scrollTop: headTop.top}, 500);
	});

	$(document).scroll(function() {
		const displacement = $('html').scrollTop();
		if (displacement >= 50){
			$('#move-up').removeClass('hide');
		} else {
			$('#move-up').addClass('hide');
		}
	});
	const $menu = $('body>header>nav').children('span');//initialization array of buttons
	$('.butmenu').attr('id', 'anchor-about');
	const $about = $('#anchor-about').offset();
	$($menu[1]).children('a').attr('href', '#anchor-about');

	$($menu[1]).click( function(){
		$('html, body').animate({scrollTop: $about.top}, 500);
	});

	$('.lower-form').attr('id', 'anchor-contact');
	const $contact = $('#anchor-contact').offset();
	$($menu[2]).children('a').attr('href', '#anchor-contact');
	$($menu[2]).click(function() {
		$('html, body').animate({scrollTop: $contact.top}, 500);
	});
});