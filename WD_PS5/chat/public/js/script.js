

$(document).ready(function() {   

	const toFreshMessage = function() {
		$('#messeges-container').scrollTop(9999);
	}

	renderLastMessage();

	function renderLastMessage() {
		$('#messeges-container').load('/chat/app/ajaxhandler.php');
		setTimeout(toFreshMessage, 30);
	}

	function renderMessages() {
		$.ajax({
			url: '/chat/app/ajaxhandler.php',
		})
		.done(function(data) {
			if (data === '') {
				return;
			}
			$('#messeges-container').empty();
			$('#messeges-container').append(data);
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
	}

	setInterval(renderMessages, 1000);
	
	$('#submit-messege').on('click', function(event) {
		const userMessage = $('#user-messege').val();
		$('#user-messege').val('');
		$.ajax({
			url: '/chat/app/handler.php',
			type: 'POST',
			data: {'message': userMessage},
		})
		.done(function(data) {
			renderLastMessage();
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});

		event.preventDefault();
	});
});