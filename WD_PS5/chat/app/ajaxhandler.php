<?php 
session_start();
require_once('functions.php');//getTime(), readJson()
$chat_log = dirname(__FILE__,2).'/data/chatlog.json';
$array_from_json = readJson($chat_log);
$mark = getTimeMark($array_from_json);

	$chat = getChat($array_from_json, $mark, $chat_log);
	$res  = implode('',  $chat);
	echo $res;

function getTimeMark($arr_of_messages) {
	$oneHourMark = 9999; 
	$now = time();
	for ($i = 0; $i < count($arr_of_messages); $i++) {
		$time_of_message = $arr_of_messages[$i].substr(0, 10);
		$diff = $now - (int)$time_of_message;
		if ($diff < 3600) {
			$oneHourMark = $i;
			break;
		}
	}
	return $oneHourMark;
}

function getChat($chat, $mark, $file) {
	$_SESSION['last_size'] = filesize($file);
	$res = [];
	for ($i = $mark; $i < count($chat); $i++) { 
		$value = $chat[$i];
		$messege_time_inseconds = substr($value, 0, 10);
		$messege_time_normal = date('H:i:s', $messege_time_inseconds);
		$row = substr_replace($value, '['.$messege_time_normal.']', 0, 10);
		array_push($res, $row);
	}
	return $res;
}
?>