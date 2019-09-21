<?php 

session_start();

require_once('config.php');
require_once('functions.php'); //readJson()

$preg_name = '/\w{4,}/';
$preg_pass = '/\w{4,}/';
$users = readJson($users_list);
$current_name = $_POST['name'];
$current_pass = $_POST['password'];
$respond = ['name' => false, 'pass'=> false];

if (validate_user($current_name, $preg_name)) {
	$respond['name'] = true;
}

if (validate_user($current_pass, $preg_pass)) {
	$respond['pass'] = true;
}

if (check_exist_name($current_name, $users) && !check_password($current_name, $current_pass, $users)) {
	$respond['pass'] = false;
}

if(check_exist_name($current_name, $users) && check_password($current_name, $current_pass, $users)) {
	$_SESSION['user_name'] = $current_name;
}

if ($respond['name'] && $respond['pass'] && !check_exist_name($current_name, $users) ) {
	$_SESSION['user_name'] = $current_name;
	addUser($current_name, $current_pass, $users, $users_list);
}

$json_respond = json_encode($respond);
echo $json_respond;

function addUser($name, $password, $data, $path) {
	$temp = [$name => $password];
	array_push($data, $temp);
	file_put_contents($path, json_encode($data));
}

function check_exist_name($name, $data) {
	foreach ($data as $key => $value) {
		if (array_key_exists($name, $value)) {
			return true;
		}
	}
	return false;
}

function check_password($name, $password, $data) {
	foreach ($data as $key => $value) {
		if (array_key_exists($name, $value) && $value[$name] === $password){
			return true;
		}
	}
	return false;
}

function validate_user($attr, $reg) {
	if ( preg_match($reg, $attr)) {
		return true;
	} else {
		return false;
	}
}

?>