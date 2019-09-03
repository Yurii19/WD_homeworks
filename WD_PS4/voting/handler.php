
<?php 
session_start();

$filename = 'votes.json';

if (!file_exists($filename)&isset($_POST['vote-submit'])&isset($_POST['applicant'])) {
	$votes = array(	'Name'=>'Numbers of votes', 'Bran'=> 0,	'Sansa'=> 0, 'Jon' => 0, 'Daenerys' => 0, 'Tyrion' => 0,);
	file_put_contents($filename, json_encode($votes));
	addVote($_POST['applicant']);
	header('Location: index.php');
	return;
}

if (isset($_POST['vote-submit'])) {
	if (isset($_POST['applicant'])) {
		$time_passed = time() - filemtime($filename);
		$time_left = 60 - intdiv($time_passed, 60);
		if ($time_passed < 3600){
			$_SESSION['voting_report'] = '<p class="error_message">You can vote one time per hour. Time left : '.$time_left.' minute(s).</p>';
			header('Location: index.php');
			return;
		}
		addVote($_POST['applicant']);
		header('Location: index.php');
	} else {
		header('Location: index.php');
	}
}

if (isset($_POST['result'])) {
	$json_votes = readJson($filename);
	$table = [];
	foreach ($json_votes as $key => $value) {
		$str_temp = $key.','.$value;
		array_push($table, $str_temp);
	}
	$_SESSION['string_table'] = implode(",", $table);
	header('Location: chart.php');
}
//
function addVote($recipient){
	$json_votes = readJson($GLOBALS["filename"]);
	$json_votes[$recipient]++;
	file_put_contents($GLOBALS["filename"], json_encode($json_votes));
	$_SESSION['voting_report'] = '<p class="info_message">Your vote is counted.</p>';
	return 0;
}

function readJson($name){
	$file = file_get_contents($name);
	return json_decode($file, TRUE);
}

?>
