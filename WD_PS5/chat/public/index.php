
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>chat</title>
	<link rel="stylesheet" href="css/style.css">
	<link href="https://fonts.googleapis.com/css?family=Montserrat|Pacifico&display=swap" rel="stylesheet">
</head>
<body>
	<div class="top_line"></div>
	<section class="form-container">
		
		<div class="form-wrapper">
			<h4 class="chat-name">Easy chat</h4>
			<form action=""  class="chat-form">
				<label for="user-name" id="name-field">Enter your name</label>
				<input type="text" name="name" id="user-name" class="user-input " placeholder="John Doe">
				<label for="user-password" id="pass-field">Enter your password</label>
				<input type="password" name="password" id="user-password"  class="user-input " placeholder="******">
				<input type="button"  id="submit" name="login-submit" value="Submit" ></inut>
				<div id="shade"></div>
			</form>
		</div>
	</section>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="/chat/public/js/login.js"></script>
	<script src="/chat/public/js/draw.js"></script>
</body>
</html>