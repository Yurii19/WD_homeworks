
$(document).ready(function() {
	const headTop = $('html').offset();
	const buttons = ['']

	$("#move-up").click( function(){
		$("html,body").animate({ scrollTop: headTop.top}, 500);
	});

	$(document).scroll(function() {
		const displacement = $('html').scrollTop();
		if (displacement >= 50) {
			$('#move-up').removeClass('hide');
		} else {
			$('#move-up').addClass('hide');
		}
	});

	$('.menuref a').click(function(event) {
		event.preventDefault();
		const targetId = $(this).attr('href');
		const targetOffset = $(targetId).offset();
		$('html, body').animate({scrollTop: targetOffset.top}, 500);
	});

});