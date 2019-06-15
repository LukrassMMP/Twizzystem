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
_(Wir empfehlen die Links bei gedrückter «Cmd»- oder «Ctrl»-Taste zu öffnen)_
[Version 1](https://xd.adobe.com/view/b8be4ace-b4a9-4bc4-7075-1c4d5ef401d9-ce8f/) <br>
[Version 2](https://xd.adobe.com/view/4a28e9e7-e9f4-463b-594c-b7a642265d10-3c19/) <br>
Dank zahlreichem Feedback wurde klar, dass die zweite Version beim Nutzer besser ankommt. Kritikpunkt der ersten Version war hauptsächlich die Übersicht - durch das im Hintergrund laufende Video mit den überlappenden Bedienungselementen geht die Übersicht verloren. Die zweite Version wirkt allgemein übersichtlicher und aufgeräumter. <br>
Somit wurde die 2.Version, dank einiger Tipps der Testteilnehmer, noch etwas angepasst und als Vorlage für die Umsetzung genutzt.

## Umsetzung

### Die Suche nach den richtigen Technologien
##### PHP & jQuery
Die ersten Gehversuche wurden mit reinem PHP und JavaScript (jQuery) absolviert. Spätestens bei der Implementierung von Live-Interaktionen mit allen Usern stoss ich bei dieser Variante auf Probleme. Versuche mit [Ratchet](http://socketo.me) (WebSocket for PHP) blieben leider erfolglos.
##### NUXT
