<?php 
session_start();
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
	<section class="form-container">
		
		<div class="chat-wrapper">
			<h4 class="chat-name">Easy chat</h4>
			<form action="/chat/app/handler.php" method="post">
				<div class="screen"><?php 
				if (isset($_SESSION['users_message'])){
					$temp = $_SESSION['users_message'];
					for ($i=0; $i < count($temp); $i++) { 
						echo $temp[$i].'<br>';
					}
				}
				?></div>
				<div class="user-control">
					<input type="text" id="user-messege" name="user_message" class="user-input" autocomplete="off">
					<input type="submit"  id="submit-messege" name="send-message" value="Send"></inut>

				</div>
				<input type="submit"  id="submit-messege" name="clear" value="clear"></inut>
			</form>
		</div>
	</section>

</body>
</html>