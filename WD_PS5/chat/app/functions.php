<?php 

function readJson($name){
	$file = file_get_contents($name);
	return json_decode($file, TRUE);
}
 ?>