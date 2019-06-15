# Interaktionssystem "Twizzystem"

## Beschreibung

Das Interaktionssystem "Twizzystem" wurde im Rahmen meiner Bachelorarbeit des Studiengangs "Multimedia-Production" an der HTW Chur erstellt. Es dienst als Interaktionssystem hinter dem, ebenfalls für die Bachelorarbeit erstellten, Live-Quiz namens "Twizzy".
Das System soll eine möglichst einfache, intuitive Interaktion bieten, um mit einem per Streaming-Dienst übertragenen Live-Show zu interagieren. Die Nutzer/Zuschauer bleiben dabei stets anonym und können das System geräteunabhängig nutzen.

## Konzeption & Testing

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
Zusatzlich zu den Experteninterviews wurde eine Umfrage durchgeführt, welche von über 120 Teilnehmern ausgefüllt wurde. Die Auswertung bestätigte die Aussagen der Experten, zudem konnten noch weitere Anforderungen bestimmt werden:
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
Zuerst wurden einige Entwürfe auf Papier gezeichnet, wovon dann zwei in Adobe XD zu Testzwecken umgesetzt wurden <br>
_(Wir empfehlen die Links bei gedrückter «Cmd»- oder «Ctrl»-Taste zu öffnen)_ <br>
[Version 1](https://xd.adobe.com/view/b8be4ace-b4a9-4bc4-7075-1c4d5ef401d9-ce8f/) <br>
[Version 2](https://xd.adobe.com/view/4a28e9e7-e9f4-463b-594c-b7a642265d10-3c19/) <br>
Dank zahlreichem Feedback wurde klar, dass die zweite Version beim Nutzer besser ankommt. Kritikpunkt der ersten Version war hauptsächlich die Übersicht - durch das im Hintergrund laufende Video mit den überlappenden Bedienungselementen geht die Übersicht verloren. Die zweite Version wirkt allgemein übersichtlicher und aufgeräumter. <br>
Somit wurde die 2.Version, dank einiger Tipps der Testteilnehmer, noch etwas angepasst und als Vorlage für die Umsetzung genutzt.

## Umsetzung

### getestete Technologien
##### HbbTV
Zu Beginn war die Idee, das System auf dem Fernseher laufen zu lassen. Dazu bietet sich die "neue" HbbTV-Technologie an. Mit hilfe des Multi Platform Application Toolkit ([MPAT](http://mpat.eu)) wurde ein Versuch auf Basis von Wordpress gestartet. Leider fehlt aber für diese Technologie eine gute Dokumentation und ich konnte auch keine Experten finden, welche mich in diesem Bereich unterstützen könnten. Deshalb wurde entschieden, das System webbasiert zu erstellen.
##### PHP & jQuery
Die ersten Gehversuche (abgsehen von HbbTV) wurden mit reinem PHP und JavaScript (jQuery) absolviert. Spätestens bei der Implementierung von Live-Interaktionen mit allen Usern traten bei dieser Variante Probleme auf. Versuche mit [Ratchet](http://socketo.me) (WebSocket for PHP) blieben leider erfolglos.
##### NUXTjs & Headless Wordpress
Ein weiterer Versuch wurde mit [NUXTjs](https://nuxtjs.org) und Wordpress vorgenommen. Die Fragen und Antworten sollten via Wordpress eingetragen werden können. Somit soll die Planung einer neuen Show einfacher ablaufen. Dennoch wurde diese Variante verworfen, da die Variante mit reinem VUE.js schlicht einfacher funktionierte (und das headless Wordpress auch mit reinem Vue.js umgesetzt werden kann). Sicherlich war auch die Tatsache der verfügbaren Unterlagen/Dokumentaionen und Experten ausschlaggebend, welche mich bei Vue.js besser unterstützen konnten als bei NUXTjs.
##### NODE
Bei der Recherche wurde immer wieder empfohlen, mit [NODE](https://nodejs.org/en/) zu arbeiten. Auch ich versuchte mich an NODE, musste mich jedoch davon distanzieren, da das Aufwand-Nutzen-Verhältnis nicht stimmig war und meine nötigen Funktionen der Website auch mit einfacher Mitteln erreicht werden können.
##### Vue.js
Schlussendlich entschied ich mich, das JavaScript-Webframework [Vue.js](https://vuejs.org) zu verwenden. Dies bietet alle nötigen Funktionen und bleibt dennoch übersichtlich und vergleichsweise simpel. Zudem ist die vorhandene Dokumentation von Vue.js vorbildlich und ich konnte auch auf die Hilfe einiger Experten zurückgreifen.

###Verwendete Technologien
##### Vue.js
Schlussendlich entschied ich mich, das JavaScript-Webframework [Vue.js](https://vuejs.org) zu verwenden. Dies bietet alle nötigen Funktionen und bleibt dennoch übersichtlich und vergleichsweise simpel. Zudem ist die vorhandene Dokumentation von Vue.js vorbildlich und ich konnte auch auf die Hilfe einiger Experten zurückgreifen. <br>
Zudem gibt es für Vue.js auch etliche zusätzliche Libraries, welche einfach implementiert werden können:
* __Router__ <br>
* [__Vuex__](https://vuex.vuejs.org) <br>
* __Axios__ <br>
* __SocketIO__ <br>
* __Bootstrap__ <br>
