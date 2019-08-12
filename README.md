# Dokumentation zur Live-Quizshow "Twizzy"

## Einleitung
Die interaktive Live-Quizshow "Twizzy" wurde im Rahmen meiner Bachelorarbeit des Studiengangs "Multimedia Production" an der HTW Chur konzipiert und durchgeführt. Das Projekt wurde zusammen mit meinem Kommilitonen Remo Krapf durchgeführt. Meine Hauptaufgabe dabei war das Programmieren der Website inkl. des Interaktionssystems. Dieses für die Live-Show entwickelte System taufte ich «Twizzystem».
Twizzystem soll eine möglichst einfache, intuitive Interaktion bieten, um mit einer per Streaming-Dienst übertragenen Live-Show zu interagieren. Die Nutzer/Zuschauer bleiben dabei stets anonym und können das System geräteunabhängig nutzen.

## Konzeption & Testing
In meiner Bachelorthesis untersuche ich den Stellenwert von Live-Shows in der heutigen, digitalen Medienwelt und welche Interaktionsmöglichkeiten diese bieten. Ich führte einerseits Experteninterviews wie auch eine Onlineumfrage durch. Dabei konnte ich wichtige Erkenntnisse sammeln, welche in die Planung von Twizzystem einflossen.

### Experteninterview
Um die Anforderungen an ein Interaktionssystem für eine Live-Show zu bestimmen, wurden im Rahmen der Bachelorarbeit einige Experteninterviews durchgeführt. Aus diesen Experteninterviews konnten erste Erkenntnisse gezogen werden:
* __Einfachheit__
  > "Es muss einfach sein zum Nutzen, es muss direkt nedem dem Stream sein und nicht noch auf einer externen Seite"
  <br>_Ronny Baumann - MYI Entertainment_
* __Einfluss__
  > "Nicht nur mitgehörig, es geht viel weiter: mitbestimmen"
  <br>_Dominik Stroppel - SRF, Leiter Digitales Angebot_
* __Spielerisch__
  > "Man muss irgendein spielerisches Element haben [...] dass man selbst Fragen beantworten kann"
  <br>_Reto Peritz - SRF, Bereichsleiter Show "Jugend | Familie | Unterhaltung"_

### Umfrage
Zusätzlich zu den Experteninterviews wurde eine Onine-Umfrage durchgeführt, welche von über 120 Teilnehmern ausgefüllt wurde. Die Auswertung bestätigte die Aussagen der Experten, zudem konnten noch weitere Anforderungen bestimmt werden:
* __Anonym__
  > "Anonymisiertes Interagieren. Würde niemals FB, Insta oder gar meine Nt.-Nummer dafür verwenden wollen"
  <br>_anonymer Teilnehmer/anonyme Teilnehmerin_
* __Kostenlos__
  > "kostenlos wichitg!"
  <br>_anonymer Teilnehmer/anonyme Teilnehmerin_
* __geringer Aufwand__
  > "Am besten ohne Installation einer App oder dergleichen"
  <br>_anonymer Teilnehmer/anonyme Teilnehmerin_

### Show-Konzept
Der Name Twizzy setzt sich zusammen aus «Thema», «swiss» und «Quiz» (das «y» lässt das Ganze noch etwas verspielter wirken). Es ist dementsprechend eine themenbasierte, interaktive Live-Quiz-Show. Die Show wird auf einer Website mit Interaktionsfunktionen und eingebettetem Live-Stream stattfinden. Ein Moderator leitet dabei die Zuschauer durch die Show.
Jede einzelne Folge steht unter einem Oberthema, wovon jeweils 6 Fragen aus verschiedenen Unterkategorien gestellt werden. Jeder Teilnehmer hat die Möglichkeit bei jeder dieser Fragen mit abzustimmen. Nach Beantwortung jeder Frage können die jeweiligen Sieger über die Kategorie der nächsten Frage abstimmen. Die Frage selbst kann aber dann wieder von allen Teilnehmern beantwortet werden. Nach Abschluss der 6 Fragen werden alle Teilnehmer belohnt, welche alle Fragen korrekt beantwortet haben. Ihr Belohnung beinhaltet ein Gewinnerzertifikat (Download) und die Möglichkeit, über das Oberthema der nächsten Show abzustimmen.
![](/images/konzept.png)<br>

