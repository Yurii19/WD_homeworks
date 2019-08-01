
$(document).ready(function() {
	$('header').attr('id', 'anchor-top');
	const headTop = $('#anchor-top').offset();
	$("#move-up").click( function(){
		$("html,body").animate({ scrollTop: headTop.top}, 500);});
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