<?php
session_start();
isset($_SESSION['visit_number']) ? $_SESSION['visit_number']++ : $_SESSION['visit_number'] = 1;
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Warm up</title>
	<link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
	<h1>Homework : WD_PS4 PHP, JSON. Source : <a href="https://github.com/Yurko09">github.com/Yurko09</a></h1>

	<section class="script-box">
    <h3 class="script-header">Task #1:</h3>
    <small>Count sum of numbers between -1000 and 1000</small>
    <?php
    $res = 0;
    for ($i=-1000; $i <= 1000 ; $i++) { 
      $res += $i;
    };
    echo '<p>'.'Result is : '. $res . '</p>'
    ?>
  </section>

  <section class="script-box">
    <h3 class="script-header">Task #2:</h3>
	<small>Count sum of numbers between -1000 and 1000, numbers must ended with 2,3,7 </small>
    <?php
    $res = 0;
    for ($i=-1000; $i <= 1000; $i++) { 
      if (preg_match('/^\-?\w*[2,3,7]$/', $i)) {
       $res += $i;
     }
   };
   echo '<p>'.'Result is : '. $res . '</p>'
   ?>
 </section>

 <section class="script-box">
  <h3 class="script-header">Task #3:</h3>
  <small>Here you can upload and download a files </small>
  <form action="script.php" method="post" enctype="multipart/form-data"> <!-- enctype=multipart/form-data -->
    <input type="file" name="uploadfile" >
    <input type="submit" value="Download" id="load_submit" name="dawnload">
    <input type="submit" value="Show files" name="show">
  </form>
  <?php
  if (isset($_SESSION['file_list']) && $_SESSION['show']){
  foreach ($_SESSION['file_list'] as $key => $value) {
    echo '<div class="file-box">'.$value.'</div><br>';
  }
  unset($_SESSION['file_list']);
}
 
  ?>
</section>

<section class="script-box">
  <h3 class="script-header">Task #4:</h3>
  <small>Script draw a chessboard with users parameters </small>
  <form action="script.php" method="get">
    <div class="input-wrap">
      <input type="number" class="input_area" name="width" placeholder="width">
      <label class="lab-fnum" for="fnum">Input 1st value</label>
    </div>
    <div class="input-wrap">
      <input type="number" class="input_area" name="height" placeholder="height">
      <label class="lab-snum" for="snum">Input 2nd value</label>
    </div>
    <input class="input-wrap" type="submit" name="chess_submit">
  </form>
  <?php 
  if (isset($_SESSION['format'])){
    echo '<h3>'.$_SESSION['format'].'</h3>';
  }
  
  if (isset($_SESSION['chess_deck']) & isset($_SESSION['format'])){
    echo $_SESSION['chess_deck'];
    unset($_SESSION['format']);
  }
  ?>
</section>

<section class="script-box">
  <h3 class="script-header">Task #5:</h3>
   <small>Script count the sum of digits the received number </small>
  <form action="script.php" method="post">
    <div class="input-wrap">
      <input type="number" class="input_area" name="number_to_sum">
      <label for="number_to_sum" class="lab-snum">Input a value</label>
    </div>
    <input class="input-wrap" type="submit" name="sum_submit">
  </form>
  <?php 
  if (isset($_SESSION['total']) & $_SESSION['total'] != 0){
    echo '<p> The total value of numbers : '.$_SESSION['total'].'</p>';
    $_SESSION['total'] = 0;
  }
  ?>
</section>

<section class="script-box">
  <h3 class="script-header">Task #6:</h3>
  <small>Script manipulates the array</small>
  <form action="script.php" method="post">
    <input class="input-wrap" type="submit" name="arr_submit">
  </form>
  <?php 
  if (isset($_SESSION['array_report'])){
    echo '<p> The total value of numbers : '.$_SESSION['array_report'].'</p>';
    $_SESSION['total'] = 0;
  }
  ?>
</section>

<section class="script-box">
  <h3 class="script-header">Task #7:</h3>
  <small>Script count numbers of visits the page </small>
  <?php 
  echo '<p> Session counter : '.$_SESSION['visit_number'].'</p>';
  ?>
</section>

<section class="script-box">
  <h3 class="script-header">Task #8:</h3>
  <small>Counts the number of any types characters in the text</small>
  <form action="script.php" id="task8" method="post">
    <div class="input-wrap">
      <textarea rows="5" cols="45" name="text"><?php if (isset($_SESSION['report_text'][3])) echo $_SESSION['report_text'][3] ?></textarea>
      <label for="number_to_sum" class="lab-snum">Input a value</label>
    </div>
    <input class="input-wrap" type="submit" name="text_submit">
  </form>
  <?php 
  if (isset($_SESSION['report_text'][0])) {
    echo '<p> Numbers of rows : '.$_SESSION['report_text'][0].'; number of characters : '.$_SESSION['report_text'][1].'; numbers of spaces : '.$_SESSION['report_text'][2].'</p>';
    $_SESSION['report_text'] = '';
  }
  ?>
</section>

</body>
</html>