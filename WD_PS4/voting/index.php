<?php 
session_start();
$aplicants = ['Bran'=>'Stark', 'Sansa'=>'Stark', 'Jon'=>'Snow', 'Daenerys'=>'Targaryen', 'Tyrion'=>'Lannister' ];
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
		<h2 class="head">Who do you think would be the best king(qeen) of Westeros ?</h2>

		<?php 
		foreach ($aplicants as $key => $value) {
			echo '<div class="button-container"><input type="radio" id="'.$key.'" name="applicant" value="'.$key.
			'"><label for="'.$key.'">'.$key.' '.$value.'</label>
			</div>';
		}
		?>
		<div class="controls">
			<input class="control" type="submit" value="Vote" name="vote-submit" id="vote-id">
			<input class="control" type="submit" id="vote-results" value="Show results" name="result">
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