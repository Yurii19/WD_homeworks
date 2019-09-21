$(document).ready(function() { 

	$('#submit').on('click', function(event) {
		const userName = $('#user-name').val();
		const userPassword = $('#user-password').val();
		$.ajax({
			url: '/chat/app/login.php',
			type: 'POST',
			data: {
				'name': userName,
				'password': userPassword
			},
		})
		.done(function(data) {
			const respond = JSON.parse(data);
			const nameStatus = respond['name'];
			const passwordStatus = respond['pass'];
			if (!nameStatus) {
				$('#name-field').addClass('error');
			} else {
				$('#name-field').removeClass('error');
			}
			if (!passwordStatus) {
				$('#pass-field').addClass('error');
			} else {
				$('#pass-field').removeClass('error');
			}
			if (nameStatus && passwordStatus) {
				window.location.href = '/chat/views/chat.php';
			}
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