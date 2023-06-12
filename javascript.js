var maxNumberOfPictures = 3;
var randomNumber = Math.floor(Math.random()*maxNumberOfPictures)+1;
var category1Open = false;
var category2Open = false;
var category3Open = false;
var category4Open = false;
var category5Open = false;
var category6Open = false;
var category7Open = false;
var category8Open = false;
var category9Open = false;
var category10Open = false;
var category11Open = false;
var category12Open = false;

function countdown(){
	var today = new Date();
	
	var hour = today.getHours();
	var minute = today.getMinutes();
	var second = today.getSeconds();
	
	document.getElementById("picture").innerHTML = 
	hour+":"+minute+":"+second;
	document.getElementById("picture2").innerHTML = 
	hour+":"+minute+":"+second;
	document.getElementById("picture3").innerHTML = 
	hour+":"+minute+":"+second;

	setTimeout("countdown()",1000);
}

function RodzinneIPokolenioweEvent(){
	if(category1Open)
	{
		category1Open = false;
		document.getElementById("RodzinneIPokolenioweContent").innerHTML = "";
	}else{
		category1Open = true;
				document.getElementById("RodzinneIPokolenioweContent").innerHTML = 
		"\"<b>Rodzina - tu zaczyna się życie, a miłość nigdy nie kończy \"<br /><br /></b>"+
		"Sesje rodzinne i pokoleniowe to wspólnie spędzone chwile, to fotografie, które pokażą to, co nienamacalne — uczucia, które Was łączą, emocje... <br /><br />"+
		"Otrzymacie ode mnie piękna pamiątkę w postaci profesjonalnych zdjęć rodzinnych <br /><br /></span>"+
		"Czytaj dalej... </p>"
		window.scrollTo(0, 1000);
	}	
}
function RoczkoweEvent(){
	if(category2Open)
	{
		category2Open = false;
		document.getElementById("RoczkoweContent").innerHTML = "";
	}else{
		category2Open = true;
		document.getElementById("RoczkoweContent").innerHTML = 
		"<p><span>&emsp; Pierwsze urodziny dziecka to wyjątkowy i pełen emocji dzień, który wymaga odpowiedniej oprawy."+
		"Sesja na roczek, to wspaniała pamiątka dla dziecka i rodziców, z tych pierwszych i najważniejszych urodzin ."+ 
		" Sesja roczkowa to też zawsze duże wyzwanie dla fotografa, gdyż dzieci w tym wieku nie potrafią usiedzieć w jednym miejscu. Są pełne energii, spontaniczne i nieprzewidywalne. </p></span>"
		window.scrollTo(0, 1000);
	}
}
function BrzuszkoweEvent(){
	if(category3Open)
	{
		document.getElementById("BrzuszkoweContent").innerHTML = "";
		category3Open = false;
	}else{
		category3Open = true;
		document.getElementById("BrzuszkoweContent").innerHTML = 
		"<p><span>&emsp;\"Ciąża - dziewięć miesięcy stwarzania świata\" <br />"+
		"Sesja brzuszkowa to wyjątkowa pamiątka. Pamiątka zwłaszcza dla przyszłej mamy. Tak jak ciąża jest cudownym okresem, cudownym przeżyciem, cudowna chwilą... Kiedy słyszymy pierwszy raz bicie serduszka zaraz po naszym. Kiedy widzimy maleńkie rączki na USG lub Kiedy czujemy lekkie kopnięcia - to uczucie jest niesamowite. To chwile warte zapamiętania. <br />"+
		"Sesja ciążowa beszie pamiątka, która ma na celu zatrzymanie czasu w tym cudownym momencie, która pokaże Waszą bliskość do tej maleńkiej kruszynki, która zaraz przyjdzie na świat</p>"
		window.scrollTo(0, 1000);
	}
}
function NoworodkoweEvent(){
	if(category4Open)
	{
		document.getElementById("NoworodkoweContent").innerHTML = "";
		category4Open = false;
	}else{
		category4Open = true;
		document.getElementById("NoworodkoweContent").innerHTML = 
		"<p><span>&emsp;SESJE NOWORODKOWE LIFESTYLE, to szczególny rodzaj sesji. Ja preferuję naturalne kadry, gdzie widać Waszą miłość, bliskość i szczęście. Najpiękniejsze zdjęcia zawsze wychodzą w ramionach rodziców, w naturalnym świetle, gdzie jest ciepło, przytulnie i bezpiecznie. Mogę wykonać taką sesję u mnie w domowym studio, jednak uważam, że u Was w domu będzie ona przebiegać spokojniej. Dlaczego? Są to Wasze cztery ściany, gdzie pełno jest detali i drobiazgów oddających Wasz charakter, styl i indywidualizm. W dodatku jest to przestrzeń, którą pociecha już zna, i w której czuje się bezpiecznie, a to jest bardzo ważne! Dołożę wszelkich starań abyście się czuli komfortowo</p>"
		window.scrollTo(0, 1000);
	}
}
function SwiateczneEvent(){
	if(category5Open)
	{
		document.getElementById("SwiateczneContent").innerHTML = "";
		category5Open = false;
	}else{
		category5Open = true;
		document.getElementById("SwiateczneContent").innerHTML = 
		"<p><span>&emsp;<b>Sesje wiosenne </b><br />"+
		"Wiosna to porą roku, na którą wszyscy czekamy, zwłaszcza tutaj na Podhalu, gdzie zima trwa bardzo długo, a śnieg w górach leży czasem do lipca...<br />"+
		"Wiosna jest też symbolem odrodzenia i nowego życia. To także czas Zmartwychwstania Pańskiego.<br />"+
		"Wielkanoc to dla nas jedno z najważniejszych świąt. Przygotowujemy się do niego już podczas Wielkiego Postu, ale nie zapominamy też o ozdobach czy świątecznych życzeniach. <br />"+
		"Dlaczego więc nie sesja zdjęciowa? <br />"+
		"Magiczna, specjalnie przygotowana ścianka, wielkanocne dekoracje,  wiosenny klimat i uśmiechy dzieciaków to piękne zdjęcia, które mogą nas cieszych przez cały rok. <br /><br />"+
		"<b>Sesje zimowe </b><br />"+
		"Gdy tylko za oknem pojawią się pierwszy śnieg, w głowie mamy tylko jedno - zaraz będą święta, choinka oraz prezenty.<br />"+
		"A może w prezencie sesja zdjęciowa? <br />"+
		"Sesje Bożonarodzeniowe są coraz bardziej popularne i corsz wiecej osób chciałoby mieć takie piękne, świąteczne ujęcia w swoich albumach.  <br />"+
		"Nie zabrakło ich i w mojej ofercie. <br />"+
		"Pełne uroku dziecięce lub rodzinne ujęcia, wypełnione magią scenki, gdzie czuć już zapach pierniczków..., mnóstwo zabawy oraz kadry pełne uścisków... Poczujmy magię świat nieco wcześniej.</p><br />"
		window.scrollTo(0, 1000);
	}
}
function KomuniaEvent(){
	if(category6Open)
	{
		document.getElementById("KomuniaContent").innerHTML = "";
		category6Open = false;
	}else{
		category6Open = true;
		document.getElementById("KomuniaContent").innerHTML = 
		"<p><span>&emsp;Pierwsza komunia święta to jeden z najważniejszych sakramentów świętych. Jest to wielkie przeżycie nie tylko dla dziecka, ale i dla jego rodziny. <br /> "+
		"Sesja zdjęciowa z okazji tego pięknego dnia to wspaniała pamiątka, która zostanie w pamięci dziecka na długie lata.</p>"
		window.scrollTo(0, 1000);
	}
}
function ZOkazjiChrztuEvent(){
	if(category7Open)
	{
		document.getElementById("ZOkazjiChrztuContent").innerHTML = "";
		category7Open = false;
	}else{
		category7Open = true;
		document.getElementById("ZOkazjiChrztuContent").innerHTML = 
		"<p><span>&emsp;Chrzest Święty to pierwsze wyjątkowe wydarzenie w życiu Waszego maleństwa. Warto zadbać, by zdjęcia z tego dnia były obrazami, które przyniosą wiele emocji i cudownych wspomnień nawet po latach. <br />"+
		"Proponuję minisesję w domu, podczas ubierania maleństwa, kilka zdjęć portretowych, kilka drobiazgowych (np. zdjęcia ubranka, świecy, itp.) oraz zdjęcia z najbliższymi. <br />"+
		"Pakiet można rozszerzyć do kilku zdjęć podczas ceremonii w kościele oraz kilku zdjęć z przyjęcia. Wszystko zależy od Was. Zapraszam do kontaktu.</p>"
		window.scrollTo(0, 1000);
	}
}
function ZOkazjiUrodzinContentEvent(){
	if(category8Open)
	{
		document.getElementById("ZOkazjiUrodzinContent").innerHTML = "";
		category8Open = false;
	}else{
		category8Open = true;
		document.getElementById("ZOkazjiUrodzinContent").innerHTML = 
		"<p><span>&emsp;W BUDOWIE</p>"
		window.scrollTo(0, 1000);
	}	
}
function SesjaZdjeciowaEvent(){
	if(category9Open)
	{
		document.getElementById("SesjaZdjeciowaContent").innerHTML = "";
		category9Open = false;
	}else{
		category9Open = true;
		document.getElementById("SesjaZdjeciowaContent").innerHTML = 
		"<p><span>&emsp;Sesja zdjęciowa na prezent, to coś innego, nowego, niepowtarzalnego i na pewno ucieszy każdego <br />"+
		"Z jakiej okazji możemy podarować sesje?<br />"+
		"Każda okazja jest dobra, aby zatrzymać na chwilę czas.️ Dzień Mamy czy taty, narodziny dziecka, urodziny, Komunia święta... - liczą się wspomnienia <br />"+
		"Na każdą z tych okazji posiadam ręcznie wykonane Zaproszenia.️ <br />"+
		"Koszt takiej sesji zależy od wybranego przez Was pakietu. Szczegóły ustalamy podczas rozmowy<br />"+
		"● sesje należy zrealizować w ciągu 6 miesięcy od momentu zakupu<br />"+
		"● zapłatę za sesje pobieram z góry (Zaproszenie jest w cenie takiej sesji) <br />"+
		"● Zaproszenie naleY odebrać osobiście w umówionym wcześniej miejscu lub mogę je wysłać pocztą.</p>"
		window.scrollTo(0, 1000);
	}
}
function PakietEvent(){
	if(category10Open)
	{
		document.getElementById("PakietContent").innerHTML = "";
		category10Open = false;
	}else{
		category10Open = true;
		document.getElementById("PakietContent").innerHTML = 
		"<p><b>Pakiet \"Brzuszek maluszek\"</b><br />"+
		"Jest to połączenie dwóch sesji: <br />"+
		"- sesji brzuszkowej (w okresie między 6 a 8 miesiącem, kiedy brzuszek jest mocno widoczny)<br />"+
		"- sesji noworodkowej lifestyle (do 21 dnia życia)<br />" +
		"Dzięki rezerwacji dwóch sesji, przyszła mama ma możliwość otrzymania zdjęć, które będą wykonane w podobnej stylistyce i będą ze sobą współgrały. <br />"+
		"Dodatkowo w pakiecie oczywiście taniej 😉 </p><br />"+
		"<p><b>\"PAKIET „BĘDĘ MAMĄ” </b><br />"+
		"Jest to połączenie trzech sesji:<br />"+
		"- sesji kobiecej (początek ciąży, gdzie jeszcze nie widać brzuszka)<br />"+
		"- sesji brzuszkowej (w okresie między 6 a 8 miesiącem, kiedy brzuszek jest mocno widoczny)<br />"+
		"- sesji noworodkowej lifestyle (do 21 dnia życia)<br />"+
		"W sesji tej chcę pokazać, jak zmienia się kobieta i jej ciało, jakie emocje jej towarzyszą w ciągu tych kilkunastu miesięcy. <br />"+
		"Świetną dodatkową opcją tego pakietu jest zrobienie takich samych zdjęć w danym okresie, czyli „przed i po”. Przyszła mama ma możliwość otrzymania zdjęć, które będą wykonane w podobnej stylistyce i będą ze sobą współgrały.<br />"+
		"Dodatkowo w pakiecie oczywiście taniej 😉</p>"
		window.scrollTo(0, 1000);
	}
}
function ZOkazjiUrodzinEvent(){
	if(category11Open)
	{
		document.getElementById("ZOkazjiUrodzinContent").innerHTML = "";
		category11Open = false;
	}else{
		category11Open = true;
		document.getElementById("ZOkazjiUrodzinContent").innerHTML = 
		"<p><span>&emsp;Nie tylko Roczek jest ważny! Dla dziecka każde urodziny to wyczekiwany i wyjątkowy dzień!<br />"+
		"Dlaczego nie zrobić sesji fotograficznej z tej okazji? <br />"+
		"Dzieci uwielbiają pozować i uwielbiają być w centrum uwagi  <br />"+
		"Na pewno będzie to cudowny prezent i wspaniała pamiątka na lata </span></p>"
		window.scrollTo(0, 1000);
	}
}
function InneEvent(){
	if(category12Open)
	{
		document.getElementById("InneContent").innerHTML = "";
		category12Open = false;
	}else{
		category12Open = true;
		document.getElementById("InneContent").innerHTML = "<p><span>Chętnie podejmę wyzwanie. Zapraszam do kontaktu"
		window.scrollTo(0, 1000);
	}
}

function slaidBar(){
	randomNumber = Math.floor(Math.random()*maxNumberOfPictures)+1;
	meter++;
	if (meter>3)meter=1;
	var file = "<img scr=\"photoWloszkaImage/picturesFirst/picture" + meter + ".png\" />"
	document.getElementById(picture).innerHTML = file;
	setTimeout("slaidBar()",5000);
}