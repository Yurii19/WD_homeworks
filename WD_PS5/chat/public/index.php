<?php 
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>chat</title>
	<link rel="stylesheet" href="css/style.css">
	<link href="https://fonts.googleapis.com/css?family=Montserrat|Pacifico&display=swap" rel="stylesheet">
</head>
<body>
	<section class="form-container">
		
		<div class="form-wrapper">
			<h4 class="chat-name">Easy chat</h4>
			<form action="/chat/app/handler.php" method="get">
				<label for="user-name" <?php 
					if (isset($_SESSION['name-error'])) {
						echo $_SESSION['name-error'];
						unset($_SESSION['name-error']);
					}
					?>>Enter your name</label>
				<input type="text" name="name" id="user-name" class="user-input " placeholder="John Doe">
				<label for="user-password" <?php 
					if (isset($_SESSION['password-error'])) {
						echo $_SESSION['password-error'];
						unset($_SESSION['password-error']);
					}
					?>>Enter your password</label>
				<input type="password" name="password" id="user-password"  class="user-input " placeholder="******">
			
				<input type="submit"  id="submit" name="login-submit"></inut>
			</form>
		</div>
	</section>

</body>
</html>