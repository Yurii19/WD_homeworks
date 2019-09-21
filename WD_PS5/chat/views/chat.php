<?php 
session_start();
if (!isset($_SESSION['user_name'])) {
		header('Location: /chat/public/index.php');
}
 ?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>chat</title>
	<link rel="stylesheet" href="/chat/public/css/style.css">
	<link href="https://fonts.googleapis.com/css?family=Montserrat|Pacifico&display=swap" rel="stylesheet">
</head>
<body>
	<div class="top_line"></div>
	<section class="form-container">
		<div class="chat-wrapper">
			<h4 class="chat-name">Easy chat</h4>
			<form action="" method="post" class="chat-form">
				<div class="screen" id="messeges-container"></div>
				<div class="user-control">
					<input type="text" id="user-messege" name="user_message" class="user-input" autocomplete="off">
					<input type="submit"  id="submit-messege" name="send-message" value="Send"></inut>
				</div>
			</form>
		</div>
	</section>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="/chat/public/js/script.js"></script>
	<script src="/chat/public/js/draw.js"></script>
</body>
</html>