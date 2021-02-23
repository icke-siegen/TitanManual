---
id: version-15.0-controlling-fixtures
title: Controlling Dimmers and Fixtures
sidebar_label: Controlling Dimmers and Fixtures
original_id: controlling-fixtures
---

Beim Programmieren einer Show, aber auch später beim Showablauf, müssen
die Attribute der einzelnen Geräte, wie Helligkeit, Farbe, Position
etc., eingestellt werden. Dazu wählt man zunächst die betreffenden
Geräte an. Im [nächsten Abschnitt](./controlling-fixtures/changing-fixture-attributes.md) ist beschrieben, wie 
man die Attribute der Geräte einstellt, um das gewünschte Ergebnis zu erzielen.

## Dimmer und Geräte zum Steuern auswählen

Um die zu steuernden Geräte und Dimmer auszuwählen, betätigen Sie die
entsprechenden Geräte-Buttons. Es lassen sich einzelne oder mehrere verschiedene 
Geräte auf einmal anwählen. Ebenso können Geräte als [Gruppen](../controlling-fixtures/fixture-groups.md) gespeichert werden, um direkt 
bestimmte Kombinationen von Geräten auf einmal auszuwählen.

Ist das Gerät/der Dimmer auf einen Fader gepatcht, so drücken Sie die zugehörige 
**Auswahltaste**, um die Auswahl vorzunehmen.

![Fixtures Window](/docs/images/Fixtures-Window.png)

1. Betätigen Sie die Buttons/Tasten der gewünschten Geräte. Die
Schaltflächen erscheinen daraufhin hellblau, bei auf Tasten gepatchten
Geräten leuchten die LEDs hell auf.

2. Um eine größere Zahl von Geräten auszuwählen, ziehen Sie mit dem
Finger einen entsprechenden Auswahlrahmen. Bei Tasten halten Sie die
erste gedrückt und betätigen dazu die letzte.

Ein paar weitere wissenswerte Dinge:

