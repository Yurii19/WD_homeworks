<?php

session_start();
if ( isset($_POST['dawnload'])) {
	$dir =  'load'.DIRECTORY_SEPARATOR;
	$target_dir = $dir.$_FILES['uploadfile']['name'];
	move_uploaded_file($_FILES['uploadfile']['tmp_name'], $target_dir);
	header('Location: index.php');
}

if (isset($_POST['show'])) {
	$dir =  'load'.DIRECTORY_SEPARATOR;
	$file_list = scandir($dir);
	$img_ext = '/(png|gif|jpeg|jpg)/i';

	if (!isset($_SESSION['file_list'])) {
		$_SESSION['file_list'] = [];
	}

	for ( $i = 2; $i < count($file_list); $i++){
		$value = $file_list[$i];
		$file_size = filesize($dir.$value);
		$new_file_size = toNormalSize($file_size);
		$temp = explode('.', $value);
		$extension = end($temp);
		$preview = '';
		if (preg_match($img_ext, $extension)){
			$preview = '<img src="'.$dir.$value.'" style="height: 50px" alt="'.$value.'">';
		}

		$row = $preview.'<a href="'.$dir.$value.'" download>'.$value.'</a>'.$new_file_size;
		array_push($_SESSION['file_list'], $row);
	}
	header('Location: index.php'); 
}

if (isset($_GET['chess_submit'])) {
	$format_deck = 'The deck in format : width - '.$_GET['width'].', height - '.$_GET['height'];
	echo $format_deck;
	$result = '';
	for ($i = 0; $i < $_GET['height']; $i++) {
		$result = $result.'<div class="deckrow">';
		for ($j = 0; $j < $_GET['width']; $j++) {
			$cell_class = ($i + $j) % 2 === 0 ? 'cell-dark': 'cell-light';
			$result = $result.'<div class="'.$cell_class.'"></div>';
		}
		$result = $result.'</div>';
	}
	$_SESSION['chess_deck'] = $result;
	$_SESSION['format'] = $format_deck;
	header('Location: index.php'); 
}

if (isset($_POST['sum_submit'])) {
	$the_number = $_POST['number_to_sum'];
	$pos_number = (string)abs($the_number);
	$result = str_split($pos_number);
	$_SESSION['total'] = array_sum($result);
	header('Location: index.php'); 
}

if (isset($_POST['arr_submit'])) {
	$initial_arr = [];
	for ($i=0; $i < 100; $i++) { 
		array_push($initial_arr, rand(0, 10));
	}
	$unique_arr = array_unique($initial_arr);
	asort($unique_arr);
	$conversed_arr = array_reverse($unique_arr);
	$result_arr = array_map( function($el) {
		return $el*2;
	}, $conversed_arr);
	$_SESSION['array_report'] = implode(', ', $result_arr );
	header('Location: index.php');
}

if (isset($_POST['text_submit'])) {
	$text = $_POST['text'];
	$rows_number = count(preg_split('/\n/', $text));
	$chars_numbers = iconv_strlen($text) - ($rows_number - 1) * 2;
	$spaces_number = substr_count($text, ' ');
	$_SESSION['report_text'] = array($rows_number, $chars_numbers, $spaces_number, $text);
	header('Location: index.php');
}

function toNormalSize ($value) {
	$human_frendly_sizes = [' Byte(s)', ' KB', ' MB', ' GB'];
	$temp_size = strlen($value);
	$size_counter = 0;
	while ($temp_size > 3) {
		$value = intdiv($value, 1024);
		$temp_size = strlen($value);
		$size_counter++;
	}
	$res = '('.$value.$human_frendly_sizes[$size_counter].')';
	return $res;
}

?>