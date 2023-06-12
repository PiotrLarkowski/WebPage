<!DOCUMENT html>
<meta lang="pl">
<head>
	<link rel="stylesheet" href="style.css">
	<script type="text/javascript" src="javascript.js"></script>
	<meta charset="utf-8">
	<title>FotoWłoszka</title>
</head>
<body>
	</br>
	</br>
	<img src="fotoWloszkaImage/logopng.png" id="logo" />
	<div id="nav">
		<a href="index.php"><input type="submit" value=" " id="StronaGlowna"></a>
		<a href="OMnie.php"><input type="submit" value=" " id="OMNIE"></a>
		<a href="Kategorie.php"><input type="submit" value=" " id="Kategorie"></a>
		<a href="galeria.php"><input type="submit" value=" " id="Galeria"></a>
		<a href="cennik.php"><input type="submit" value=" " id="Cennik"></a>
		<a href="kontakt.php"><input type="submit" value=" " id="Kontakt"></a>
	</div>
	<div id="container">
	<div id="CategoryButtons">
		<div id="FirstCategoryButton" onclick="RodzinneIPokolenioweEvent()"><div id="WhiteSquare"></div>Rodzinne i pokoleniowe</div><br />
		<div id="RodzinneIPokolenioweContent"></div>
		<div id="SecondCategoryButton" onclick="RoczkoweEvent()"><div id="WhiteSquare"></div>Roczkowe</div><br />
		<div id="RoczkoweContent"></div>
		<div id="FirstCategoryButton" onclick="BrzuszkoweEvent()"><div id="WhiteSquare"></div>Brzuszkowe</div><br />
		<div id="BrzuszkoweContent"></div>
		<div id="SecondCategoryButton" onclick="NoworodkoweEvent()"><div id="WhiteSquare"></div>Noworodkowe</div><br />
		<div id="NoworodkoweContent"></div>		
		<div id="FirstCategoryButton" onclick="SwiateczneEvent()"><div id="WhiteSquare"></div>Świąteczne</div><br />
		<div id="SwiateczneContent"></div>
		<div id="SecondCategoryButton" onclick="KomuniaEvent()"><div id="WhiteSquare"></div>Komunijne plenerowe</div><br />
		<div id="KomuniaContent"></div>
		<div id="FirstCategoryButton" onclick="ZOkazjiChrztuEvent()"><div id="WhiteSquare"></div>Z okazji Chrztu</div><br />
		<div id="ZOkazjiChrztuContent"></div>
		<div id="SecondCategoryButton" onclick="ZOkazjiUrodzinEvent()"><div id="WhiteSquare"></div>Z okazji urodzin</div><br />
		<div id="ZOkazjiUrodzinContent"></div>
		<div id="FirstCategoryButton" onclick="SesjaZdjeciowaEvent()"><div id="WhiteSquare"></div>Sesje w prezencie</div><br />
		<div id="SesjaZdjeciowaContent"></div>
		<div id="SecondCategoryButton" onclick="PakietEvent()"><div id="WhiteSquare"></div>Sesje w plenerze</div><br />
		<div id="PakietContent"></div>	
		<div id="FirstCategoryButton" onclick="InneEvent()"><div id="WhiteSquare"></div>Inne...</div><br />
		<div id="InneContent"></div>
	</div>
</doby>