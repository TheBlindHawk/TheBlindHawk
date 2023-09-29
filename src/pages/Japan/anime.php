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
				<p class="title red" id="title">here are some anime recommendations</p>
				
				<div class="tab">
					<button class="tablinks" onclick="openList(event, 'Action')">Action</button>
					<button class="tablinks" onclick="openList(event, 'Romance')">Romance</button>
					<button class="tablinks" onclick="openList(event, 'Comedy')">Comedy</button>
					<button class="tablinks" onclick="openList(event, 'Other')">Other</button>
				</div>

				<div id="Action" class="tabcontent">
					<p class="listhead">Action Anime Reccomendations</p>
					<a class="portfolio" href="description.php?name=fate">
						 <image class="portfolio" src="images/posters/fate-ubw.jpg"/>
					</a>
					<a class="portfolio" href="description.php?name=assasination-classroom">
						<image class="portfolio" src="images/posters/assasination-classroom.jpg"/>
					</a>
					<a class="portfolio" href="description.php?name=noragami">
						<image class="portfolio" src="images/posters/noragami.jpg"/>
					</a>
					<a class="portfolio" href="description.php?name=overlord">
						<image class="portfolio" src="images/posters/overlord.jpg"/>
					</a>
					<a class="portfolio" href="description.php?name=rokka">
						<image class="portfolio" src="images/posters/rokka.jpg"/>
					</a>
					<a class="portfolio" href="description.php?name=youjo-senki">
						<image class="portfolio" src="images/posters/youjo-senki.jpg"/>
					</a>
					<a class="portfolio" href="description.php?name=terror-in-resonance">
						<image class="portfolio" src="images/posters/terror-in-resonance.jpg"/>
					</a>
					<a class="portfolio" href="description.php?name=re-creators">
						<image class="portfolio" src="images/posters/re-creators.jpg"/>
					</a>
					<a class="portfolio" href="description.php?name=made-in-abyss">
						<image class="portfolio" src="images/posters/made-in-abyss.jpg"/>
					</a>
				</div>

				<div id="Romance" class="tabcontent">
					<p class="listhead">Romance Anime Reccomendations</p>
					<a class="portfolio" href="description.php?name=fate">
						 <image class="portfolio" src="images/posters/fate-ubw.jpg"/>
					</a>
					<a class="portfolio" href="description.php?name=assasination-classroom">
						<image class="portfolio" src="images/posters/assasination-classroom.jpg"/>
					</a>
					<a class="portfolio" href="description.php?name=noragami">
						<image class="portfolio" src="images/posters/noragami.jpg"/>
					</a>
					<a class="portfolio" href="description.php?name=overlord">
						<image class="portfolio" src="images/posters/overlord.jpg"/>
					</a>
					<a class="portfolio" href="description.php?name=rokka">
						<image class="portfolio" src="images/posters/rokka.jpg"/>
					</a>
					<a class="portfolio" href="description.php?name=youjo-senki">
						<image class="portfolio" src="images/posters/youjo-senki.jpg"/>
					</a>
					<a class="portfolio" href="description.php?name=terror-in-resonance">
						<image class="portfolio" src="images/posters/terror-in-resonance.jpg"/>
					</a>
					<a class="portfolio" href="description.php?name=re-creators">
						<image class="portfolio" src="images/posters/re-creators.jpg"/>
					</a>
					<a class="portfolio" href="description.php?name=made-in-abyss">
						<image class="portfolio" src="images/posters/made-in-abyss.jpg"/>
					</a>
				</div>

				<div id="Comedy" class="tabcontent">
					<p class="listhead">Comedy Anime Reccomendations</p>
				</div>
				
				<div id="Other" class="tabcontent">
					<p class="listhead">Other Anime Reccomendations</p>
				</div>
			</div>
		</div>
	</body>
</html>