### Wireframe
Um nicht direkt mit der erst besten Idee loszulegen, wurden diverse Entwürfe getestet. Anfänglich nur auf Papier, später mithilfe von Adobe XD. Zwei Entwürfe wurden als Wireframe umgesetzt und zu Testzwecken verbreitet. Mit Klick (bei gedrückter "CMD"- oder "Ctrl"-Taste) auf die Bilder kann das Wireframe geöffnet werden.<br>
_(Wir empfehlen allgemein die Links bei gedrückter «Cmd»- oder «Ctrl»-Taste zu öffnen)_ <br>
[![](/Images/Version1.png)](https://xd.adobe.com/view/b8be4ace-b4a9-4bc4-7075-1c4d5ef401d9-ce8f/)
[![](/images/Version2.png)](https://xd.adobe.com/view/4a28e9e7-e9f4-463b-594c-b7a642265d10-3c19/) <br>
Dank zahlreichem Feedback wurde klar, dass die zweite Version beim Nutzer besser ankommt. Kritikpunkt der ersten Version war hauptsächlich die Übersicht - durch das im Hintergrund laufende Video mit den überlappenden Bedienungselementen geht die Übersicht verloren. Version 2 wirkt allgemein übersichtlicher und aufgeräumter. <br>
Somit wurde die zweite Version, dank einiger Tipps der Testteilnehmer, noch etwas angepasst und als Vorlage für die Umsetzung genutzt.


### Aufgabenaufteilung
Nach diesen ersten, grundlegenden Arbeiten wurde eine klare Arbeitsverteilung vorgenommen. Remo Krapf kümmerte sich grösstenteils ums Marketing (Social Media, Design, Logo usw.) sowie um die Inhalte der Show (Fragenkatalog, Gewinnerzertifikat usw.). Ich legte meinen Fokus auf die Programmierung der Webseite und des Interaktionssystems. Die Aufgabenverteilung erwies sich als äusserst sinnvoll, sowohl Remo Krapf als auch ich konnten unsere Stärken jeweils in unseren Aufgaben einsetzten. Natürlich war es aber auch wichtig, sich regelmässig zu treffen und auszutauschen. Deshalb trafen wir uns wöchentlich zur gegenseitigen Unterstützung und Kontrolle.

## Entwicklung
Das Konzept war klar, nur wie kann dieses umgesetzt werden? Es war eindeutig, meine erste Aufgabe bestand im Recherchieren und Testen von diversen Technologien/Programmiersprachen. Wichtig bei der Wahl war insbesondere mein eigener Wissensstand, die vorhandenen Dokumentationen und das Wissen von Dozenten in der entsprechenden Sprache, auf welches ich zurückgreifen konnte.

### Die Suche nach den richtigen Technologien/Programmiersprachen
#### HbbTV
Zu Beginn war die Idee, das System auf dem Fernseher laufen zu lassen. Dazu bietet sich die "neue" HbbTV-Technologie an. Mit hilfe des Multi Platform Application Toolkit ([MPAT](http://mpat.eu)) wurde ein Versuch auf Basis von Wordpress gestartet. Leider fehlt aber für diese Technologie eine gute Dokumentation und ich konnte auch keine Experten finden, welche mich in diesem Bereich unterstützen könnten. Deshalb wurde entschieden, das System webbasiert zu erstellen.
#### PHP & jQuery
Die ersten Gehversuche (abgsehen von HbbTV) wurden mit reinem PHP und JavaScript (jQuery) absolviert. Spätestens bei der Implementierung von Live-Interaktionen mit allen Usern traten bei dieser Variante Probleme auf. Versuche mit [Ratchet](http://socketo.me) (WebSocket for PHP) blieben leider erfolglos.
#### NUXTjs & Headless Wordpress
Ein weiterer Versuch wurde mit [NUXTjs](https://nuxtjs.org) und Wordpress vorgenommen. Die Fragen und Antworten sollten via Wordpress eingetragen werden können. Somit soll die Planung einer neuen Show einfacher ablaufen. Dennoch wurde diese Variante verworfen, da die Variante mit reinem VUE.js schlicht einfacher funktionierte (und das headless Wordpress auch mit reinem Vue.js umgesetzt werden kann). Sicherlich war auch die Tatsache der verfügbaren Unterlagen/Dokumentaionen und Experten ausschlaggebend, welche mich bei Vue.js besser unterstützen konnten als bei NUXTjs.
#### NODE
Bei der Recherche wurde immer wieder empfohlen, mit [NODE](https://nodejs.org/en/) zu arbeiten. Auch ich versuchte mich an NODE, musste mich jedoch davon distanzieren, da das Aufwand-Nutzen-Verhältnis nicht stimmig war und meine nötigen Funktionen der Website auch mit einfacher Mitteln erreicht werden können. <br>
Einzig der WebSocket-Server läuft mit Node, was anfangs noch Probleme bereitet. Lokal auf dem Rechner lief der Node-Server von Beginn an einwandfrei, jedoch ist das Hosten eines solchen Servers nicht ganz einfach. Die Lösung für dieses Problem war [Heroku](https://www.heroku.com/), eine Cloud-Plattform welche Node.js unterstützt.
#### WebSocket-Server
Um die bidirektionale Kommunikation zwischen Client und Host zu ermöglichen, braucht es einen Websocket-Server. Dieser wurde mithilfe von Node.js erstellt und auf Heroku gehostet. Eine kleine, einfache Website (Vue.js) ermöglicht dem Host die Steuerung der Interaktionen.
#### Heroku
[Heroku](https://www.heroku.com/) ist eine Cloud-Plattform, welche mir ermöglichte, meinen WebSocket-Server (Node.js) zu hosten.

#### Vue.js
Schlussendlich entschied ich mich, das JavaScript-Webframework [Vue.js](https://vuejs.org) zu verwenden. Dies bietet alle nötigen Funktionen und bleibt dennoch übersichtlich und vergleichsweise simpel. Zudem ist die vorhandene Dokumentation von Vue.js vorbildlich und ich konnte auch auf die Hilfe einiger Experten zurückgreifen. <br>
Zudem gibt es für Vue.js auch etliche zusätzliche Libraries/Module/Frameworks, welche einfach implementiert werden können:
* [__Router__](https://router.vuejs.org) <br>
  Mit Router ist es möglich, einfach zwischen den einzelnen Views der Website zu wechseln, ohne das diese neu lädt (Single Page Application). Dies war wichtig, da Twizzystem mit einigen lokal beim User gespeicherten Variablen arbeitet, welche beim Neuladen der Seite verloren gehen würden. Mit Router ist es möglich, neue Views zu laden ohne dabei die lokalen (mit VUEX) gespeicherten Variablen zu verlieren.
* [__Vuex__](https://vuex.vuejs.org) <br>
  VUEX ermöglicht es, Variablen zu erstellen, welche von allen Komponenten (Views) der Website abgerufen werden können. Bespielsweise kann der Nutzername beim Login in einer "globalen" Variable gespeichert werden und ist somit in jeder View verfügbar.
* [__Axios__](https://axios.nuxtjs.org) <br>
  Mit Axios wird die Verbindung  mit der Datenbank gehändelt. Dank Axios können POST- und GET-Abfragen (mit oder ohne Variablen) ganz einfach an die Datenbank gesendet werden. Die Datenbank verarbeitet die Anfrage und schickt die entsprechenden Einträge zurück.
* [__SocketIO__](https://socket.io) <br>
  SocketIO ermöglicht genau eine bidirektionale Kommunikation mit dem Websocket-Server und somit eine Echtzeitkommunikation zwischen den Clients (und dem Host)
* [__Bootstrap__](https://bootstrap-vue.js.org) <br>
  Bootstrap ist ein Frontend-CSS-Framework mit dessen Hilfe ich die Gestaltung der Website vorgenommen habe.

### Verwendete Software
Für die Umsetzung und die Einrichtung einer Testumgebung wurden hauptsächlich folgende Programme verwendet:
* Atom – Text Editor für die Programmierung
* FileZilla – Software zur Dateiübertragung mittels FTP
* GitHub Desktop – Synchronisierung des Codes mit GitHub (Link zu Github)
* Terminal (npm & node) – ermöglichte unter anderem die lokale Testumgebung
* Safari, Chrome & Firefox – Test-Browser (Smartphone, Tablet & Computer)

## Aufbau von Twizzystem
Grundsätzlich besteht Twizzystem aus zwei Webseiten: eine für die Zuschauer [twizzy.ch](twizzy.ch) und eine für den Host [twizzy.herokuapp.com](twizzy.herokuapp.com).

### twizzy.ch
![](/images/home.png)<br>

Twizzy.ch ist die Webseite, auf welcher das Live-Quiz durchgeführt wird. Die Zuschauer besuchen die Seite und können sich einloggen (anonym). In der Ecke unten links wird automatisch der Live-Stream von Twitch gestartet. Alle Interaktionenmöglichkeiten werden nun automatisch durch den Quizbetreiber ausgelöst.

### twizzy.herokuapp.com
![](/images/twizzystem.png)<br>
Auf twizzy.herokuapp.com befindet sich das Herzstück des Interaktionssystems. Nach dem Einloggen (BN & PW auf USB-Stick*) ist es hier für den Quizbetreiber möglich, die Interaktionen auf der Website twizzy.ch zu steuern. Es ist möglich die Show zu starten und weiterzuleiten (mit oder ohne automatischen Timer). Zudem wird, besonders wichtig für den Moderator, die Liste aller Teilnehmer und ihre Punktzahl angezeigt. Jeder einzelne dieser Teilnehmer kann durch den Host gelöscht werden (je nach Namenswahl nötig).

### Zusammenspiel der beiden Systeme
Wie funktioniert nun das Zusammenspiel dieser beiden Webseiten. Zu Beginn kann sich jeder Zuschauer mit einem beliebigen Namen einloggen. Nach dem Login werden ihm alle Namen der eingeloggten Teilnehmer angezeigt. Der Moderator begrüsst die Teilnehmer, erklärt die Show und überbrückt die Zeit, bis die erste Frage gestartet werden kann.

![](/images/login.png)<br>

Gestartet wird das Quiz durch den Host via twizzy.herokuapp.com: Ein Klick auf den Button «Starten & Timer» startet die Show und damit die erste Frage. Automatisch startet zugleich der 20s-Timer, welcher die Frage nach Ablauf der Zeit schliesst und das Resultat bei allen Teilnehmern anzeigen lässt. Sobald der Zuschauer eine Frage ausgewählt hat, werden ihm die Stimmen aller anderen Teilnehmer angezeigt (Antwortwechsel natürlich nicht mehr möglich). Nach Ablauf der 20s wird die Frage automatisch aufgelöst und je nach Abstimmung werden den Teilnehmern unterschiedliche Meldungen (inkl. Jingle) angezeigt (Erfolg oder Misserfolg).

![](/images/interaktion.png)<br>

Damit die Kategorie-Auswahl startet, muss der Host wiederum den Startschuss geben. Auch hier, wie bei der Frage, läuft automatisch ein 20s-Timer, welcher die Auswahl nach Ablauf der Zeit wieder schliesst. Es folgen fünf weiter Fragen und Kategorie-Auswahlen nach demselben Schema. Am Ende werden alle Sieger der Show aufgelistet, welche ein Gewinnerzertifikat downloaden können, gefolgt von der Wahl des Themas der nächsten Show.

![](/images/winner.png)<br>

### Datenbank
Die für das Quiz nötigen Daten werden zentral auf einer Datenbank abgelegt. Für jeden Nutzer, welcher sich einloggt, wird ein neuer Eintrag in der user-Tabelle erstellt. Neben dem Namen werden darin auch die gegebenen Antworten und die gesammelten Punkte (correctAnswers) gesammelt.
Jede Frage (Question) gehört zu einer bestimmten Kategorie (Categorie), welche wiederum zu einem bestimmten Oberthema (Topic) gehört. Der Eintrag «correctAnswer» der Question-Tabelle hilft dabei, die korrekte Antwort zu identifizieren (answerA, B, C oder D). Die Abgegebenen Stimmen bei der Kategoriewahl und der Themenwahl werden unter categorieVotes und topicVotes gespeichert.
[Link zur Datenbankstruktur](https://app.quickdatabasediagrams.com/#/d/zdMG2u)
![](/images/datenbank.png)<br>


## Unsere erste Folge
Am 02.08.2019 um 17:00 Uhr war es soweit: die Pilotfolge von Twizzy ging über die Bühne. Remo Krapf konnte für die Moderation unseren Kommilitonen Ricardo Fariña gewinnen. Nach einem Testdurchlauf am 31.08.2019 war alles bereit für die Show. In einer Social Media Kampagne auf [Instagram](https://www.instagram.com/twizzy_show/) und [Facebook](https://www.facebook.com/twizzyquiz/) (von Remo Krapf durchgeführt) wurde Twizzy angekündigt.
Remo Krapf und ich sassen in der Regie, Riacrdo Fariña stand vor der Kamera. Die Aufgabenverteilung war klar: Remo kümmerte sich um den Live-Stream/das Video (er arbeitete mit der Streaming-Software OBS) und ich mich um das Interaktionssystem. Ricardo Fariña konnte auf zwei Bildschirmen neben der Kamera die für ihn nötigen Informationen ablesen (Fragen, Kategorien, Teilnehmer usw.).

![](/images/twizzyStudio.png)<br>

Kurz vor 17:00 Uhr waren bereit über 30 Teilnehmer angemeldet. Pünktlich startete der Countdown und es hiess: «Ich heiss öi ganz herzlich willkomme zu Twizzy, öire nöie Lieblings-Live-Quiz-Show!». Während Ricardo die Leute begrüsste und die Show erklärte, kamen noch weitere Zuschauer hinzu. Beim Start der ersten Frage belief sich die Anzahl an eingeloggten Nutzern auf über 40. Ricardo leitete die Frage gekonnt ein, Remo blendete das entsprechende Video ein und ich löste die Frage bei den Zuschauern aus. Und siehe da, die Stimmen trudelten eine nach der anderen ein. Alles lief wie geplant und die Show ging ohne grössere Probleme über die Bühne. Am Ende haben es sogar drei Teilnehmer (vier inkl. mir selbst) geschafft, alle sechs Fragen richtig zu beantworten. Gemeinsam wählten sie Musik als Oberthema der nächsten Twizzy-Folge. Wir hoffen, die lässt nicht allzu lange auf sich warten…
<br><br>
Die erste Folge lässt sich auf [twizzy.ch](twizzy.ch) als Aufzeichnung nachholen.

## Learnings Entwicklung
Wieder einmal zeigte sich: Planung ist die halbe Miete. Solche grundlegenden Learnings gehören wohl zu jedem neuen Projekt und haben auch hier wieder zugeschlagen. Die Verlockung des «Einfach-mal-drauflos-Programmieren» war gross, führte jedoch nicht immer zu sinnvollen Ergebnissen. Durch eine klare Strukturierung und gut gesetzte Ziele wurde die Arbeit enorm vereinfacht und die Zeit konnte effizienter genutzt werden. Bei der Arbeit mit Programmiersprachen und Technologien, welche man nicht kennt, gibt es trotz guter Planung immer wieder kleine Hürden, welche überwunden werden müssen. Im Folgenden erläutere ich einige dieser Hürden, welche sich mir während der Entwicklung des Twizzystem in den Weg stellten.

#### Videoplayer
Für die Live-Show ist das Einbetten eines Live-Videos natürlich eine Grundvoraussetzung. Was so einfach klingt, bereitete von Beginn an immer wieder Probleme. Zu Beginn fokussierte ich mich auf Youtube Live, da diese Plattform alles nötige zu liefern schien. Gegen Ende musste auf Twitch gewechselt werden. Folgend die Probleme in zeitlicher Reihenfolge:
##### Autoplay von Videos
Das erste Problem, welches auftauchte, war die Tatsache, dass die meisten Browser die Autoplay-Funktion von Videos blockieren. Um dies zu umgehen, wird das Video auf der Startseite stummgeschalten. Dadurch wird die Autoplay-Sperre der Browser umgangen und das Video wird abgespielt (wenn auch stumm). Sobald sich der User eigeloggt hat, wird die Stummschaltung deaktiviert (URL des iframes geändert auf mute=0) und das Video läuft mit Ton.
##### Autoplay auf Smartphones/Tablets
Nun funktionierte Autoplay auf dem Notebook ohne Probleme. Nur leider nicht auf den mobilen Browsern. Dort wird Autoplay komplett blockiert, auch wenn das Video stumm geschalten ist. Der Nutzer muss dementsprechend aktiv das Video starten, damit dies wiedergegeben werden kann (inkl. Ton). Um unnötige Anzeigen und Steuerelemente auf der Twizzy Seite zu vermeiden, habe ich aber die hover-Funktion des iframes ausgeschalten. Dies hatte nun zur Folge, dass das Video nicht gestartet werden konnte. Somit musste die hover-Funktion wieder aktiviert werden, um das Abspielen des Videos auf Smartphones/Tablets zu ermöglichen. Der unschöne Nebeneffekt dieser Anpassung ist, dass auf dem Notebook beim Hovern über das Video jeweils das Youtube-Interface angezeigt wird.
##### Einbetten eines Youtube-Live-Videos
Nun lief soweit alles wie gewünscht. Getestet wurde jedoch nur mit bestehenden Youtube-Live Videos anderer Streamer oder mit eigens hochgeladenen (nicht live) Videos. Als das Live-Video getestet werden wollte, wurde ich mit der nächsten Fehlermeldung konfrontiert: «Der Besitzer des Videos hat das Einbetten dieses Videos blockiert». Okay, sicherlich kein Problem, nur eine Einstellung auf dem Kanal. Schnell war die Einstellung auch gefunden, nur leider konnte sie nicht aktiviert/erlaubt werden. Nach einigen Recherchen wurde klar: der Youtube-Kanal muss mit einem Google AdSense-Konto verknüpft sein, um das Einbetten von Live-Videos zu gestatten. Dafür wiederum muss der Kanal monetarisiert sein (fürs Schalten von Werbung zugelassen). Diese Monetarisierung hat folgende Voraussetzungen:
>Du kannst die Monetarisierung jederzeit beantragen. Um zur Überprüfung zugelassen zu werden, sind für alle Kanäle mindestens eine Wiedergabezeit von 4.000 Stunden in den vergangenen zwölf Monaten und 1.000 Abonnenten erforderlich. Diese Bedingung ermöglicht die genaue Beurteilung neuer Kanäle und hilft dabei, die YouTuber-Community zu schützen.

Somit war Youtube Live als Plattform definitiv aus dem Rennen.


#### Verbindung zur Datenbank mit Vue.js
Das Arbeiten mit Vue.js macht sehr viel Spass - sofern man die Syntax verstanden hat. Doch dank der hilfreichen und umfangreichen Dokumentation fällt die einarbeit meist ziemlich gut. Bei der Kommunikation mit der Datenbank hatte ich zuerst Probleme. Schnell war mir klar, dass ich dafür Axios einsetzen muss, jedoch gelang dies mit nicht auf Anhieb.
Dank [dieses Tutorials](https://www.techiediaries.com/vuejs-php-mysql-rest-crud-api-tutorial/) habe ich dann das System/die Syntax dann doch noch verstanden und konnte die Datenbankverbindung einrichten.
#### Live Interaktionen
Eine Website mit Live-Interaktionen zu versetzten stellte sich als anspruchsvoller heraus als zuerst gedacht. Was bei einem Live-Quiz natürlich wichtig ist, ist die Tatsache, dass alle Teilnehmer zur selben Zeit bei dem Quiz dabei sind. Dass heisst, das Quiz muss bei allen Teilnehmern zur selben Zeit gestartet werden. Und die zweite Frage muss bei allen Teilnehmern zur selben Zeit erscheinen. Und natürlich müssen alle die selbe Zeitspanne zur Verfügung haben, diese Frage auch zu beantworten. <br>
Um die zu ermöglichen, braucht es einen Admin/Host, welcher die Show starten bzw. weiterführen kann. Dass heisst, ein Host muss alle Client ansprechen und weiterleiten können. Das funktioniert mithilfe des [Websocket-Protokolls](https://de.wikipedia.org/wiki/WebSocket), einem auf TCP basierenden Netzwerkprotokolls. Dieses ermöglicht eine bidirektionale Verbindung zwischen dem Client und dem Websocket-Server. Damit kann eine von einem Client verfasste Nachricht automatisch an alle anderen Clients (zeitgleich) weitergeleitet werden. Diese Funktion machte ich mir zu nutzen, um mittels einer bestimmten Nachricht das Quiz auf allen Clients zeitgleich zu starten. Will der Host beispielsweise das Quiz starten, sendet er eine Meldung mit dem Inhalt «start» an den Websocket-Server. Der Websocket-Server sendet nun diese Nachricht an alle bei ihm angemeldeten Clients weiter. Erhält der Client nun eine Meldung mit dem Inhalt «start», löst dies bei ihm den Start des Quiz aus.<br>
Für die Realisierung eines Websocket-Servers musste mit Node.js gearbeitet werden. Dies erforderte einiges an Einarbeitung, war aber für die gewünschten Interaktionen unabdingbar. In Sachen Dokumentation liegt Websocket klar hinter dem weit verbreiteten Vue.js, was die Arbeit zu Beginn erschwerte. Nach langer Suche und dem Kombinieren etlicher Tutorials gelang es schlussendlich doch, einen Websocket-Server aufzusetzen – wenn auch vorerst nur lokal. <br>
Denn bei einem Node.js-Projekt reicht es nicht, den Code einfach auf einen Server zu laden, wie z.B. bei einem Vue.js-Projekt oder einer einfachen Website. Zum Glück wurde ich mit Heroku fündig: die Cloud-Plattform unterstützt Node.js – und der Server war endlich online!

## Learnings Umsetzung
Bei der Umsetzung der ersten Pilotfolge gab es zusätzliche Learnings, welche für eine nächste Ausgabe angegangen werden sollten.

### Streaming-Delay
Eines der Hauptprobleme war die Verzögerung des Videos (Delay). Durch das Hochladen und die Komprimierung der Streaming-Plattform verzögert sich die Ausstrahlung des Videos um ca. 5-10 Sekunden. Die Interaktion durch Twizzystem ist aber in Echtzeit (ohne Verzögerung). Eine genaue Abstimmung von Video und Frageneinblendung war schlicht nicht möglich. Während Ricardo bei uns im Studio die Frage bereits anmoderiert, musste ich noch abwarten, bis diese Anmoderation im Stream erscheint und erst dann konnte ich die Frage starten. Durch diesen Trick konnten die Moderation und das Einblenden der Frage perfekt abgestimmten werden. Doch auch nur auf meinem Rechner, auf welchem ich den Stream laufen liess. Es zeigte sich, dass jeder Zuschauer eine unterschiedliche Latenz/Videoverzögerung (je nach Internetverbindung und Endgerät) hat. Somit konnten das Video und die Frage nicht bei allen Teilnehmern synchronisiert werden.
Ein weiterer durch die Verzögerung hervorgerufener Effekt war die verspätete Ankündigung der Resultate. Sobald die Resultate angezeigt wurden, konnte Ricardo darauf eingehen. Im Stream wurde diese Reaktion aber mit 5-10 Sekunden Verspätung angezeigt. Das heisst der Zuschauer wusste vor dem Moderator das Resultat… Für die nächste Folge wäre es sicherlich sinnvoll, das automatische Anzeigen des Resultats herauszunehmen. Somit kann, wie bei der Frage, die Anzeige auf die Reaktion von Ricardo im Stream abgestimmt werden.

### Tonprobleme
Ein weiteres, kleineres Problem stellte der Ton dar. Der Ton des Streams war genau abgemischt – Musik und die Stimme des Moderators waren aufeinander eingestimmt. Was vergessen ging war der Jingle, welcher bei der Fragenauflösung abgespielt wurde. Dieser war leider um einiges lauter als das Audio des Streams. Dies ist jedoch mit einer einfachen Anpassung im Code zu lösen.

### Vollbildmodus
Einige Zuschauer meldeten auch, dass sie das Video im Vollbildmodus angeschaut haben. Als Ricardo dann sagte, man solle doch die richtige Antwort wählen, wurde ihnen nichts angezeigt. Bei der nächsten Folge muss der Vollbildmodus des Videos deaktiviert werden oder der Moderator muss die Zuschauer darauf hinweisen.

### Zu viele Stimmen
Dem aufmerksamen Teilnehmer der ersten Twizzy-Folge ist bei der Themenwahl am Ende des Quiz eine Ungereimtheit aufgefallen. Vier User haben das Quiz gewonnen und waren somit berechtigt für die Abstimmung. Musik gewann jedoch mit drei zu zwei Stimmen – ein kleiner Flüchtigkeitsfehler meinerseits. Nach der Proberunde ging vergessen, die Datenbank zurückzusetzten. Somit war bereits vor der finalen Abstimmung eine Stimme aus dem Probedurchlauf im System registriert. Bei der nächsten Ausgabe vergesse ich dies sicherlich nicht mehr.

## Fazit
Twizzy war für mich eine sehr lehreiche und intensive Erfahrung. Das Einarbeiten in neue Programmiersprachen und Technologien forderten viel Geduld und Durchhaltevermögen. Doch es hat sich gelohnt: Das Durchführen von Twizzy machte enorm viel Spass und auch das Feedback der Zuschauer fiel grösstenteils positiv aus. Dies stimmt auch mich positiv und motiviert mich, Twizzystem in Zukunft weiterzuentwickeln.
Das grösste Problem, welches angegangen werden müsste, ist das Latenzproblem. Die Interaktion und das Bild müssen besser aufeinander abgestimmt werden können. Auch das Design würde für eine weitere Folge wohl angepasst werden (laut Remo Krapf).
Alles in allem würde ich es sofort wiederholen. Und ich denke, das von uns Erarbeitete Grundgerüst ist solide und sowohl Remo wie auch ich würden uns freuen, weiter darauf aufbauen zu können.
