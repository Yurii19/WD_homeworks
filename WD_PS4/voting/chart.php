<?php 
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Voting chart</title>
</head>
<body>
	<div id="piechart">
	</div>

	<form action="<?php echo $_SERVER['PHP_SELF'];?>" method="get">
		<input type="submit" value="Back to voting" name="back">
		<?php 
		if(isset($_GET['back'])){
			header('Location: index.php');
		}	
		?>
	</form>
	
	<script type="text/javascript"
	src="https://www.gstatic.com/charts/loader.js"></script>
	<script type="text/javascript"> 
		google.charts.load('current', {'packages':['corechart']}); 
		google.charts.setOnLoadCallback(drawChart); 

		const parcel = '<?php echo $_SESSION['string_table']?>';
		const arrTable = parcel.split(',');
		const tableHead = [arrTable[0], arrTable[1]];
		let tableBody = [];
		for (let i = 2; i < arrTable.length; i=i+2) {
			let temp = [arrTable[i], parseInt(arrTable[i+1])];
			tableBody.push(temp);
		}
		tableBody.unshift(tableHead);

		function drawChart() { 
			var svar = tableBody;
			var data = google.visualization.arrayToDataTable(svar); 

			var options =  
			{'title':'Electoral sympathies',  'width':550,'height':400,is3D: false}; 

			var chart =  
			new google.visualization.PieChart(document.getElementById('piechart')); 
			chart.draw(data, options); 
		}
	</script> 
</body>
</html>