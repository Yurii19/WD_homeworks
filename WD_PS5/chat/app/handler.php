<?php 
session_start();
$s = DIRECTORY_SEPARATOR;
$users_list = 'chat'.$s.'data'.$s.'users.json';
// $chat_log = $s.'chat'.$s.'data'.$s.'chatlog.json';
$chat_log = '../chat/data/chatlog.json';

if (isset($_POST['send-message'])) {
	if (!isset($_SESSION['users_message'])) {
		
		$_SESSION['users_message'] = [];
	}
	$message_time = date("H:i:s");
	$row = '['.$message_time.']'.'<strong> '.$_SESSION['user-name'].': </strong>'.$_POST['user_message'];
	// $chat_json = readJson($chat_log);
	// if (checkErrorJson()) {
	// 		return;
	// 	}
		addMessage ($row, $chat_log);

	// array_push($chat_json, $row );

	// array_push($_SESSION['users_message'], $row);
	// header('Location: /chat/views/chat.php');
}

if (isset($_GET['login-submit'])) {
	if ( get_user($_GET['name'], 'name') & get_user($_GET['password'], 'password')){
		$users = readJson($users_list);

		//$messeges = readJson($chat_log);
		$temp->$_GET['name'] =  $_GET['password'];

		header('Location: /chat/views/chat.php');
	} else {
		header('Location: /chat/public/index.php');
	}
}

if(isset($_POST['clear'])) {
	unset($_SESSION['users_message']);
	header('Location: /chat/views/chat.php');
}

function get_user($value, $attribute){
	if ($value === '') {
		$error = $attribute.'-error';
		$_SESSION[$error] = 'class="error"';
		return false;
	} else {
		$attr = 'user-'.$attribute;
		$_SESSION[$attr] = $value;
		return true;
	}
}

function readJson($name){
	$file = file_get_contents($name);
	return json_decode($file, TRUE);
}

function addUser($recipient){
	$json_votes = readJson($GLOBALS["filename"]);
	$json_votes[$recipient]++;
	file_put_contents($GLOBALS["filename"], json_encode($json_votes));
	$_SESSION['voting_report'] = '<p class="info_message">Your vote is counted.</p>';
	return 0;
}

function checkErrorJson() {
	if ( json_last_error() > 0) {
		$mess = json_last_error_msg();
		header('Location: /chat/views/error.php?err-mess='.$mess);
		return true;
	}
	return false;
}

function addMessage($mess, $file){
	$chat_json = readJson($file);
	array_push($chat_json, $mess );
	file_put_contents($file, json_encode($chat_json));
	// $_SESSION['voting_report'] = '<p class="info_message">Your vote is counted.</p>';
	// return 0;
}

?>
