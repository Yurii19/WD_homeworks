
<?php 
session_start();

$filename = 'votes.json';

if (isset($_POST['vote-submit'])) {
	if (isset($_POST['applicant'])) {
		$time_passed = time() - filemtime($filename);
		$time_left = 60 - intdiv($time_passed, 60);
		if ($time_passed < 3600){
			$_SESSION['voting_report'] = '<p class="error_message">You can vote one time per hour. Time left : '.$time_left.' minute(s).</p>';
			header('Location: index.php');
			return;
		}
		addVote($_POST['applicant'], $filename);
		if (checkErrorJson()) {
			return;
		};
		header('Location: index.php');
	} else {
		header('Location: index.php');
	}
}

if (isset($_POST['result'])) {
	$json_votes = readJson($filename);
	if (checkErrorJson()) {
		return;
	};
	$table = [];
	foreach ($json_votes as $key => $value) {
		$str_temp = $key.','.$value;
		array_push($table, $str_temp);
	}
	$_SESSION['string_table'] = implode(",", $table);
	header('Location: chart.php');
}
//
function addVote($recipient, $file){
	$json_votes = readJson($file);
	$json_votes[$recipient]++;
	file_put_contents($file, json_encode($json_votes));
	$_SESSION['voting_report'] = '<p class="info_message">Your vote is counted.</p>';
	return 0;
}

function readJson($name){
	$file = file_get_contents($name);
	return json_decode($file, TRUE);
}

function checkErrorJson() {
	if ( json_last_error() > 0) {
		$res = json_last_error_msg();
		header('Location: error.php?err-mess='.$res);
		return true;
	}
	return false;
}
?>
