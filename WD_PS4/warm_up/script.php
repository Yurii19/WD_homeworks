<?php

session_start();

if (isset($_FILES) & count($_FILES) > 0){
	$target_dir = "load/".$_FILES['uploadfile']['name'];
	move_uploaded_file($_FILES['uploadfile']['tmp_name'], $target_dir);
	$mess = scandir("load/");
	$_SESSION['loader'] = true;
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

if (isset($_POST['sum_submit'])){
	$the_number = $_POST['number_to_sum'];
	$pos_number = (string)abs($the_number);
	$result = str_split($pos_number);
	$_SESSION['total'] = array_sum($result);
	header('Location: index.php'); 
}

if (isset($_POST['arr_submit'])){
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

if (isset($_POST['text_submit'])){
	$text = $_POST['text'];
	$rows_number = count(preg_split('/\n/', $text));
	$chars_numbers = iconv_strlen($text) - ($rows_number - 1) * 2;
	$spaces_number = substr_count($text, ' ');
	$_SESSION['report_text'] = array($rows_number, $chars_numbers, $spaces_number, $text);
	header('Location: index.php');
}
?>