<?php 
session_start();
require_once('functions.php');//getTime(), readJson()
require_once('config.php');


$chat_log = dirname(__FILE__,2).'/data/chatlog.json';
$img_path = dirname(__FILE__,2).DIRECTORY_SEPARATOR.'public'.DIRECTORY_SEPARATOR.'img'.DIRECTORY_SEPARATOR;
$img_path = '/chat/public/img/';
$smile1 = '<img src="'.$img_path.'smile1.png" alt="smile1">' ;
$smile2 = '<img src="'.$img_path.'smile2.png" alt="smile2">';
echo $_SESSION['user_name'];
if (isset($_POST['message']) && isset($_SESSION['user_name']) && $_POST['message'] !== '') {
	$text_messege = str_replace(':)', $smile1, $_POST['message']);
	$text_messege = str_replace(':(', $smile2, $text_messege);
	$message_time = time();
	$user_mess = '<strong> '.$_SESSION['user_name'].': </strong>'.$text_messege.'<br>';
	$row = $message_time.$user_mess;
	addMessage ($row, $chat_log);
}

function addMessage($mess, $file){
	$chat_json = readJson($file);
	array_push($chat_json, $mess );
	file_put_contents($file, json_encode($chat_json));
}
?>
