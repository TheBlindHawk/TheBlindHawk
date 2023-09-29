<html>
	<head>
        <link rel="shortcut icon" type="image/x-icon" href="images/BlindHawk.png" />
		<link rel="stylesheet" href="css/global.css">
		<script src="js/global.js"></script>
	</head>
	<body>
		<div class="page" id="page">
			<div  class="content">
				<?php
				include '../includes/nav.php';
				$name=$_GET['name'];
				$servername = "localhost";
				$username = "blindhawk";
				$password = "4DRubicCube";
				$conn = new mysqli($servername, $username, $password);
				if ($conn->connect_error) {
					die("Connection failed: " . $conn->connect_error);
				} 
				$sql  = "SELECT * FROM my_blindhawk.descriptions";
				$sql .= " WHERE shortname = '".$name."'";
				$result = $conn->query($sql) or die ($conn->error);
				$row = $result->fetch_assoc();
				?>
				<div style="max-height:60%">
					<image class="main-image" src="images/posters/fate-ubw.jpg"/>
				</div>
				<p class="title" id="title red"><?php echo $row["title"];?></p>
				<p class="text" id="text"><?php echo $row["title"];?></p>
			</div>
		</div>
    </body>
</html>