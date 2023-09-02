var maxNumberOfPictures = 5;
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
	
	for (let i = 0; ; i++) {
	randomFirstNumber = Math.floor(Math.random()*maxNumberOfPictures)+1;
		if(previousPicture1 != randomFirstNumber){
			break;
		}
	}
	for (let i = 0; ; i++) {
	randomSecondNumber = Math.floor(Math.random()*maxNumberOfPictures)+6;
		if(previousPicture2 != randomSecondNumber){
			break;
		}
	}
	for (let i = 0; ; i++) {
	randomThirdNumber = Math.floor(Math.random()*maxNumberOfPictures)+11;
		if(previousPicture3 != randomThirdNumber){
			break;
		}
	}
	
	var previousPicture1 = randomFirstNumber;
	var previousPicture2 = randomSecondNumber;
	var previousPicture3 = randomThirdNumber;
	
	var file1 = "<img src=\"fotoWloszkaImage/kategorie/main/png/" + randomFirstNumber + ".png\" />"
	var file2 = "<img src=\"fotoWloszkaImage/kategorie/main/png/" + randomSecondNumber + ".png\" />"
	var file3 = "<img src=\"fotoWloszkaImage/kategorie/main/png/" + randomThirdNumber + ".png\" />"
	
	document.getElementById("picture").innerHTML = 
	file1;
	document.getElementById("picture2").innerHTML = 
	file2;
	document.getElementById("picture3").innerHTML = 
	file3;

	setTimeout("countdown()",7000);
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
		"Ta sesja to przede wszystkim wspólne spędzone chwile.</br>"+
		"To fotografie, które pokażą to, co nienamacalne - uczucia, które was łączą, emocje, miłość i bliskość...</br>"+
		"To cudowna pamiątka, na której na chwile zatrzymamy czas żeby potem zawsze móc wrócić do tych momentów</br>"+
		"<div id='ImagesRodzinneIPokoleniowe'>"+
		"<div id='FirstImageRodzinneIPokoleniowe'></div>"+
		"<div id='SecondImageRodzinneIPokoleniowe'></div>"+
		"<div id='ThirdImageRodzinneIPokoleniowe'></div></div></br>"+
		"<div id='ContentRodzinneIPokolenioweUnderPhoto'><div id='FirstContentUnderPhoto'>Pakiet MINI </br>CENA 200zł</br>-5 zdjęć w wersji elektronicznej</br>-jedno zjędie A4</br>-ok. 30 minut sesji</div>"+
		"<div id='SecondContentUnderPhoto'>Pakiet STANDARD </br> CENA 350zł</br>- 10 zdjęć w wersji elektronicznej </br> - 5 zdjęć A4 </br>-5 zdjęć A5</br>- ok. 30 minut sesji </div>"+
		"<div id='ThirdContentUnderPhoto'>Pakiet FULL</br>CENA 500zł</br>-25 zdjęć w wersji elektronicznej </br>-5 zdjęć A4</br>-5 zdjęć A5</br>-10 zdjęć 10x15</br>-ok. 45 minut sesji</div></div>"+
		"Dodatkowe zdjęcie 15zł za sztukę</br></br>"+
		"<div id='CzytajDalej' onclick='CzytajDalejEvent()'><b>Czytaj dalej... </b></br></div>"+
		"<div id='CzytajDalejCD'></div></br>"
		window.scrollTo(0, 0);
	}	
}
function CzytajDalejEvent(){
	document.getElementById("CzytajDalejCD").innerHTML = 
	"<p><span>&emsp; Podczas rozmowy omówimy wszystkie szczegóły</br></br>"+
	"<b>Jak przygotować się do sesji?</b></br></br>"+ 
	"Ważną kwestią jest ubiór.</br>"+
	"Jeżeli sesje wykonujemy w studio proponuje stonowane kolory jak biały, kremowy czy beż</br>"+ 
	"Nie nażucam Wam konkretnego stylu. Ważna jest jednak spójność</br>"+
	"Jeżeli sesja odbywa się w plenerze, warto ubrać się w podobnym stylu</br>"+  
	"Wszystko zależy też od pory roku i pogody na dworze</br></br>"+
	"<u><a href='kontakt.php'>ZAPRASZAM DO KONTAKTU</u></a></br></p></span>"
}
function RoczkoweEvent(){
	if(category2Open)
	{
		category2Open = false;
		document.getElementById("RoczkoweContent").innerHTML = "";
	}else{
		category2Open = true;
		document.getElementById("RoczkoweContent").innerHTML = 
		"<p><span>&emsp; Pierwsze urodziny dziecka to wyjątkowy i pełen emocji dzień, który wymaga odpowiedniej oprawy.</br>"+
		"Zdjęcia z tej okazji, to wspaniała pamiątka dla dziecka i rodziców, z tych pierwszych i najważniejszych urodzin."+ 
		" Sesja roczkowa to też zawsze duże wyzwanie dla fotografa, gdyż dzieci w tym wieku nie potrafią usiedzieć w jednym miejscu. Są pełne energii, spontaniczne i nieprzewidywalne. </p></span>"+
		"<div id='ImagesRoczkowe'>"+
		"<div id='FirstImageRoczkowe'></div>"+
		"<div id='SecondImageRoczkowe'></div>"+
		"<div id='ThirdImageRoczkowe'></div>"+
		"</div></br>"+
		"<div id='ContentRoczkoweUnderPhoto'>Pakiet MINI </br>CENA 200zł</br>-5 zdjęć w wersji elektronicznej</br>-jedno zjędie A4</br>-ok. 30 minut sesji</div>"+
		"<u><a href='kontakt.php'>ZAPRASZAM DO KONTAKTU</u></a></br>"
		window.scrollTo(0, 0);
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
		"Sesja ciążowa beszie pamiątka, która ma na celu zatrzymanie czasu w tym cudownym momencie, która pokaże Waszą bliskość do tej maleńkiej kruszynki, która zaraz przyjdzie na świat"+
		"<div id='ImagesBrzuszkowe'>"+
		"<div id='FirstImageBrzuszkowe'></div>"+
		"<div id='SecondImageBrzuszkowe'></div>"+
		"<div id='ThirdImageBrzuszkowe'></div></div></p>"
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
		"<p><span>&emsp;SESJE NOWORODKOWE LIFESTYLE, to szczególny rodzaj sesji. Ja preferuję naturalne kadry, gdzie widać Waszą miłość, bliskość i szczęście. Najpiękniejsze zdjęcia zawsze wychodzą w ramionach rodziców, w naturalnym świetle, gdzie jest ciepło, przytulnie i bezpiecznie. Mogę wykonać taką sesję u mnie w domowym studio, jednak uważam, że u Was w domu będzie ona przebiegać spokojniej. Dlaczego? Są to Wasze cztery ściany, gdzie pełno jest detali i drobiazgów oddających Wasz charakter, styl i indywidualizm. W dodatku jest to przestrzeń, którą pociecha już zna, i w której czuje się bezpiecznie, a to jest bardzo ważne! Dołożę wszelkich starań abyście się czuli komfortowo</p>"+
		"<div id='ImagesNoworodkowe'>"+
		"<div id='FirstImageNoworodkowe'></div>"+
		"<div id='SecondImageNoworodkowe'></div>"+
		"<div id='ThirdImageNoworodkowe'></div></div>"
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
		"Pełne uroku dziecięce lub rodzinne ujęcia, wypełnione magią scenki, gdzie czuć już zapach pierniczków..., mnóstwo zabawy oraz kadry pełne uścisków... Poczujmy magię świat nieco wcześniej.</p><br />"+
		"<div id='ImagesSwiateczne'>"+
		"<div id='FirstImageSwiateczne'></div>"+
		"<div id='SecondImageSwiateczne'></div>"+
		"<div id='ThirdImageSwiateczne'></div></div>"
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
		"Sesja zdjęciowa z okazji tego pięknego dnia to wspaniała pamiątka, która zostanie w pamięci dziecka na długie lata.</p>"+
		"<div id='ImagesKomunia'>"+
		"<div id='FirstImageKomunia'></div>"+
		"<div id='SecondImageKomunia'></div>"+
		"<div id='ThirdImageKomunia'></div></div>"
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
		"Pakiet można rozszerzyć do kilku zdjęć podczas ceremonii w kościele oraz kilku zdjęć z przyjęcia. Wszystko zależy od Was. Zapraszam do kontaktu.</p>"+
		"<div id='ImagesZOkazjiChrztu'>"+
		"<div id='FirstImageZOkazjiChrztu'></div>"+
		"<div id='SecondImageZOkazjiChrztu'></div>"+
		"<div id='ThirdImageZOkazjiChrztu'></div></div>"
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
		"● Zaproszenie naleY odebrać osobiście w umówionym wcześniej miejscu lub mogę je wysłać pocztą.</p>"+
		"<div id='ImagesSesjaZdjeciowa'>"+
		"<div id='FirstImageSesjaZdjeciowa'></div>"+
		"<div id='SecondImageSesjaZdjeciowa'></div>"+
		"<div id='ThirdImageSesjaZdjeciowa'></div></div>"
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
		"<div id='ImagesBrzuszekMaluszek'>"+
		"<div id='FirstImageBrzuszekMaluszek'></div>"+
		"<div id='SecondImageBrzuszekMaluszek'></div>"+
		"<div id='ThirdImageBrzuszekMaluszek'></div></div>"+
		"<p><b>\"PAKIET „BĘDĘ MAMĄ” </b><br />"+
		"Jest to połączenie trzech sesji:<br />"+
		"- sesji kobiecej (początek ciąży, gdzie jeszcze nie widać brzuszka)<br />"+
		"- sesji brzuszkowej (w okresie między 6 a 8 miesiącem, kiedy brzuszek jest mocno widoczny)<br />"+
		"- sesji noworodkowej lifestyle (do 21 dnia życia)<br />"+
		"W sesji tej chcę pokazać, jak zmienia się kobieta i jej ciało, jakie emocje jej towarzyszą w ciągu tych kilkunastu miesięcy. <br />"+
		"Świetną dodatkową opcją tego pakietu jest zrobienie takich samych zdjęć w danym okresie, czyli „przed i po”. Przyszła mama ma możliwość otrzymania zdjęć, które będą wykonane w podobnej stylistyce i będą ze sobą współgrały.<br />"+
		"<div id='ImagesBedeMama'>"+
		"<div id='FirstImageBedeMama'></div>"+
		"<div id='SecondImageBedeMama'></div>"+
		"<div id='ThirdImageBedeMama'></div></div>"+
		"Dodatkowo w pakiecie oczywiście taniej 😉</p>"
		window.scrollTo(0, 1000);
	}
}
function ZOkazjiEvent(){
	if(category11Open)
	{
		document.getElementById("ZOkazjiContent").innerHTML = "";
		category11Open = false;
	}else{
		category11Open = true;
		document.getElementById("ZOkazjiContent").innerHTML = 
		"<div id='FirstInnerCategoryButton' onclick='DniaDzieckaEvent()'><div id='WhiteSquare'></div>Dnia dziecka</div><br />"+
		"<div id='DniaDzieckaContent'></div>"+
		"<div id='SecondInnerCategoryButton' onclick='DniaMamyEvent()'><div id='WhiteSquare'></div>Dnia Mamy</div><br />"+
		"<div id='DniaMamyContent'></div>"+
		"<div id='FirstInnerCategoryButton' onclick='UrodzinEvent()'><div id='WhiteSquare'></div>Urodzin</div><br />"+
		"<div id='UrodzinContent'></div>"
		window.scrollTo(0, 1000);
	}
}
function DniaDzieckaEvent(){
	if(category11Open)
	{
		document.getElementById("DniaDzieckaContent").innerHTML = "";
		category11Open = false;
	}else{
		category11Open = true;
		document.getElementById("DniaDzieckaContent").innerHTML = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

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

