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

### Wireframe
Zuerst wurden einige Entwürfe auf Papier gezeichnet, wovon dann zwei in Adobe XD zu Testzwecken umgesetzt wurden. Mit Klick (bei gedrückter "CMD"- oder "Ctrl"-Taste) auf die Bilder kann das Wireframe geöffnet werden.<br>
_(Wir empfehlen allgemein die Links bei gedrückter «Cmd»- oder «Ctrl»-Taste zu öffnen)_ <br>
[![](/images/Version1.png)](https://xd.adobe.com/view/b8be4ace-b4a9-4bc4-7075-1c4d5ef401d9-ce8f/)
[![](/images/Version2.png)](https://xd.adobe.com/view/4a28e9e7-e9f4-463b-594c-b7a642265d10-3c19/) <br>
Dank zahlreichem Feedback wurde klar, dass die zweite Version beim Nutzer besser ankommt. Kritikpunkt der ersten Version war hauptsächlich die Übersicht - durch das im Hintergrund laufende Video mit den überlappenden Bedienungselementen geht die Übersicht verloren. Die zweite Version wirkt allgemein übersichtlicher und aufgeräumter. <br>
Somit wurde die 2.Version, dank einiger Tipps der Testteilnehmer, noch etwas angepasst und als Vorlage für die Umsetzung genutzt.

## Umsetzung

### getestete Technologien
#### HbbTV
Zu Beginn war die Idee, das System auf dem Fernseher laufen zu lassen. Dazu bietet sich die "neue" HbbTV-Technologie an. Mit hilfe des Multi Platform Application Toolkit ([MPAT](http://mpat.eu)) wurde ein Versuch auf Basis von Wordpress gestartet. Leider fehlt aber für diese Technologie eine gute Dokumentation und ich konnte auch keine Experten finden, welche mich in diesem Bereich unterstützen könnten. Deshalb wurde entschieden, das System webbasiert zu erstellen.
#### PHP & jQuery
Die ersten Gehversuche (abgsehen von HbbTV) wurden mit reinem PHP und JavaScript (jQuery) absolviert. Spätestens bei der Implementierung von Live-Interaktionen mit allen Usern traten bei dieser Variante Probleme auf. Versuche mit [Ratchet](http://socketo.me) (WebSocket for PHP) blieben leider erfolglos.
#### NUXTjs & Headless Wordpress
Ein weiterer Versuch wurde mit [NUXTjs](https://nuxtjs.org) und Wordpress vorgenommen. Die Fragen und Antworten sollten via Wordpress eingetragen werden können. Somit soll die Planung einer neuen Show einfacher ablaufen. Dennoch wurde diese Variante verworfen, da die Variante mit reinem VUE.js schlicht einfacher funktionierte (und das headless Wordpress auch mit reinem Vue.js umgesetzt werden kann). Sicherlich war auch die Tatsache der verfügbaren Unterlagen/Dokumentaionen und Experten ausschlaggebend, welche mich bei Vue.js besser unterstützen konnten als bei NUXTjs.
#### NODE
Bei der Recherche wurde immer wieder empfohlen, mit [NODE](https://nodejs.org/en/) zu arbeiten. Auch ich versuchte mich an NODE, musste mich jedoch davon distanzieren, da das Aufwand-Nutzen-Verhältnis nicht stimmig war und meine nötigen Funktionen der Website auch mit einfacher Mitteln erreicht werden können. <br>
Einzig der WebSocket-Server läuft mit Node, was aktuell noch Probleme bereitet. Lokal auf dem Rechner läuft der Node-Server einwandfrei, jedoch ist das Hosten eines solchen Servers nicht ganz einfach um muss noch erarbeitet werden.

### Verwendete Technologien
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

### Aufbau der Entwicklungsumgebung
#### Client-Side (Vue.js)

### WebSocket-Server (Host)

### Datenbank

### Technische Herausforderungen/Learnings
#### Videoplayer
Für die Live-Show ist das Einbetten einese Live-Videos natürlich eine Grundvoraussetzung. Was so einfach klingt, bereitete von Beginn an immer wieder Probleme. Zu Beginn fokussierte ich mich auf Youtube Live, da diese Plattform alles nötige zu liefern schien. Gegen Ende musste auf Twitch gewechselt werden. Folgend die Probleme in zeitlicher Reihenfolge:
##### Autoplay von Videos
Das erste Problem, welches auftauchte, war die Tatsache, dass die meisten Browser die Autoplay-Funktion von Videos blockieren. Um dies zu umgehen, wird das Video auf der Startseite stummgeschalten. Dadurch wird die Autoplay-Sperre der Browser umgangen und das Video wird abgespielt (wenn auch stumm). Sobald sich der User eigeloggt hat, wird die Stummschaltung deaktiviert (URL des iframes geändert auf mute=0) und das Video läuft mit Ton.
##### Autoplay auf Smartphones/Tablets
Nun funktionierte Autoplay auf dem Notebook ohne Probleme. Nur leider nicht auf den mobilen Browsern. Dort wird Autoplay komplett blockiert, auch wenn das Video stumm geschalten ist. Der Nutzer muss dementsprechend aktiv das Video starten, damit dies wiedergegeben werden kann (inkl. Ton). Um unnötige Anzeigen und Steuerelemente auf der Twizzy Seite zu vermeiden, habe ich aber die hover-Funktion des iframes ausgeschalten. Dies hatte nun zur Folge, dass das Video nicht gestartet werden konnte. Somit musste die hover-Funktion wieder aktiviert werden, um das Abspielen des Videos auf Smartphones/Tablets zu ermöglichen. Der unschöne Nebeneffekt dieser Anpassung ist, dass auf dem Notebook beim Hovern über das Video jeweils das Youtube-Interface angezeigt wird.
##### Einbetten eines Youtube-Live-Videos
Nun lief soweit alles wie gewünscht. Getestet wurde jedoch nur mit bestehenden Youtube Live Videos anderer Streamer oder mit eigens Hochgeladenen (nicht live) Videos. Als das Live-Video getestet werden wollte, wurde ich mit dem nächsten Fehler konfrontiert: Der Besitzer des Videos hat das Einbetten dieses Videos blockiert! Ok, sicherlich kein Problem, nur eine Einstellung auf dem Kanal. Schnell war die Einstellung auch gefunden, nur leider konnte sie nicht aktiviert/erlaubt werden. Nach einigen Recherchen wurde klar: der Youtube-Kanal muss mit einem Google AdSense-Konto verknüpft sein, um das Einbetten von Live-Videos zu gestatten. Dafür wiederum muss der Kanal monetarisiert sein (fürs Schalten von Werbung zugelassen). Diese Monetarisierung hat folgende Voraussetzungen:
>Du kannst die Monetarisierung jederzeit beantragen. Um zur Überprüfung zugelassen zu werden, sind für alle Kanäle mindestens eine Wiedergabezeit von 4.000 Stunden in den vergangenen zwölf Monaten und 1.000 Abonnenten erforderlich. Diese Bedingung ermöglicht die genaue Beurteilung neuer Kanäle und hilft dabei, die YouTuber-Community zu schützen.

Somit war Youtube Live als Plattform definitiv aus dem Rennen.
#### Verbindung zur Datenbank mit Vue.js
Das Arbeiten mit Vue.js macht sehr viel Spass - sofern man die Syntax verstanden hat. Doch dank der hilfreichen und umfangreichen Dokumentation fällt die einarbeit meist ziemlich gut. Bei der Kommunikation mit der Datenbank hatte ich zuerst Probleme. Schnell war mir klar, dass ich dafür Axios einsetzen muss, jedoch gelang dies mit nicht auf Anhieb.
Dank [dieses Tutorials](https://www.techiediaries.com/vuejs-php-mysql-rest-crud-api-tutorial/) habe ich dann das System/die Syntax dann doch noch verstanden und konnte die Datenbankverbindung einrichten.
#### Live Interaktionen
Eine Website mit Live-Interaktionen zu versetzten stellte sich als anspruchsvoller heraus als zuerst gedacht. Was bei einem Live-Quiz natürlich wichtig ist, ist die Tatsache, dass alle Teilnehmer zur selben Zeit bei dem Quiz dabei sind. Dass heisst, das Quiz muss bei allen Teilnehmern zur selben Zeit gestartet werden. Und die zweite Frage muss bei allen Teilnehmern zur selben Zeit erscheinen. Und natürlich müssen alle die selbe Zeitspanne zur Verfügung haben, diese Frage auch zu beantworten. <br>
Um die zu ermöglichen, braucht es einen Admin/Host, welcher die Show starten bzw. weiterführen kann. Dass heisst, ein Host muss alle Client ansprechen und weiterleiten können. Das funktioniert mithilfe des [Websocket-Protokolls](https://de.wikipedia.org/wiki/WebSocket), einem auf TCP basierenden Netzwerkprotokolls. Dieses ermöglicht eine bidirektionale Verbindung zwischen dem Client und dem Websocket-Server. Damit kann eine von einem Client verfasste Nachricht automatisch an alle anderen Clients (zeitgleich) weitergeleitet werden. Diese Funktion machte ich mir zu nutzen, um mittels einer bestimmten Nachricht das Quiz auf allen Clients zeitgleich zu starten.<br>