-   Die Taste \<Locate\> aktiviert die angewählten Geräte weiß (ohne
    Farbe) und in Grundstellung (Pan und Tilt jeweils 50%). Weitere
    Optionen dazu sind im [nächsten Abschnitt](./controlling-fixtures.md#geräte-auf-startposition-setzen-locate) erläutert.

-   Um ein Gerät aus der Auswahl zu entfernen, einfach die betreffende
    Auswahltaste erneut betätigen.

-   Oben am Touchscreen, direkt oberhalb der oberen Fenster, werden die
    momentan angewählten Geräte angezeigt.

-   Drücken Sie \<Clear\> (rechts vom Zifferntastenblock), um sämtliche
    Geräte aus der Auswahl zu entfernen und sämtliche Änderungen aus dem
    Programmierspeicher zu löschen. Weitere Optionen dazu sind im
    [nächsten Abschnitt](./controlling-fixtures.md#clear----löschen-der-auswahl) erläutert. 

-   Sobald ein Attribut verändert und wieder eine Auswahltaste betätigt
    wurde, werden sämtliche Geräte aus der Auswahl entfernt, und der
    Auswahlprozess startet von neuem. Alle vorgenommenen Änderungen
    (seit der letzten Betätigung von \<Clear\>) verbleiben im
    Programmierspeicher. Sobald ein Gerät editiert wurde, erscheint die
    betreffende Schaltfläche in Dunkelblau. Im obigen Bild sind die
    ersten beiden Geräte angewählt, die folgenden drei im
    Programmierspeicher, und alle anderen nicht angewählt oder editiert.
	
-   Zur Auswahl von Geräten auf weiteren Seiten der Geräte-Auswahlliste
    kann man entweder mit den \'Page\' (Seiten)-Tasten links der
    Gerätetasten die Seiten umschalten, oder (sofern die \'Page\'-Tasten
    per Kontext-Taste ausgeblendet sind) mit dem Schiebe-Reiter durch
    die Liste navigieren. Für Fader/Tasten gibt es getrennte tasten für
    die Seitenumschaltung: beim Pearl expert sind dies die vier Tasten
    oberhalb des Ziffernblocks, bei den anderen Pulten die Tasten oder
    Buttons Page+/Page- bei den Fadern.
	
-   Mit den [Tastenprofilen](./system-settings/key-profiles.md) lässt sich
    die Geräte-Auswahltaste in den Einrast-Modus ('latch mode')
    umschalten, so dass damit der Dimmerkanal des betreffenden Gerätes
    geschaltet wird (gleiches Ergebnis wie Setzen des Faders auf 100%).
	
## Geräte auf Startposition setzen (Locate)

Die Taste \<Locate\> (unten rechts auf dem Pult) versetzt die
angewählten Geräte in eine definierte Ausgangsposition mit \'Licht an\',
um den Start des Programmierens zu vereinfachen.

Ein einfaches Betätigen der Taste bewegt alle Geräte auf \'Mitte\' (50%
Pan/Tilt) und setzt sämtliche Attribute zurück, resultierend in einfach
weißem Licht. Dennoch ist es zuweilen wünschenswert, etwa die Geräte
dabei nicht zu bewegen oder andere Attribute unverändert zu lassen. Dazu
erscheinen sinnvolle Optionen, wenn man die \<Locate\>-Taste nicht einfach
kurz drückt, sondern gedrückt hält.

-   Sie können einige der \'Locate\'-Funktionen maskieren (z.B. nur \'das
    Licht einschalten\', ohne Position oder Farbe zu verändern), indem
    bei gedrückter \<Locate\>-Taste die Funktion \[Set Mask to Exclude
    All\] gewählt wird. Darauf - bei noch gedrückt gehaltener
    \<Locate\>-Taste - schalten Sie die einzelnen Attribute, die Sie
    auf Startposition haben wollen, mittels der Attribut-Tasten ein. Nur
    die so angewählten Attribute werden nun bei 'Locate' zurückgesetzt.
    Ein Druck auf \<Attribute Options\> löscht wiederum die Maskierung.

-   Die Option \[Auto Reset Mask\] löscht die Maskierung automatisch, so
    dass bei jedem \'Locate\'-Vorgang wieder sämtliche Attribute
    beeinflusst werden. Alternativ bestimmt die Option \[Remember
    Mask\], dass die Maskierung erhalten bleibt.
	
-   Die Option \[Clear/Don\'t Clear Located Attributes\] bestimmt, ob die
    durch \<Locate\> gesendeten Werte beim Speichern mit übernommen
    werden sollen. Steht die Option auf \'Clear\', so werden die Werte
    nicht mit übernommen, sofern sie nicht manuell (etwa mit den Rädern)
    verändert wurden. Das ist zweckmäßig etwa, wenn Sie einen Cue nur
    mit einer Position erstellen möchten. Die Taste \<Locate\> wird dann
    zwar die Geräte zum Programmieren \'anschalten\', aber die Information
    \'Licht an\' wird nicht mit abgespeichert.

> Um schnell zu \'Locaten\', **ohne Pan/Tilt zu verändern**, drücken und halten Sie \<Locate\>, drücken dazu \<Pan/Tilt\> und lassen nun \<Locate\> los.

> Um **nur Pan/Tilt zu locaten**, drücken und halten Sie \<Locate\>, drücken dazu
\<Options\>  (bzw. \<Attribute Options\> auf älteren Pulten), drücken dann \<Pan/Tilt\>, und lassen nun \<Locate\> los.

### Ändern des Locate-Wertes

Ebenso können Sie den Locate-Wert des Gerätes für die betreffende Show
ändern, und zwar entweder für das eine angewählte Gerät, oder für alle
Geräte dieses Typs. Stellen Sie dazu den gewünschten Wert für das
entsprechende Gerät ein, drücken Sie \<Record\>, dann \<Locate\>.
Wählen Sie nun \[Shared\] (gemeinsam = alle Lampen dieses Typs) oder
\[Individual\] (nur einzelne Geräte). Drücken Sie schließlich nochmals
\<Record\> oder \<Locate\>.

## Clear -- Löschen der Auswahl und des Programmers

Mit der Taste \<Clear\> (rechts vom Zifferntastenblock) löscht man sowohl den 
Programmierspeicher als auch aktuelle Geräteauswahl. Ein einfaches Betätigen der
Taste löscht normalerweise alles. Dieses Verhalten lässt sich aber Ändern, so dass
zwei Tastendrücke erforderlich sind, wenn Geräte selektiert sind und sich Werte im 
Programmer befinden: je nach gewähltem Modus löscht der **erste Tastendruck** dann 
nur die Auswahl und der **zweite Tastendruck** den Programmer oder umgekehrt. Siehe
die Einstellung [Action Precedence](controlling-fixtures.md#clear-options-menu) in 
den im folgenden beschriebenen Clear-Optionen.

### Optionen, wenn die Clear-Taste gedrückt gehalten wird

Hält man die Taste \<Clear\> gedrückt, kann man folgende Optionen wählen, die beim 
Loslassen der Taste wirksam werden.

Mit **Set Mask** lässt sich bestimmen, welche Attribute gelöscht werden sollen 
(etwa: die Position im Programmierspeicher belassen, aber alles andere löschen).
Die obere Taste \[Set Mask\] gestattet es, die einzelnen Attribute auszuwählen, oder 
Sie wählen diese mit den Attributtasten.
\[Set Mask to Clear Nothing\] wählt alle Attribute ab, während \[Set Mask to Clear 
All\] alle Attribute zum Löschen anwählt.

Ebenso kann man mit der Taste \<Options\> bzw. \<Attribute Options\> alle Attribute ab- bzw. anwählen.

Mit der Option **Time** kann man einstellen, ob die Fade-/Delayzeiten im
Programmierspeicher für alle Attribute ebenfalls gelöscht oder aber beibehalten
werden sollen (werden einzelne Attribute gelöscht, so werden auch die Zeiten für
die jeweiligen Attribute gelöscht; setzt man also die Maske auf P, so werden die
Zeiten für Pan/Tilt gelöscht).

Wird die \<Clear\>-Taste nun losgelassen, so werden alle in der Maske ausgewählten
Attribute aus dem Programmer gelöscht, und die Maske wird auf **Clear All** 
zurückgesetzt, es sei denn, die Option \[Auto Reset Mask\] wurde deaktiviert (s.u.).

-   Hält man \<Clear\> gedrückt und betätigt dazu \<All\>, so werden
    alle Geräte deselektiert, aber die Werte verbleiben im
    Programmierspeicher.

-   \[Clear Options\] öffnet ein Untermenü mit weiteren, im Folgenden
    beschriebenen Optionen.

-   Mit \[Clear All Fixtures/Selected Fixtures\] bestimmen Sie, ob
    sämtliche, oder nur die aktuell ausgewählten, Geräte aus dem
    Programmierspeicher gelöscht werden sollen.

-   \[Individual Attributes\] erlaubt das Löschen einzelner Attribute
    aus dem Programmierspeicher. Beim Betätigen dieser Taste erhalten
    Sie eine Liste der aktuell im Programmierspeicher vorhandenen
    Attribute, die sich mit der jeweiligen Taste einzeln löschen lassen.

-   \[Clear All Programmers\] löscht alle zurzeit verwendeten
    Programmierspeicher. Dies betrifft insbesondere Werte, die mit der
    Remote, von einem anderen Pult/User in einer Multiuser-Session sowie
    beim Erstellen von Keyframe-Shapes gesetzt wurden.
	
### Das Untermenü "Clear Options"

Hält man die Taste \<Clear\> gedrückt und betätigt dazu \[Clear Options\],
so lassen sich folgende Einstellungen ändern (diese lassen sich auch als [Benutzereinstellung](./system-settings/user-settings.md#clear) im Reiter "Clear" 
des Benutzerprofils vornehmen).

-   \[Auto Reset Mask\] setzt die Maskierung bei jedem Betätigen der
    'Clear'-Taste automatisch zurück. Alternativ bestimmt \[Remember
    Mask\], dass die Maskierung erhalten bleibt.

-   \[Leave/Zero Preset Fader Levels\] bestimmt, ob Faderwerte von
    Geräten mit \<Clear\> auf 0 gesetzt werden sollen oder nicht. (Das
    Tastenprofil der Geräteauswahl lässt sich auf 'Einrasten' (Latch)
    stellen, womit der Dimmerkanal des Gerätes eingeschaltet wird,
    sobald das Gerät angewählt wird, siehe [Key Profiles](./system-settings/key-profiles.md)).
	
-   Mit \[Freeze current values\] lässt sich festlegen, was mit
    LTP-Kanälen (nicht Helligkeit) geschieht, deren Wert modifiziert
    wurde. Steht diese Option auf \[Freeze Current Values\], so behalten
    diese Kanäle die gewählten Werte. Steht die Option auf \[Release To
    Playback Values\], so werden die Kanäle auf die Werte der aktuell
    laufenden Cues zurückgesetzt. Beispiel: wird ein Cue aufgerufen, in
    dem einige Geräte grün abgespeichert sind, und nun manuell deren
    Farbe auf Rot geändert, so werden diese bei \'Clear\' und der Option
    \[Freeze\] rot bleiben; ist hingegen die Option \[Release\]
    angewählt, so werden die Geräte zum gespeicherten Grün
    zurückgesetzt.

-   \[Clear/Maintain Cue Times\] bestimmt, ob Cue-Zeiten im
    Programmierspeicher gelöscht oder aber beibehalten werden (dies ist
    unabhängig von Attributzeiten im Speicher).

-   \[Clear/Maintain Rate Settings\] bestimmt, ob Geschwindigkeitswerte im
    Programmierspeicher gelöscht oder aber beibehalten werden.	
	
-   \[Clear Direction\] bestimmt, ob Richtungsvorgaben im
    Programmierspeicher gelöscht oder aber beibehalten werden.	
	
-   \[Action Precedence\] legt das Verhalten der \<Clear\>-Taste fest:
	- Selection With Programmer: **(Vorgabewert)** Betätigen der \<Clear\>-Taste
	löscht sowohl die Geräteauswahl als auch den Programmer (nur ein Tastendruck
	erforderlich)
	- Selection Then Programmer (erst Auswahl, dann Programmer): sind Geräte 
	angewählt, so wird mit dem ersten Tastendruck die Geräteauswahl und mit dem 
	zweiten der Programmer gelöscht. Sind keine Geräte ausgewählt, so löscht der 
	erste Tastendruck den Programmer.
	- Programmer Then Selection (erst Programmer, dann Auswahl): sind Werte 
	im Programmer, so wird mit dem ersten Tastendruck der Programmer und mit dem 
	zweiten die Geräteauswahl gelöscht. Sind keine Werte im Programmer, so löscht der 
	erste Tastendruck die Geräteauswahl.

> Geben Sie mit den Zifferntasten eine Zahl ein und drücken dann \<Clear\>, so faden im Programmer befindliche HTP-Werte in dieser Zeit (in Sekunden) aus. Gibt man etwa 5 ein und drückt \<Clear\>, so wird in 5 Sekunden ausgefadet. Damit kann man unauffällig mit dem Programmer arbeiten.

### Einzelne Attributwerte direkt löschen

Mit dem Fenster [Channel Grid](./controlling-fixtures/viewing-and-editing-fixture-values.md#übersicht-über-die-kanäle-das-channel-grid-fenster) können einzelne Attribute einzelner
Geräte selektiv gelöscht werden.

## Geräte mit mehreren Zellen/Subfixtures

Verfügt ein Gerät über mehrere einzeln steuerbare Bereiche (z.B.
LED-Bars) und ist die Personality entsprechend angepasst, so kann man
wahlweise das gesamte Gerät oder einzelne Zellen steuern. Dies empfiehlt
sich besonders bei Verwendung von Shapes sowie dem Pixelmapper.

Wird das Gerät mit der Schaltfläche angewählt, auf die es gepatcht
wurde, so werden alle Zellen synchron gesteuert.

Um auf die einzelnen Zellen zuzugreifen, können Sie die entsprechenden
Reiter oben im Attribut-Editor verwenden, wobei der ganz linke Reiter
das Gesamtgerät steuert und daneben Reiter für die einzelnen Zellen sind
(zum Öffnen des Attribut-Editors verwenden Sie z.B. den vorgegebenen
Workspace oder drücken zweimal auf
[\<View / Open\>](../titan-basics/workspace-windows.md#auswahl-und-positionierung-der-arbeitsfenster) und wählen den
Attribut-Editor).

![Cell Selection](/docs/images/Cell-Selection.png)

Ebenso können Sie dazu die Unfold-Funktion verwenden: drücken Sie
\<Unfold\> und dann die entsprechende Geräteschaltfläche. Daraufhin
werden im Gerätefenster Schaltflächen für die einzelnen Zellen
angezeigt. Verwenden Sie dies auf Geräten auf Fadern/Tasten, so werden
die Zellen ab Fader 1 eingeblendet.

Es gibt zwei Möglichkeiten für Unfold:

-   Drücken Sie \<Unfold\> und wählen Sie mehrere Geräte aus. Die
    entsprechenden Schaltflächen für die Zellen erscheinen sofort im
    Gerätefenster.

-   Wählen Sie die Geräte aus und drücken Sie \<Unfold\>. Wählen Sie nun
    \[Selected Fixtures\]. Dies bietet sich insbesondere für mehrere
    nicht unmittelbar aufeinander folgende Geräte an.

Um in die normale Anzeige zu wechseln, wählen Sie \<Unfold\>, dann
\[Exit Unfold\].

Einzelne Zellen lassen sich auch über eine spezielle Syntax mit den
Zifferntasten auswählen (\<THRO\> ist auf manchen Pulten \'Through\'):

| Tasten                                         | Auswahl                                                 |
|------------------------------------------------|---------------------------------------------------------|
| \<.\>  	                                     | Alle Zellen der gewählten Geräte                        |
| **n** \<.\>                                    | Alle Zellen von Gerät **n**                             |
| \<.\> \<THRO\> \<.\> **j**                     | Zellen 1 bis **j** aller gewählten Geräte               |     
| **n** \<.\> \<THRO\>                           | Alle Zellen der Geräte ab Nr. **n** des jeweiligen Typs |
| **n** \<THRO\> \<.\> **j**                     | Kurzform, s.o.                                          |
| **n** \<.\> \<THRO\> **i**                     | Zellen 1 bis **i** von Gerät **n**                      |
| \<.\> **m**          		                     | Zelle **m** aller ausgewählten Geräte                   |
| **n** \<.\> \<THRO\> **i** \<.\> **j**         | Zellen 1 bis **j** der Geräte **n** bis **i**           |
| \<.\> **m** \<THRO\>                           | Zellen ab **m** der gewählten Geräte                    |
| **n** \<.\> **m**                              | Zelle **m** von Gerät **n**                             |
| \<.\> **m** \<THRO\> \<.\> **j**               | Zellen **m** bis **j** aller gewählten Geräte           |    
| **n** \<.\> **m** \<THRO\>                     | Zellen ab **m** des Gerätes **n**                       |
| \<.\> **m** \<THRO\> **j**                     | Kurzform, s.o.                                          |
| **n** \<.\> **m** \<THRO\> **i**               | Zellen **m** bis **i** von Gerät **n**                  |
| **n** \<THRO\> **i** \<.\>                     | alle Zellen der Geräte **n** bis **i**                  |
| **n** \<.\> **m** \<THRO\> **i** \<.\>         | Zellen ab **m** der Geräte **n** - **i**                |
| **n** \<THRO\> **i** \<.\> **j**               | Zelle **j** der Geräte **n** - **i**                    |
| **n** \<.\> **m** \<THRO\> **i** \<.\> **j**   | Zellen **m** - **j** der Geräte **n** - **i**           |
| **n** \<THRO\> \<.\> **j**                     | Zellen 1 - **j** von Gerät **n**                        |
| **n** \<.\> **m** \<THRO\> \<.\> **j**         | Zellen **m** - **j** von Gerät **n**    

-   Die Auswahl von Zellen kann als separate Gruppe gespeichert werden.
    Damit können später verschiedene Zusammenstellungen von Zellen
    aufgerufen werden, ohne jedes Mal den Attribut Editor oder Unfold
    zu verwenden.

## Anwählen von Dimmern/Geräten nach (Kanal-)Nummer

In bestimmten Situationen, etwa beim Programmieren einer Vielzahl von
Dimmern, kann es einfacher sein, die zu ändernden Kanäle anhand ihrer
Nummer auszuwählen. Über das \'Channel\'-Menü geht das für Dimmer und
Bewegungsscheinwerfer. Zum Aufruf des \'Channel\'-Menüs drücken Sie die
Taste \<Fixture\> links oberhalb des Zifferntastenblocks.

Ebenso können Sie einfach die entsprechenden Ziffern eingeben; enthält
Ihre Eingabe \'Through\', \'And\' oder \'@\', so wird automatisch das
\'Channel\'-Menü aufgerufen.

Through, And und @ stehen je nach Pult sowohl als Menü-Taste im
Fixtures-Menü als auch über die Pfeiltasten direkt beim Ziffernblock zur
Verfügung.

Die Geräte lassen sich anhand der Gerätenummer (User Number), der Nummer
des Gerätebuttons (Handle Number) oder der DMX-Adresse anwählen, je nach
Einstellung der Menütaste A.

Bei der Benutzung des \'Channel\'-Menüs empfiehlt es sich, dieses zu
fixieren (Taste \<Menu Latch\>).

-   Zum Anwählen eines Gerätes die Nummer eingeben und \<Enter\>
    drücken.

-   Um mehr als ein Gerät anzuwählen, drücken Sie die Funktionstaste
    \[And\] zwischen den einzelnen Nummern. Beispiel: 1 \[And\] 2
    \[And\] 5 \<Enter\> wählt die Geräte 1, 2, 5.

-   Um eine Folge von Geräten anzuwählen, drücken Sie \[Thro\].
    Beispiel: 1 \[Thro\] 8 \<Enter\> wählt 1-8. Lässt man die zweite 
	Zahl weg, so werden alle noch folgenden Geräte des gleichen Typs angewählt.

-   Um einzelne Geräte in einer Folge auszulassen, drücken Sie \[Not\].
    Beispiel: 1 \[Through\] 4 \[Not\] 3 \<Enter\> wählt 1, 2, 4.

-   Die Taste \[@\] stellt den Dimmer-Wert der ausgewähl­ten Geräte ein,
    etwa: 1 \[Through\] 8 \[@\] 5 \<Enter\> setzt Gerät 1-8 auf 50% (in den
    Benutzereinstellungen lässt sich einstellen, ob 50% durch "5" oder
    "50" eingegeben wird, siehe [Benutzereinstellungen](./system-settings/user-settings.md)). Beim Betätigen
    der Taste \[@\] erscheinen außerdem Optionen auf den Funktionstasten
    für \'Full\' (100%), \'Off\' (0) und +/- (schrittweise
    erhöhen/vermindern).

-   Zur numerischen Anwahl von Gruppen verwenden Sie die Taste 'Group';
    Beispiel: \<Group\> 1 \[And\] \<Group\> 2 \[Not\] 5 \<Enter\> selektiert
    Gruppe 1 und 2 außer Gerät 5.

-   Die \<Locate\>-Taste macht das Betätigen der \<Enter\>-Taste
    überflüssig, wenn die Geräte angewählt und dann auf die
    Startposition gebracht werden sollen: 1 \[Through\] 4 \<Locate\>
    wählt Gerät 1 bis 4 aus und initialisiert diese.

![Syntax Selection](/docs/images/Syntax-Selection.png)

-   Beim Eingeben eines Kommandos wird dieses in der Kommandozeile des
    Displays angezeigt. Mittels der grauen ←\<Back\>Taste kann man
    schrittweise zurückgehen; mit der grauen →\<@\>Taste lässt sich die
    Eingabe abbrechen.

-   Die Funktionen AND, THRO sowie @ stehen auch auf den Pfeiltasten zur
    Verfügung (siehe deren Beschriftung).

## Geräteauswahl nach Muster

Beim Programmieren einer Show ist es oftmals wünschenswert, verschiedene
Muster von Geräten auszuwählen. Anstatt nun die Geräte einzeln aus- und
abzuwählen, gestattet es das Pult, Geräte aus einer Gesamtauswahl nach
einem bestimmten Muster zu selektieren.

1. Selektieren Sie einige Geräte.

2. Drücken Sie die weiße Taste \<All\> (bzw. \<All/Even/Odd\>).

3. Wählen Sie ein Muster von den Menütasten. Die gewählte Auswahl wird
geändert, so dass z.B. nur die ungeraden (odd) Geräte ausgewählt werden.\
![Pattern Select](/docs/images/Pattern-Select.png)

4. Drücken Sie die Taste \<Fix+1\> oder \<Fix-1\>, um den nächsten
Schritt im gewählten Muster anzuwählen (auf manchen Pulten \<Next\> und \<Prev\>).

5. Um die Musterauswahl zu beenden, drücken Sie zweimal \<All\>.

-   Mittels \[Direction\] (Richtung) kann eingestellt werden, dass die
    Geräte-Reihenfolge einer bestimmten Richtung folgt; dabei wird das
    Layout der Geräte herangezogen. Damit lassen sich z.B. sehr einfach
    symmetrische Paare von Geräten wählen. Auch beim Verwenden von 
	[Fixture Overlap](./cues/cue-timing.md#einstellen-von-überblendzeiten-und-geräteversatz) 
	ist die Richtung von Bedeutung.

-   Drückt man \<Clear\>, so wird die Richtung (Direction) wieder auf
    \'None\' zurückgesetzt. Dies lässt sich mit \[Clear Options\] \[Clear
    / Maintain Direction\] umstellen (halten Sie \<Clear\> gedrückt zum
    Einstellen der Clear-Optionen).

-   Wenn Sie etwa einen Chaser mit 16 Geräten programmieren, und dazu
    jedes 4. synchron einstellen wollen, wählen Sie zunächst alle 16
    Geräte aus, drücken dann \<All\>, dann \[1 in x\], und danach 
	\[1 in 4\]. Nun sind die Geräte 1, 5, 9 und 13 aus der vorherigen 
	Auswahl zum Bearbeiten angewählt. Drücken Sie \<Fix+1\> bzw. \<Next\>, 
	so werden die Geräte 2, 6, 10 und 14 angewählt. Nach der Anwahl des 4. 
	Schrittes erscheint wieder der erste Schritt des Musters, bis 
	zweimal \<All\> betätigt wird.

-   Sie können sehr einfach eigene Muster programmieren: geben Sie dazu
    z.B. mit den Ziffern- und Funktionstasten "2" A \[In\] "6" \<Enter\> ein.

-   Diese Funktionen stehen ebenfalls auf den Menütasten zur Verfügung,
    wenn man einen Gruppen-Button gedrückt hält.

## Auswahl von Geräten in einem Cue

Zur Auswahl der Geräte, die in einem bestimmten Cue enthalten sind,
dient die **Select If**-Funktion.

Drücken Sie dazu \<Select If\> gefolgt von dem Speicherplatz. (Auf
älteren Pulten gibt es keine gesonderte \<Select If\>-Taste; in diesem
Fall drücken Sie \<Fixture\> und dann \[Select If\]).

Ebenso lässt sich \'Select If\' mit den Tasten \<@\> und \<Thro\>
verwenden, um alle Geräte mit einer bestimmten Helligkeit anzuwählen:\
\@X: Geräte mit der Helligkeit X\
@ Thro X: Geräte mit der Helligkeit 0 - X\
@ X Thro: Geräte mit der Helligkeit X - Full\
@ X Thro Y: Geräte mit der Helligkeit zwischen X und Y\
@@: Geräte mit der Helligkeit \> 0.

Pegelangaben können entweder in der Schreibweise 0-9 oder 00-99 gemacht
werden, abhängig von der [Benutzereinstellung](./system-settings/user-settings.md) \[Channel Levels Set In\].

## Einzeln durch die Geräte einer Auswahl durchschalten

Sind mehrere Geräte oder eine Gruppe von Geräten ausgewählt, so bietet
das Pult die Möglichkeit, einzeln durch die angewählten Geräte
durchzuschalten. Dies vereinfacht das Programmieren, da man so nicht
jedes Gerät einzeln selektieren muss.

Für diese Funktion werden die Tasten \<Fix-1\> (zurück), \<Fix+1\>
(weiter), \<All\> (alle) und \<HiLight\> (hervorheben) genutzt.

1. Wählen Sie mehrere Geräte oder eine Gruppe von Geräten.

2. Mit den Tasten \<Fix-1\> und \<Fix+1\> wird jeweils ein Gerät
   ausgewählt bzw. weitergeschaltet (in der Reihenfolge der Auswahl). 
   Auf manchen Pulten dienen dazu die Tasten \<Prev\> und \<Next\> .

3. Die Taste \<All\> wählt alle Geräte aus, die sich im
   Programmierspeicher befinden (alle Geräte, die seit der letzten
   Betätigung von \<Clear\> angewählt wurden).

-   Die \'HiLight\'-Funktion ermöglicht es, das aktuelle Gerät
    hervorzuheben, siehe nächster Abschnitt.
	
## Das ausgewählte Gerät bei Fix+1/Fix-1 hervorheben

Beim Durchschalten durch eine Geräteauswahl mit den \<Fix+1/\
Fix-1/All\>-Tasten lässt sich das jeweils angewählte Gerät hervor­heben.
Dies vereinfacht es zu sehen, welches Gerät man gerade steuert. Die
anderen Geräte in der Auswahl werden gleichzeitig heruntergedimmt
(\'Lowlight\').

-   Betätigen Sie die \<HiLight\>-Taste, um diese Funktion zu
    aktivieren. Ein weiteres Betätigen der Taste schaltet die Funktion
    wieder aus. Ist der Highlight-Modus aktiv, so werden die davon
    betroffenen Attribute (z.B. der Dimmer) überschrieben und können
    nicht editiert oder gespeichert werden.

-   Die für Highlight/Lowlight verwendeten Werte lassen sich ändern:
    stellen Sie den gewünschten Wert ein, drücken Sie \<Record\>, dann
    \<HiLight\>, und wählen dann \[Store Highlight State\] oder \[Store
    Lowlight State\].

## Nicht ausgewählte Geräte ausblenden (Remainder Dim)

Mit "Remainder Dim" (\<Rem Dim\> oder \<Avo\>+\<All\>) werden die nicht
angewählten Geräte ausgeblendet; dabei wird der Wert Intensity=0 in den
Programmierspeicher geschrieben und entsprechend beim Speichern
übernommen.