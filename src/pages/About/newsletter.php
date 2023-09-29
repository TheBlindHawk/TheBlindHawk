<html>
	<head>
        <link rel="shortcut icon" type="image/x-icon" href="images/BlindHawk.png" />
		<link rel="stylesheet" href="css/global.css">
		<script src="js/global.js"></script>
	</head>
	<body>
		
		@include('includes.nav')
		
		<div class="page" id="page">
			<div  class="content">
				<p class="title red" id="title">Sign in to my newsletter</p>
				<form action="../action_page.php">
					<div class="center">
						<input type="text" class="mail" name="firstname" placeholder="your-mail">
						<input type="submit" class="submit" value="Submit">
					</div>
				</form> 
				<img src="images/BlindHawk2.png" class="center" style="width:30%;height:auto;"></img>
			</div>
		</div>
	</body>
</html>