<?php 
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Voting page</title>
	<link rel="stylesheet" type="text/css" href="css/style.css"/>
</head>
<body>
	<div class="voting-container">
		
	</div>
	<form id="bulletin" action="handler.php" method="POST">
		<h3>Who do you think would be the best king(qeen) of Westeros ?</h3>
		<div class="button-container">
			<input type="radio" id="bran" name="applicant" value="Bran">
			<label for="bran">Bran Stark</label>
		</div>
		<div class="button-container">
			<input type="radio" id="sansa" name="applicant" value="Sansa">
			<label for="sansa">Sansa Stark</label>
		</div>
		<div class="button-container">
			<input type="radio" id="jon" name="applicant" value="Jon">
			<label for="jon">Jon Snow</label>
		</div>
		<div class="button-container">
			<input type="radio" id="dany" name="applicant" value="Daenerys">
			<label for="dany">Daenerys Targaryen</label>
		</div>
		<div class="button-container">
			<input type="radio" id="tyrion" name="applicant" value="Tyrion">
			<label for="tyrion">Tyrion Lannister</label>
		</div>
		<div class="controls">
			<input type="submit" value="Vote" name="vote-submit" id="vote-id">
			<input type="submit" id="vote-results" value="Show results" name="result">
		</div>
		<?php 
		if (isset($_SESSION['voting_report'])){
			echo $_SESSION['voting_report'];
			unset($_SESSION['voting_report']);
		}
		?>
	</form>
	<script src="script.js"></script>
</body>
</html>