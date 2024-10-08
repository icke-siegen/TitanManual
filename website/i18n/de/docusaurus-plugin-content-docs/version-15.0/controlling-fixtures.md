---
id: controlling-fixtures
title: Auswahltasten und Encoder
sidebar_label: Auswahltasten und Encoder
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

## Dimmer und Geräte zum Steuern auswählen

Um die zu steuernden Geräte und Dimmer auszuwählen, betätigen Sie die
entsprechenden Geräte-Buttons, womit die Geräte in den Editor geladen
werden. Es lassen sich einzelne oder mehrere verschiedene Geräte auf
einmal anwählen. Ebenso lassen sich Gruppen verwenden, um mehrere Geräte
auf einmal anzuwählen, siehe [Gruppen](../controlling-fixtures/fixture-groups.md).

Ist das Gerät/der Dimmer auf einen Fader gepatcht, so drücken Sie die zugehörige blaue Taste, um die Auswahl vorzunehmen.

![Fixtures Window](/docs/images/Fixtures-Window.png)

1. Betätigen Sie die Buttons/Tasten der gewünschten Geräte. Die
Schaltflächen erscheinen daraufhin hellblau, bei auf Tasten gepatchten
Geräten leuchten die LEDs hell auf.

2. Um eine größere Zahl von Geräten auszuwählen, ziehen Sie mit dem
Finger einen entsprechenden Auswahlrahmen. Bei Tasten halten Sie die
erste gedrückt und betätigen dazu die letzte.

Ein paar weitere wissenswerte Dinge:

-   Die Taste <Keys.HardKey>Locate</Keys.HardKey> aktiviert die angewählten Geräte weiß (ohne
    Farbe) und in Grundstellung (Pan und Tilt jeweils 50%). Weitere
    Optionen dazu sind im [nächsten Abschnitt](../controlling-fixtures/using-the-select-buttons-and-wheels.md#geräte-auf-startposition-setzen-locate) erläutert.

-   Um ein Gerät aus der Auswahl zu entfernen, einfach die betreffende
    Auswahltaste erneut betätigen.

-   Oben am Touchscreen, direkt oberhalb der oberen Fenster, werden die
    momentan angewählten Geräte angezeigt.

-   Drücken Sie <Keys.HardKey>Clear</Keys.HardKey> (rechts vom Zifferntastenblock), um sämtliche
    Geräte aus der Auswahl zu entfernen und sämtliche Änderungen aus dem
    Programmierspeicher zu löschen. Weitere Optionen dazu sind im
    [nächsten Abschnitt](../controlling-fixtures/using-the-select-buttons-and-wheels.md#clear----löschen-der-auswahl) erläutert. 

-   Sobald ein Attribut verändert und wieder eine Auswahltaste betätigt
    wurde, werden sämtliche Geräte aus der Auswahl entfernt, und der
    Auswahlprozess startet von neuem. Alle vormals angewählten Geräte
    (seit der letzten Betätigung von <Keys.HardKey>Clear</Keys.HardKey>) verbleiben im
    Programmierspeicher. Sobald ein Gerät editiert wurde, erscheint die
    betreffende Schaltfläche in Dunkelblau. Im obigen Bild sind die
    ersten beiden Geräte angewählt, die folgenden drei im
    Programmierspeicher, und alle anderen nicht angewählt oder editiert.

-   Zur Auswahl von Geräten auf weiteren Seiten der Geräte-Auswahlliste
    kann man entweder mit den 'Page' (Seiten)-Tasten links der
    Gerätetasten die Seiten umschalten, oder (sofern die 'Page'-Tasten
    per Kontext-Taste ausgeblendet sind) mit dem Schiebe-Reiter durch
    die Liste navigieren. Für Fader/Tasten gibt es getrennte tasten für
    die Seitenumschaltung: beim Pearl expert sind dies die vier Tasten
    oberhalb des Ziffernblocks, bei den anderen Pulten die Tasten oder
    Buttons Page+/Page- bei den Fadern.

-   Mit den [Tastenprofilen](../system-settings/key-profiles.md) lässt sich
    die Geräte-Auswahltaste in den Einrast-Modus ('latch mode')
    umschalten, so dass damit der Dimmerkanal des betreffenden Gerätes
    geschaltet wird (gleiches Ergebnis wie Setzen des Faders auf 100%).

## Geräte auf Startposition setzen (Locate)

Die Taste <Keys.HardKey>Locate</Keys.HardKey> (unten rechts auf dem Pult) versetzt die
angewählten Geräte in eine definierte Ausgangsposition mit 'Licht an',
um den Start des Programmierens zu vereinfachen.

Ein einfaches Betätigen der Taste bewegt alle Geräte auf 'Mitte' (50%
Pan/Tilt) und setzt sämtliche Attribute zurück, resultierend in einfach
weißem Licht. Dennoch ist es zuweilen wünschenswert, etwa die Geräte
dabei nicht zu bewegen oder andere Attribute unverändert zu lassen. Dazu
erscheinen sinnvolle Optionen, wenn man die <Keys.HardKey>Locate</Keys.HardKey>-Taste nicht einfach
kurz drückt, sondern gedrückt hält.

-   Sie können einige der 'Locate'-Funktionen maskieren (z.B. nur 'das
    Licht einschalten', ohne Position oder Farbe zu verändern), indem
    bei gedrückter <Keys.HardKey>Locate</Keys.HardKey>-Taste die Funktion \[Set Mask to Exclude
    All\] gewählt wird. Darauf - bei noch gedrückt gehaltener
    <Keys.HardKey>Locate</Keys.HardKey>-Taste - schalten Sie die einzelnen Attribute, die Sie
    auf Startposition haben wollen, mittels der Attribut-Tasten ein. Nur
    die so angewählten Attribute werden nun bei 'Locate' zurückgesetzt.
    Ein Druck auf <Keys.HardKey>Attribute Options</Keys.HardKey> löscht wiederum die Maskierung.

-   Die Option <Keys.SoftKey>Auto Reset Mask</Keys.SoftKey> löscht die Maskierung automatisch, so
    dass bei jedem 'Locate'-Vorgang wieder sämtliche Attribute
    beeinflusst werden. Alternativ bestimmt die Option \[Remember
    Mask\], dass die Maskierung erhalten bleibt.

-   Die Option <Keys.SoftKey>Clear/Don't Clear Located Attributes</Keys.SoftKey> bestimmt, ob die
    durch <Keys.HardKey>Locate</Keys.HardKey> gesendeten Werte beim Speichern mit übernommen
    werden sollen. Steht die Option auf 'Clear', so werden die Werte
    nicht mit übernommen, sofern sie nicht manuell (etwa mit den Rädern)
    verändert wurden. Das ist zweckmäßig etwa, wenn Sie einen Cue nur
    mit einer Position erstellen möchten. Die Taste <Keys.HardKey>Locate</Keys.HardKey> wird dann
    zwar die Geräte zum Programmieren 'anschalten', aber die Information
    'Licht an' wird nicht mit abgespeichert.

> Um schnell zu 'Locaten', **ohne Pan/Tilt zu verändern**, drücken und halten Sie <Keys.HardKey>Locate</Keys.HardKey>, drücken dazu <Keys.HardKey>Pan/Tilt</Keys.HardKey> und lassen nun <Keys.HardKey>Locate</Keys.HardKey> los.

> Um **nur Pan/Tilt zu locaten**, drücken und halten Sie <Keys.HardKey>Locate</Keys.HardKey>, drücken dazu
<Keys.HardKey>Options</Keys.HardKey>  (bzw. <Keys.HardKey>Attribute Options</Keys.HardKey> auf älteren Pulten), drücken dann <Keys.HardKey>Pan/Tilt</Keys.HardKey>, und lassen nun <Keys.HardKey>Locate</Keys.HardKey> los.


### Ändern des Locate-Wertes

Ebenso können Sie den Locate-Wert des Gerätes für die betreffende Show
ändern, und zwar entweder für das eine angewählte Gerät, oder für alle
Geräte dieses Typs. Stellen Sie dazu den gewünschten Wert für das
entsprechende Gerät ein, drücken Sie <Keys.HardKey>Record</Keys.HardKey>, dann <Keys.HardKey>Locate</Keys.HardKey>.
Wählen Sie nun <Keys.SoftKey>Shared</Keys.SoftKey> (gemeinsam = alle Lampen dieses Typs) oder
<Keys.SoftKey>Individual</Keys.SoftKey> (nur einzelne Geräte). Drücken Sie schließlich nochmals
<Keys.HardKey>Record</Keys.HardKey> oder <Keys.HardKey>Locate</Keys.HardKey>.

## Clear -- Löschen der Auswahl

Die Taste <Keys.HardKey>Clear</Keys.HardKey> (rechts vom Zifferntastenblock) löscht sämtliche
Änderungen aus dem Programmierspeicher sowie die aktuelle Geräteauswahl.
Ein einfaches Betätigen der Taste löscht einfach alles, hält man die
Taste <Keys.HardKey>Clear</Keys.HardKey> hingegen gedrückt, erscheinen folgende Optionen:

-   Es lassen sich einzelne Attribute zum Löschen maskieren (etwa: die
    Position im Programmierspeicher belassen, aber alles andere
    löschen); dazu bei gedrückter <Keys.HardKey>Clear</Keys.HardKey>-Taste die Option \[Set Mask
    to Clear Nothing\] wählen. Darauf (noch immer <Keys.HardKey>Clear</Keys.HardKey> gedrückt
    halten) lassen sich mit den Attribut-Tasten die zu löschenden
    Attribute einzeln wählen, oder Sie wählen <Keys.SoftKey>Set Mask</Keys.SoftKey> und benutzen
    die Kontext-Tasten. Nun werden nur die angezeigten Attribute
    gelöscht. Ein Druck auf die Taste <Keys.SoftKey>Attribute Options</Keys.SoftKey> bzw. <Keys.SoftKey>Options</Keys.SoftKey>
	wiederum löscht die Maskierung. Mit der Option „Time Mask" kann man
    einstellen, ob die Fade-/Delayzeiten im Programmierspeicher für alle
    Attribute ebenfalls gelöscht oder aber beibehalten werden sollen
    (werden einzelne Attribute gelöscht, so werden auch die Zeiten für
    die jeweiligen Attribute gelöscht; setzt man also die Maske auf P,
    so werden die Zeiten für Pan/Tilt gelöscht).

-   Hält man <Keys.HardKey>Clear</Keys.HardKey> gedrückt und betätigt dazu <Keys.HardKey>All</Keys.HardKey>, so werden
    alle Geräte deselektiert, aber die Werte verbleiben im
    Programmierspeicher.

-   <Keys.SoftKey>Clear Options</Keys.SoftKey> öffnet ein Untermenü mit weiteren, im Folgenden
    beschriebenen Optionen.

-   Mit <Keys.SoftKey>Clear All Fixtures/Selected Fixtures</Keys.SoftKey> bestimmen Sie, ob
    sämtliche, oder nur die aktuell ausgewählten, Geräte aus dem
    Programmierspeicher gelöscht werden sollen.

-   <Keys.SoftKey>Individual Attributes</Keys.SoftKey> erlaubt das Löschen einzelner Attribute
    aus dem Programmierspeicher. Beim Betätigen dieser Taste erhalten
    Sie eine Liste der aktuell im Programmierspeicher vorhandenen
    Attribute, die sich mit der jeweiligen Taste einzeln löschen lassen.

-   <Keys.SoftKey>Clear All Programmers</Keys.SoftKey> löscht alle zurzeit verwendeten
    Programmierspeicher. Dies betrifft insbesondere Werte, die mit der
    Remote, von einem anderen Pult/User in einer Multiuser-Session sowie
    beim Erstellen von Keyframe-Shapes gesetzt wurden.

Optionen im Untermenü "Clear Options":

-   <Keys.SoftKey>Auto Reset Mask</Keys.SoftKey> setzt die Maskierung bei jedem Betätigen der
    'Clear'-Taste automatisch zurück. Alternativ bestimmt \[Remember
    Mask\], dass die Maskierung erhalten bleibt.

-   <Keys.SoftKey>Leave/Zero Preset Fader Levels</Keys.SoftKey> bestimmt, ob Faderwerte von
    Geräten mit <Keys.HardKey>Clear</Keys.HardKey> auf 0 gesetzt werden sollen oder nicht. (Das
    Tastenprofil der Geräteauswahl lässt sich auf 'Einrasten' (Latch)
    stellen, womit der Dimmerkanal des Gerätes eingeschaltet wird,
    sobald das Gerät angewählt wird, siehe [Key Profiles](../system-settings/key-profiles.md)).

-   Mit <Keys.SoftKey>Freeze current values</Keys.SoftKey> lässt sich festlegen, was mit
    LTP-Kanälen (nicht Helligkeit) geschieht, deren Wert modifiziert
    wurde. Steht diese Option auf <Keys.SoftKey>Freeze Current Values</Keys.SoftKey>, so behalten
    diese Kanäle die gewählten Werte. Steht die Option auf \[Release To
    Playback Values\], so werden die Kanäle auf die Werte der aktuell
    laufenden Cues zurückgesetzt. Beispiel: wird ein Cue aufgerufen, in
    dem einige Geräte grün abgespeichert sind, und nun manuell deren
    Farbe auf Rot geändert, so werden diese bei 'Clear' und der Option
    <Keys.SoftKey>Freeze</Keys.SoftKey> rot bleiben; ist hingegen die Option <Keys.SoftKey>Release</Keys.SoftKey>
    angewählt, so werden die Geräte zum gespeicherten Grün
    zurückgesetzt.

-   <Keys.SoftKey>Clear/Maintain Cue Times</Keys.SoftKey> bestimmt, ob Cue-Zeiten im
    Programmierspeicher gelöscht oder aber beibehalten werden (dies ist
    unabhängig von Attributzeiten im Speicher).

Mit dem Fenster [Channel Grid](../controlling-fixtures/viewing-and-editing-fixture-values.md#übersicht-über-die-kanäle-das-channel-grid-fenster) können einzelne Attribute einzelner
Geräte selektiv gelöscht werden.

> Geben Sie mit den Zifferntasten eine Zahl ein und drücken dann <Keys.HardKey>Clear</Keys.HardKey>, so faden im Programmer befindliche HTP-Werte in dieser Zeit (in Sekunden) aus. Gibt man etwa 5 ein und drückt <Keys.HardKey>Clear</Keys.HardKey>, so wird in 5 Sekunden ausgefadet. Damit kann man unauffällig mit dem Programmer arbeiten.

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
[<Keys.HardKey>View / Open</Keys.HardKey>](../titan-basics/workspace-windows.md#auswahl-und-positionierung-der-arbeitsfenster) und wählen den
Attribut-Editor).

![Cell Selection](/docs/images/Cell-Selection.png)

Ebenso können Sie dazu die Unfold-Funktion verwenden: drücken Sie
<Keys.HardKey>Unfold</Keys.HardKey> und dann die entsprechende Geräteschaltfläche. Daraufhin
werden im Gerätefenster Schaltflächen für die einzelnen Zellen
angezeigt. Verwenden Sie dies auf Geräten auf Fadern/Tasten, so werden
die Zellen ab Fader 1 eingeblendet.

Es gibt zwei Möglichkeiten für Unfold:

-   Drücken Sie <Keys.HardKey>Unfold</Keys.HardKey> und wählen Sie mehrere Geräte aus. Die
    entsprechenden Schaltflächen für die Zellen erscheinen sofort im
    Gerätefenster.

-   Wählen Sie die Geräte aus und drücken Sie <Keys.HardKey>Unfold</Keys.HardKey>. Wählen Sie nun
    <Keys.SoftKey>Selected Fixtures</Keys.SoftKey>. Dies bietet sich insbesondere für mehrere
    nicht unmittelbar aufeinander folgende Geräte an.

Um in die normale Anzeige zu wechseln, wählen Sie <Keys.HardKey>Unfold</Keys.HardKey>, dann
<Keys.SoftKey>Exit Unfold</Keys.SoftKey>.

Einzelne Zellen lassen sich auch über eine spezielle Syntax mit den
Zifferntasten auswählen (<Keys.HardKey>THRO</Keys.HardKey> ist auf manchen Pulten 'Through'):

| Tasten                                         | Auswahl                                                 |
|------------------------------------------------|---------------------------------------------------------|
| <Keys.HardKey>.</Keys.HardKey>  	                                     | Alle Zellen der gewählten Geräte                        |
| **n** <Keys.HardKey>.</Keys.HardKey>                                    | Alle Zellen von Gerät **n**                             |
| <Keys.HardKey>.</Keys.HardKey> <Keys.HardKey>THRO</Keys.HardKey> <Keys.HardKey>.</Keys.HardKey> **j**                     | Zellen 1 bis **j** aller gewählten Geräte               |     
| **n** <Keys.HardKey>.</Keys.HardKey> <Keys.HardKey>THRO</Keys.HardKey>                           | Alle Zellen der Geräte ab Nr. **n** des jeweiligen Typs |
| **n** <Keys.HardKey>THRO</Keys.HardKey> <Keys.HardKey>.</Keys.HardKey> **j**                     | Kurzform, s.o.                                          |
| **n** <Keys.HardKey>.</Keys.HardKey> <Keys.HardKey>THRO</Keys.HardKey> **i**                     | Zellen 1 bis **i** von Gerät **n**                      |
| <Keys.HardKey>.</Keys.HardKey> **m**          		                     | Zelle **m** aller ausgewählten Geräte                   |
| **n** <Keys.HardKey>.</Keys.HardKey> <Keys.HardKey>THRO</Keys.HardKey> **i** <Keys.HardKey>.</Keys.HardKey> **j**         | Zellen 1 bis **j** der Geräte **n** bis **i**           |
| <Keys.HardKey>.</Keys.HardKey> **m** <Keys.HardKey>THRO</Keys.HardKey>                           | Zellen ab **m** der gewählten Geräte                    |
| **n** <Keys.HardKey>.</Keys.HardKey> **m**                              | Zelle **m** von Gerät **n**                             |
| <Keys.HardKey>.</Keys.HardKey> **m** <Keys.HardKey>THRO</Keys.HardKey> <Keys.HardKey>.</Keys.HardKey> **j**               | Zellen **m** bis **j** aller gewählten Geräte           |    
| **n** <Keys.HardKey>.</Keys.HardKey> **m** <Keys.HardKey>THRO</Keys.HardKey>                     | Zellen ab **m** des Gerätes **n**                       |
| <Keys.HardKey>.</Keys.HardKey> **m** <Keys.HardKey>THRO</Keys.HardKey> **j**                     | Kurzform, s.o.                                          |
| **n** <Keys.HardKey>.</Keys.HardKey> **m** <Keys.HardKey>THRO</Keys.HardKey> **i**               | Zellen **m** bis **i** von Gerät **n**                  |
| **n** <Keys.HardKey>THRO</Keys.HardKey> **i** <Keys.HardKey>.</Keys.HardKey>                     | alle Zellen der Geräte **n** bis **i**                  |
| **n** <Keys.HardKey>.</Keys.HardKey> **m** <Keys.HardKey>THRO</Keys.HardKey> **i** <Keys.HardKey>.</Keys.HardKey>         | Zellen ab **m** der Geräte **n** - **i**                |
| **n** <Keys.HardKey>THRO</Keys.HardKey> **i** <Keys.HardKey>.</Keys.HardKey> **j**               | Zelle **j** der Geräte **n** - **i**                    |
| **n** <Keys.HardKey>.</Keys.HardKey> **m** <Keys.HardKey>THRO</Keys.HardKey> **i** <Keys.HardKey>.</Keys.HardKey> **j**   | Zellen **m** - **j** der Geräte **n** - **i**           |
| **n** <Keys.HardKey>THRO</Keys.HardKey> <Keys.HardKey>.</Keys.HardKey> **j**                     | Zellen 1 - **j** von Gerät **n**                        |
| **n** <Keys.HardKey>.</Keys.HardKey> **m** <Keys.HardKey>THRO</Keys.HardKey> <Keys.HardKey>.</Keys.HardKey> **j**         | Zellen **m** - **j** von Gerät **n**                    |

-   Die Auswahl von Zellen kann als separate Gruppe gespeichert werden.
    Damit können später verschiedene Zusammenstellungen von Zellen
    aufgerufen werden, ohne jedes Mal den Attribut Editor oder Unfold
    zu verwenden.

## Einstellen von Attributen mit den Encodern

"Attribute" sind die einzelnen Funktionen des Gerätes, wie Pan
(Schwenken), Tilt (Neigen), Farbe, Dimmer etc. Wählen Sie die zu
bearbeitenden Attribute mit den IPCGBESFX Attribut-Tasten, und stellen Sie den
gewünschten Wert mit den Rädern ein. Die verfügbaren Attribute sind
abhängig vom Gerätetyp. Dimmerkanäle besitzen nur das Attribut 'Dimmer'.

Im Display direkt über den Encodern werden die aktuelle Attributbank (hellgrau) 
und die momentanen Werte bei den Encodern angezeigt. Ein hellblauer Kreis markiert 
Attribute im Programmer. Die genaue Anzeige der Werte ist davon abhängig, ob 
das Attribut kontinuierlich gesteuert werden kann (Prozent-Anzeige) oder ob 
zwischen verschiedenen Werten umgeschaltet wird (z.B. feste Farben oder Gobos).

![Wheels](/docs/images/Wheels.png)

Die Attribute können auch im [Attribute Editor Fenster](../controlling-fixtures/using-the-select-buttons-and-wheels.md#das-fenster-attribut-editor) eingestellt werden.

>	Auf dem Pearl Expert dienen je nach Benutzereinstellung die Encoder des
	Touchwings zum Einstellen der Attribute.

Jede einzelne Attribut-Taste kann mehrere Attribute steuern, von denen
jedes einem Rad zugeordnet ist. Beim Sapphire Touch werden mit dem
Trackball Pan und Tilt gesteuert; der äußere Ring steuert normalerweise 
den Dimmer, wobei sich dies mit der Taste <Keys.HardKey>Assign</Keys.HardKey> direkt daneben ändern lässt.

1. Nach der Anwahl der betreffenden Geräte betätigen Sie die Taste des
einzustellenden Attributs.

2. Benutzen Sie die Encoder, um den Wert des Attributs einzustellen.
Das Display oberhalb der Räder zeigt, welche Attribute momentan
gesteuert werden, und die verfügbaren Einstellungen lassen sich mit den
Encoder durchschalten.\
\
Ebenso können die einzelnen Werte im 'Walzen'-Fenster des Touchscreens
durchgeschaltet werden. Für stufenlos steuerbare Funktionen (etwa ein
Dimmer) schaltet die Walze auf 100% bzw. 0.

3. Wiederholen Sie Schritt 1 und 2, um weitere Attribute der gewählten
Geräte einzustellen.

---

Weitere wissenswerte Dinge zu Attributen:

![Toggle Attributes](/docs/images/Toggle-Attributes.png)

-   Wird im Display rechts neben den Attributen ein kleiner Pfeil angezeigt,
	so bedeutet das, dass auf dieser Bank mehr als drei Attribute zu steuern sind. 
	In diesem Fall kann man durch mehrfaches Anwählen der Attributbank durch 
	die Attribute durchschalten. Angenommen ein Scheinwerfer habe die Attribute 
	Red, Green, Blue, Amber und White, so wird beim ersten Klicken auf <Keys.HardKey>Colour</Keys.HardKey> 
	Red, Green und Blue gesteuert und beim nächsten Klick Amber und White.

-   Befindet sich ein Attribut im Programmierspeicher, so wird es hellblau
    angezeigt (siehe 'Green' in obigem Bild). Dies ermöglicht einen
    schnellen Überblick darüber, was momentan im Program­mierspeicher
    ist.

-   Wird das angewählte Attribut nicht im Display oberhalb der Räder
    angezeigt, so ist es für die angewählten Geräte nicht verfügbar.

-   Die Räder arbeiten in einem 'Beschleunigungsmodus'. Wird ein Rad
    schnell bewegt, so folgt das Gerät schnell und in groben
    Abstufungen. Wird es dagegen langsam bewegt, folgt das Gerät in
    kleinstmöglichen Schritten.

-   Wird beim Drehen des Rades die <Keys.HardKey>AVO</Keys.HardKey>-Taste gedrückt, so arbeitet
    das Rad im 'Schnell'-Modus: eine Radumdrehung durchläuft den
    gesamten Bereich des Attributes. Wird etwa bei gedrückter
    <Keys.HardKey>AVO</Keys.HardKey>-Taste das Rad für Pan bewegt, so macht das Gerät bei einer
    Radumdrehung einen kompletten Schwenk von einem Anschlag zum
    anderen.

-   Für einige LED-Geräte mit Farbmischung gibt es eine 'virtuelle
    Dimmerfunktion', wenn das Gerät selbst über keinen Dimmer verfügt:
    dazu wirkt das Intensity-Rad als Hauptregler für die einzelnen
    Farben.

## Das Fenster 'Attribut-Editor'

Für Attribute mit festen Werten wie Gobos oder Farbräder ist das Fenster
'Attribut-Editor' ggf. besser geeignet als die Encoder. Es bietet darüber
hinaus einen Farbwähler für Geräte mit RGB- oder CMY-Farbmischung.

Drücken Sie zweimal auf [<Keys.HardKey>View / Open</Keys.HardKey>](../titan-basics/workspace-windows.md#auswahl-und-positionierung-der-arbeitsfenster) und wählen <Keys.SoftKey>Attribute Editor</Keys.SoftKey>, um den
Attribut-Editor einzublenden. Oder klicken Sie auf den Attribut-Namen
direkt unterhalb der IPCGBES-Schaltflächen auf dem Display.

Die Schaltflächen links im Fenster 'Attribut Control' wählen das zu
ändernde Attribut.

![Attribute Editor](/docs/images/Attribute-Editor.png)

Der übrige Bereich des Fensters enthält Schaltflächen und
Steuerelemente, um den Attributwert einzustellen. Bei Attributen mit
festen Werten (Gobos, Farben etc.) gibt es für jeden einzelnen Festwert
eine Schaltfläche; dies ermöglicht eine deutlich schnellere Auswahl als
mit den Rädern.

Beim Aufruf eines Wertes wird dessen Schaltfläche blau, um zu
signalisieren, dass dieser Wert im Programmierspeicher ist. Ein erneutes
Betätigen der Schaltfläche löscht diesen Wert aus dem
Programmierspeicher.

Beim Anwählen des Titels einzelner Attribute (z.B. 'Gobo 2') werden
sämtliche Einstellmöglichkeiten dieses Attributs im gesamten Fenster
angezeigt. Siehe nächstes Bild. Bilder der Gobos werden angezeigt,
sofern die Personality die entsprechenden Informationen enthält.

![Gobo Selection](/docs/images/Gobo-Selection.png)

Für stufenlos einstellbare Attribute (z.B. Dimmer) erscheint ein Regler
im Display, sobald die Schaltfläche gedrückt gehalten wird. Der Regler
lässt sich einfach durch Bewegen des Fingers verstellen.

![Range slider](/docs/images/Range-slider.png)

Verfügt das gewählte Gerät über Teilgeräte (Subfixtures), so erscheinen
oben im Attribut-Editor Schaltflächen zur Auswahl der einzelnen Zellen
bzw. des Gesamtgerätes (links). Die Buttons der einzelnen Zellen werden
in der Anordnung der wirklichen Zellen angezeigt.

![Cells](/docs/images/Cell-Selection.png)

Einzelne Attribute haben je nach Funktion gesonderte Anzeigen:

### Dimmer/Shutter

![Intensity Shutter](/docs/images/Intensity-Shutter.png)

Speziell unterteilter Fader und Buttons für 0%, 100%, +5%, -5% sowie
Locate (nur Dimmer).

### Position

![Position](/docs/images/Position.png)

Pan/Tilt-Steuerung per X/Y-Raster. Dabei werden die angewählten Geräte
durch Kreis angezeigt, was die Steuerung vereinfacht. Weitere
Steuerungmöglichkeiten:

-   Mit <Keys.SoftKey>Locate</Keys.SoftKey> wird die Position auf 50% Pan/50% Tilt gesetzt, ohne
    andere Attribute zu verändern.

-   [Flip](../controlling-fixtures/using-the-select-buttons-and-wheels.md#flip) dreht
    den Bügel von Movinglights in eine andere Position, wobei der gleiche Punkt     
    anvisiert wird.

-   Mit <Keys.SoftKey>Align</Keys.SoftKey> wird Pan/Tilt auf die Werte des zuletzt angewählten
    Gerätes gesetzt. Möchte man z.B. alle angewählten Geräte auf den
    Wert des ersten Gerätes bringen, so wählt man die Geräte in der
    Reihenfolge 2-3-4-1 aus und klickt <Keys.SoftKey>Align</Keys.SoftKey>.

-   Mit Pan/Tilt Lock lässt sich die Bearbeitung mehrerer Geräte auf
    einmal vereinfachen, indem entweder Pan oder Tilt kurzzeitig von der
    Bearbeitung ausgenommen wird. Hat man z.B. die gerät in Pan
    aufgefächert und will nur Tilt etwas nachziehen, so verhindert Pan
    Lock, dass der bereits eingestellte Fächer verlorengeht.

-   Mit dem Button <Keys.SoftKey>Fine</Keys.SoftKey> lässt sich die Auflösung verringern, so dass
    man die gewünschte Position sehr genau ansteuern kann.

### Farbmischung: Channel

Für Geräte mit Farbmischung gibt es mehrere Möglichkeiten, die Farbe
einzustellen; diese sind in verschiedenen Reitern oben im
Attribut-Editor zusammengefasst.

![Attribute Editor - Colour Channels](/docs/images/Attribute-Editor-Channels.png)

Dieses Fadersystem bietet je einen Regler pro tatsächlich im Gerät
vorhandenen Farb-Attribut; entsprechend hängt die Anzahl und Art der
Fader vom gewählten Gerät ab (z.B. sieben Fader beim ETC Lustr). Dies
bietet sich z.B. bei der gezielten Bearbeitung einzelner Farbtöne an,
oder etwa dann, wenn man nur einzelne Kanäle (z.B. Weiß oder UV)
speichern möchte.

### Farbmischung: HSI/RGB/CMY

![Attribute Editor - Colour Mix](/docs/images/Attribute-Editor-HSI-RGB-CMY.png)

HIS/RGB/CMY bietet sowohl den klassischen Colourpicker als auch Fader
für die unterschiedlichen Farbmischsysteme, die sich sämtlich
gegenseitig beeinflussen, abhängig davon, welchen Wert man gerade
verändert. Klickt man in den Colourpicker, so werden alle Fader auf den
für diese Farbe erforderlichen wert gesetzt. So lässt sich z.B. mittels
Saturation eine Pastellfarbe erreichen, ohne den Farbton (Hue) zu
verändern.

Für Geräte mit Farbmischung funktionieren stets alle drei Fadersysteme
parallel, unabhängig davon, nach welchem System genau das Gerät
arbeitet.

### Farbmischung: Picker

![Attribute Editor - Colour Picker](/docs/images/Attribute-Editor-Picker.png)

Dies ist der aus früheren Versionen gewohnte Colourpicker: in dem großen
Feld lässt sich die gewünschte Farbe wählen (Hue und Saturation),
während der Fader rechts daneben die Helligkeit (Intensity, I) regelt.

### Farbmischung: Filters

![Attribute Editor - Colour Filters](/docs/images/Attribute-Editor-Filters.png)

Auswahl der Farbe nach Farbfilter-Nummer; dabei stehen die Systeme von
Lee, Roscolux und GamColor zur Verfügung. Mit der Suchleiste oben im
Fenster kann nach einer bestimmten Nummer gesucht werden. Per
Kontext-Button kann zwischen <Keys.SoftKey>Order Filters by Number</Keys.SoftKey> (nach Nummer
sortieren) und <Keys.SoftKey>Order Filters by Hue</Keys.SoftKey> (nach Farbton sortieren)
umgeschaltet werden.

> Für Geräte mit RGBW, RGBA oder WW/CW-Steuerung steuert der Colourpicker auch die Kanäle für Weiß und Amber. Dies ist seit Titan Version 9 implementiert; in älteren Versionen müssen diese Attribute manuell eingestellt werden.

### Medienserver/Active Fixtures

Aktive Geräte (z.B. Medienserver) zeigen ein Vorschaubild des
Video­clips auf der jeweiligen Schaltfläche. Dabei muss der Medienserver
das Protokoll CITP unterstützen sowie als Aktives Gerät gepatcht sein,
damit diese Vorschauen angezeigt werden können.

Für Ai-Server und Synergy sei auf [Synergy](../synergy.md) verwiesen, wo
Einrichtung und Verwendung ausführlich beschrieben sind. 

![Clip Selection](/docs/images/Clip-Selection.png)

### Shutterblenden/Keystone

Geräte, bei denen man eine Kissenentzerrung (Keystoning) oder
Blendenschieber per DMX steuern kann, lassen sich ebenfalls komfortabel
per Attribut Editor steuern: ziehen Sie die Ecken bzw. Kanten auf dem
Bildschirm einfach auf die gewünschte Position. Die genaue Darstellung
und Funktionsweise hängt dabei vom jeweiligen Gerät ab.

![Attribute Editor - Blades](/docs/images/Attribute-Editor-Blades.png)

> 	Ggf. sind aktualisierte Personalities erforderlich, um die 
	Keystone/Blendenschieber-Funktionalität zu nutzen. Laden Sie dazu 
	die neueste [Personality-Library](../fixture-personalities.md#herunterladen-der-personalities-bei-avolites) 
	herunter, installieren diese und [aktualisieren die bereits gepatchten Geräte](../patching/changing-the-patch.md#bereits-gepatchte-personalities-aktualisieren).

## Direkte Eingabe für Attributwerte

Für aktuell den Rädern zugeordnete
Attribute lassen sich direkt numerische Werte eingeben. Dazu müssen Sie
sich im Hauptmenü befinden (drücken Sie <Keys.HardKey>Exit</Keys.HardKey>, bis die senkrechte
Menüleiste 'Program Menu' anzeigt).

Geben Sie mit den Zifferntasten eine Zahl ein und betätigen dann eine
der Multifunktionstasten, um den Wert einem Attribut zuzuordnen. Die
Beschriftung der Taste zeigt, wie der Wert vom Gerät dargestellt wird
(z.B. <Keys.SoftKey>Gobo 5</Keys.SoftKey> oder <Keys.SoftKey>Deep Blue</Keys.SoftKey>).

![Attribute Softkey](/docs/images/Attribute-Softkey.png)

Für Attribute, deren Wert in Prozent dargestellt wird, wie etwa Dimmer
oder Farbmischung, geben Sie einen Wert zwischen 0 und 100 ein, um den
entsprechenden Prozentwert einzustellen. Für Attribute mit mehreren
Festwerten, wie z.B. feste Farbräder, geben Sie den Index des
gewünschten Wertes ein; um etwa die dritte Farbe des Farbrades
anzuwählen (wie in der Liste über dem Rad angegeben), geben Sie eine 3
ein.

## Eingeben von Attributwerten mit den @-Tasten

Drückt man die <Keys.HardKey>@</Keys.HardKey>-Taste bei einem der Räder, so öffnet sich das Menü zum
numerischen Eingeben der Attributwerte.

Dieses Menü lässt sich auch öffnen, indem man auf den mittleren Bereich
der Anzeige der Attributwerte (oberhalb der Räder) anklickt, oder durch
Anklicken eines Attributs im Channel Grid (Kanalübersicht).

(Beim Tiger Touch dienen die drei Tasten zwischen den Rädern als
<Keys.HardKey>@</Keys.HardKey>-Tasten, beim Pearl Expert gibt es diese Tasten nicht, und man muss
eine der anderen Varianten nutzen).

Folgende Funktionen stehen auf den Menütasten zur Verfügung:

-   Select Function (Funktion wählen): damit werden die verschiedenen
    Festwerte auf die Multifunktionstasten zur Auswahl gelegt (für
    Dimmerkanäle gibt es eine Reihe von Abstufungen)

-   Touch/Clear: lädt das Attribut in den Programmierspeicher oder
    entfernt es daraus

-   Locate: setzt das Attribut auf Locate-Werte (wird nicht in den
    Programmierspeicher übernommen)

-   Release: gibt das Attribut frei

-   Off: setzt das Attribut auf Off. Damit wird es vorübergehend
    deaktiviert, der Wert bleibt aber im Programmierspeicher und kann
    mit On wieder aktiviert werden.

-   On: aktiviert das Attribut wieder zu On (wird On in einen Cue oder
    eine Palette verschmolzen, so wird ein vorher mittels Off
    deaktivierter Wert wieder aktiv)

-   Freeze/Unfreeze: Fixieren des Attributes bzw. Fixierung aufheben

## Anwählen von Dimmern/Geräten nach (Kanal-)Nummer

In bestimmten Situationen, etwa beim Programmieren einer Vielzahl von
Dimmern, kann es einfacher sein, die zu ändernden Kanäle anhand ihrer
Nummer auszuwählen. Über das 'Channel'-Menü geht das für Dimmer und
Bewegungsscheinwerfer. Zum Aufruf des 'Channel'-Menüs drücken Sie die
Taste <Keys.HardKey>Fixture</Keys.HardKey> links oberhalb des Zifferntastenblocks.

Ebenso können Sie einfach die entsprechenden Ziffern eingeben; enthält
Ihre Eingabe 'Through', 'And' oder '@', so wird automatisch das
'Channel'-Menü aufgerufen.

Through, And und @ stehen je nach Pult sowohl als Menü-Taste im
Fixtures-Menü als auch über die Pfeiltasten direkt beim Ziffernblock zur
Verfügung.

Die Geräte lassen sich anhand der Gerätenummer (User Number), der Nummer
des Gerätebuttons (Handle Number) oder der DMX-Adresse anwählen, je nach
Einstellung der Menütaste A.

Bei der Benutzung des 'Channel'-Menüs empfiehlt es sich, dieses zu
fixieren (Taste <Keys.HardKey>Menu Latch</Keys.HardKey>).

-   Zum Anwählen eines Gerätes die Nummer eingeben und <Keys.HardKey>Enter</Keys.HardKey>
    drücken.

-   Um mehr als ein Gerät anzuwählen, drücken Sie die Funktionstaste
    <Keys.SoftKey>And</Keys.SoftKey> zwischen den einzelnen Nummern. Beispiel: 1 <Keys.SoftKey>And</Keys.SoftKey> 2
    <Keys.SoftKey>And</Keys.SoftKey> 5 <Keys.HardKey>Enter</Keys.HardKey> wählt die Geräte 1, 2, 5.

-   Um eine Folge von Geräten anzuwählen, drücken Sie <Keys.SoftKey>Thro</Keys.SoftKey>.
    Beispiel: 1 <Keys.SoftKey>Thro</Keys.SoftKey> 8 <Keys.HardKey>Enter</Keys.HardKey> wählt 1-8. Lässt man die zweite 
	Zahl weg, so werden alle noch folgenden Geräte des gleichen Typs angewählt.

-   Um einzelne Geräte in einer Folge auszulassen, drücken Sie <Keys.SoftKey>Not</Keys.SoftKey>.
    Beispiel: 1 <Keys.SoftKey>Through</Keys.SoftKey> 4 <Keys.SoftKey>Not</Keys.SoftKey> 3 <Keys.HardKey>Enter</Keys.HardKey> wählt 1, 2, 4.

-   Die Taste <Keys.SoftKey>@</Keys.SoftKey> stellt den Dimmer-Wert der ausgewähl­ten Geräte ein,
    etwa: 1 <Keys.SoftKey>Through</Keys.SoftKey> 8 <Keys.SoftKey>@</Keys.SoftKey> 5 <Keys.HardKey>Enter</Keys.HardKey> setzt Gerät 1-8 auf 50% (in den
    Benutzereinstellungen lässt sich einstellen, ob 50% durch "5" oder
    "50" eingegeben wird, siehe [Benutzereinstellungen](../system-settings/user-settings.md)). Beim Betätigen
    der Taste <Keys.SoftKey>@</Keys.SoftKey> erscheinen außerdem Optionen auf den Funktionstasten
    für 'Full' (100%), 'Off' (0) und +/- (schrittweise
    erhöhen/vermindern).

-   Zur numerischen Anwahl von Gruppen verwenden Sie die Taste 'Group';
    Beispiel: <Keys.HardKey>Group</Keys.HardKey> 1 <Keys.SoftKey>And</Keys.SoftKey> <Keys.HardKey>Group</Keys.HardKey> 2 <Keys.SoftKey>Not</Keys.SoftKey> 5 <Keys.HardKey>Enter</Keys.HardKey> selektiert
    Gruppe 1 und 2 außer Gerät 5.

-   Die <Keys.HardKey>Locate</Keys.HardKey>-Taste macht das Betätigen der <Keys.HardKey>Enter</Keys.HardKey>-Taste
    überflüssig, wenn die Geräte angewählt und dann auf die
    Startposition gebracht werden sollen: 1 <Keys.SoftKey>Through</Keys.SoftKey> 4 <Keys.HardKey>Locate</Keys.HardKey>
    wählt Gerät 1 bis 4 aus und initialisiert diese.

![Syntax Selection](/docs/images/Syntax-Selection.png)

-   Beim Eingeben eines Kommandos wird dieses in der Kommandozeile des
    Displays angezeigt. Mittels der grauen ←<Keys.HardKey>Back</Keys.HardKey>Taste kann man
    schrittweise zurückgehen; mit der grauen →<Keys.HardKey>@</Keys.HardKey>Taste lässt sich die
    Eingabe abbrechen.

-   Die Funktionen AND, THRO sowie @ stehen auch auf den Pfeiltasten zur
    Verfügung (siehe deren Beschriftung).

## Geräteauswahl nach Muster

Beim Programmieren einer Show ist es oftmals wünschenswert, verschiedene
Muster von Geräten auszuwählen. Anstatt nun die Geräte einzeln aus- und
abzuwählen, gestattet es das Pult, Geräte aus einer Gesamtauswahl nach
einem bestimmten Muster zu selektieren.

1. Selektieren Sie einige Geräte.

2. Drücken Sie die weiße Taste <Keys.HardKey>All</Keys.HardKey> (bzw. <Keys.HardKey>All/Even/Odd</Keys.HardKey>).

3. Wählen Sie ein Muster von den Menütasten. Die gewählte Auswahl wird
geändert, so dass z.B. nur die ungeraden (odd) Geräte ausgewählt werden.\
![Pattern Select](/docs/images/Pattern-Select.png)

4. Drücken Sie die Taste <Keys.HardKey>Fix+1</Keys.HardKey> oder <Keys.HardKey>Fix-1</Keys.HardKey>, um den nächsten
Schritt im gewählten Muster anzuwählen (auf manchen Pulten <Keys.HardKey>Next</Keys.HardKey> und <Keys.HardKey>Prev</Keys.HardKey>).

5. Um die Musterauswahl zu beenden, drücken Sie zweimal <Keys.HardKey>All</Keys.HardKey>.

-   Mittels <Keys.SoftKey>Direction</Keys.SoftKey> (Richtung) kann eingestellt werden, dass die
    Geräte-Reihenfolge einer bestimmten Richtung folgt; dabei wird das
    Layout der Geräte herangezogen. Damit lassen sich z.B. sehr einfach
    symmetrische Paare von Geräten wählen. Auch beim Verwenden von 
	[Fixture Overlap](../cues/cue-timing.md#einstellen-von-überblendzeiten-und-geräteversatz) 
	ist die Richtung von Bedeutung.

-   Drückt man <Keys.HardKey>Clear</Keys.HardKey>, so wird die Richtung (Direction) wieder auf
    'None' zurückgesetzt. Dies lässt sich mit <Keys.SoftKey>Clear Options</Keys.SoftKey> \[Clear
    / Maintain Direction\] umstellen (halten Sie <Keys.HardKey>Clear</Keys.HardKey> gedrückt zum
    Einstellen der Clear-Optionen).

-   Wenn Sie etwa einen Chaser mit 16 Geräten programmieren, und dazu
    jedes 4. synchron einstellen wollen, wählen Sie zunächst alle 16
    Geräte aus, drücken dann <Keys.HardKey>All</Keys.HardKey>, dann <Keys.SoftKey>1 in x</Keys.SoftKey>, und danach 
	<Keys.SoftKey>1 in 4</Keys.SoftKey>. Nun sind die Geräte 1, 5, 9 und 13 aus der vorherigen 
	Auswahl zum Bearbeiten angewählt. Drücken Sie <Keys.HardKey>Fix+1</Keys.HardKey> bzw. <Keys.HardKey>Next</Keys.HardKey>, 
	so werden die Geräte 2, 6, 10 und 14 angewählt. Nach der Anwahl des 4. 
	Schrittes erscheint wieder der erste Schritt des Musters, bis 
	zweimal <Keys.HardKey>All</Keys.HardKey> betätigt wird.

-   Sie können sehr einfach eigene Muster programmieren: geben Sie dazu
    z.B. mit den Ziffern- und Funktionstasten "2" A <Keys.SoftKey>In</Keys.SoftKey> "6" <Keys.HardKey>Enter</Keys.HardKey> ein.

-   Diese Funktionen stehen ebenfalls auf den Menütasten zur Verfügung,
    wenn man einen Gruppen-Button gedrückt hält.

## Auswahl von Geräten in einem Cue

Zur Auswahl der Geräte, die in einem bestimmten Cue enthalten sind,
dient die 'Select If'-Funktion.

Drücken Sie dazu <Keys.HardKey>Select If</Keys.HardKey> gefolgt von dem Speicherplatz. (Auf
älteren Pulten gibt es keine gesonderte <Keys.HardKey>Select If</Keys.HardKey>-Taste; in diesem
Fall drücken Sie <Keys.HardKey>Fixture</Keys.HardKey> und dann <Keys.SoftKey>Select If</Keys.SoftKey>).

Ebenso lässt sich 'Select If' mit den Tasten <Keys.HardKey>@</Keys.HardKey> und <Keys.HardKey>Thro</Keys.HardKey>
verwenden, um alle Geräte mit einer bestimmten Helligkeit anzuwählen:\
\@X: Geräte mit der Helligkeit X\
@ Thro X: Geräte mit der Helligkeit 0 - X\
@ X Thro: Geräte mit der Helligkeit X - Full\
@ X Thro Y: Geräte mit der Helligkeit zwischen X und Y\
@@: Geräte mit der Helligkeit \> 0.

Pegelangaben können entweder in der Schreibweise 0-9 oder 00-99 gemacht
werden, abhängig von der [Benutzereinstellung](../system-settings/user-settings.md) <Keys.SoftKey>Channel Levels Set In</Keys.SoftKey>.

## Attributgruppen -- IPCGBES-FX

Zur Vereinfachung sind die Attribute nach ihrer grundlegenden Funktion
gruppiert und mit den Buchstaben IPCGBESFX versehen:

I-Intensity/Helligkeit (Dimmer, Stroboskop, Shutter)

P-Position (Pan, Tilt)

C-Colour/Farbe (feste Farbräder, Farbmischung)

G-Gobo (Goboräder, Rotation, Index)

B-Beam (Iris, Fokussierung, Zoom, Beam Shaper)

E-Effects/Effekte (Prisma)

S-Special (Geschwindigkeit)

FX-Shapes, Pixelmapper

Diese Gruppen werden vielfach verwendet, um die einzelnen Attribute zum
Bearbeiten auszuwählen, insbesondere beim Maskieren der Attribute, um
sie vom Speichern auszuschließen.

![Attribute Groups](/docs/images/Attribute-Groups.png)

Über der Attribut-Walze im Touchscreen wird die aktuell ausgewählte
Gruppe mit einer grauen Box angezeigt. Weiter wird die Attributgruppe
blau hinterlegt, wenn sich Attribute dieser Gruppe im
Programmierspeicher befinden. So ist im obigen Bild die Farbe zum
Bearbeiten angewählt, während Intensity und Special bereits verändert
(und damit im Programmierspeicher) sind.

## Einzeln durch die Geräte einer Auswahl durchschalten

Sind mehrere Geräte oder eine Gruppe von Geräten ausgewählt, so bietet
das Pult die Möglichkeit, einzeln durch die angewählten Geräte
durchzuschalten. Dies vereinfacht das Programmieren, da man so nicht
jedes Gerät einzeln selektieren muss.

Für diese Funktion werden die Tasten <Keys.HardKey>Fix-1</Keys.HardKey> (zurück), <Keys.HardKey>Fix+1</Keys.HardKey>
(weiter), <Keys.HardKey>All</Keys.HardKey> (alle) und <Keys.HardKey>HiLight</Keys.HardKey> (hervorheben) genutzt.

1. Wählen Sie mehrere Geräte oder eine Gruppe von Geräten.

2. Mit den Tasten <Keys.HardKey>Fix-1</Keys.HardKey> und <Keys.HardKey>Fix+1</Keys.HardKey> wird jeweils ein Gerät
   ausgewählt bzw. weitergeschaltet (in der Reihenfolge der Auswahl). 
   Auf manchen Pulten dienen dazu die Tasten <Keys.HardKey>Prev</Keys.HardKey> und <Keys.HardKey>Next</Keys.HardKey> .

3. Die Taste <Keys.HardKey>All</Keys.HardKey> wählt alle Geräte aus, die sich im
   Programmierspeicher befinden (alle Geräte, die seit der letzten
   Betätigung von <Keys.HardKey>Clear</Keys.HardKey> angewählt wurden).

-   Die 'HiLight'-Funktion ermöglicht es, das aktuelle Gerät
    hervorzuheben, siehe nächster Abschnitt.

## Das ausgewählte Gerät bei Fix+1/Fix-1 hervorheben

Beim Durchschalten durch eine Geräteauswahl mit den \<Fix+1/\
Fix-1/All\>-Tasten lässt sich das jeweils angewählte Gerät hervor­heben.
Dies vereinfacht es zu sehen, welches Gerät man gerade steuert. Die
anderen Geräte in der Auswahl werden gleichzeitig heruntergedimmt
('Lowlight').

-   Betätigen Sie die <Keys.HardKey>HiLight</Keys.HardKey>-Taste, um diese Funktion zu
    aktivieren. Ein weiteres Betätigen der Taste schaltet die Funktion
    wieder aus. Ist der Highlight-Modus aktiv, so werden die davon
    betroffenen Attribute (z.B. der Dimmer) überschrieben und können
    nicht editiert oder gespeichert werden.

-   Die für Highlight/Lowlight verwendeten Werte lassen sich ändern:
    stellen Sie den gewünschten Wert ein, drücken Sie <Keys.HardKey>Record</Keys.HardKey>, dann
    <Keys.HardKey>HiLight</Keys.HardKey>, und wählen dann <Keys.SoftKey>Store Highlight State</Keys.SoftKey> oder \[Store
    Lowlight State\].

## Nicht ausgewählte Geräte ausblenden (Remainder Dim)

Mit "Remainder Dim" (<Keys.HardKey>Rem Dim</Keys.HardKey> oder <Keys.HardKey>Avo</Keys.HardKey>+<Keys.HardKey>All</Keys.HardKey>) werden die nicht
angewählten Geräte ausgeblendet; dabei wird der Wert Intensity=0 in den
Programmierspeicher geschrieben und entsprechend beim Speichern
übernommen.

## Geräte miteinander abgleichen

<Video videoId="xZrVhnY1hnA" title="Align Fixtures" />

Die Werte einzelner Attribute lassen sich mit der 'Align'-Funktion von
einem auf andere Geräte kopieren. So kann man etwa Geräte angleichen,
die man beim Programmieren eines Cues versehentlich nicht mit angewählt
hatte.

Es lassen sich mehrere Geräte auf einmal abgleichen, sowohl durch
Verwenden von Gruppen als auch durch Auswahl einzelner Geräte. Stimmt
die Anzahl der anzugleichenden Geräte nicht mit der der ‚Ziel'-Geräte
überein, so gibt es mehrere Optionen, die bestimmen, wie damit verfahren
wird.

1. Wählen Sie die anzugleichenden Geräte, entweder einzeln, oder unter
Verwendung von Gruppen.

2. Im Hauptmenü drücken Sie <Keys.HardKey>Fixture Tools</Keys.HardKey>/<Keys.HardKey>ML Menu</Keys.HardKey>, dann \[Align
Fixtures\].

3. Wählen (maskieren) Sie die zu kopierenden Attribute (mittels der
Attribut-Tasten rechts, oder mit den Funktionstasten, um alle Attribute
ein- oder auszuschließen)

4. Betätigen Sie die Auswahltaste des Gerätes bzw. der Gruppe, von dem
die Attribute übernommen werden sollen.

5. Drücken Sie <Keys.SoftKey>Align</Keys.SoftKey>

Die Reihenfolge der Geräteauswahl bestimmt, wie die angeglichenen Werte
übertragen werden:

-   Ist die Option <Keys.SoftKey>Auto Reset Mask</Keys.SoftKey> aktiviert, so wird die
    Attributmaske stets auf 'Alle' zurückgesetzt, sobald man das
    Align-Menü aufruft. Mit <Keys.SoftKey>Remember Mask</Keys.SoftKey> dagegen wird die
    eingestellte Maske beibehalten.

-   Mit <Keys.SoftKey>Spread Attributes</Keys.SoftKey> werden Attributwerte gleichmäßig
    aufgeteilt, wenn die Anzahl der anzugleichenden Geräte nicht mit der
    Anzahl der 'Ziel'-Geräte übereinstimmt. Mit <Keys.SoftKey>Repeat Attributes</Keys.SoftKey>
    dagegen werden die exakten Werte mehrfach wiederholt.

-   Mit <Keys.SoftKey>Align Programmer Attributes</Keys.SoftKey> werden nur Attribute
    angeglichen, die bereits im Programmer sind. Mit \[Align All
    Attributes\] dagegen werden sämtliche Attribute der Geräte
    angeglichen, sofern sie in der Maske angewählt sind. Hat man z.B.
    Tilt wie gewünscht eingestellt und im Programmer, so würden mit
    <Keys.SoftKey>Align Programmer Attributes</Keys.SoftKey> alle anderen Geräte nur den
    Tilt-Wert übernehmen, mit <Keys.SoftKey>Align All Attributes</Keys.SoftKey> aber auch den
    Pan-Wert.

-   Wählt man <Keys.SoftKey>Palette References Maintained</Keys.SoftKey>, so werden Paletten auch
    auf den Ziel-Geräten als Referenz auf die Palette gespeichert. Mit
    <Keys.SoftKey>Palette References Lost</Keys.SoftKey> dagegen werden die Referenzen gelöscht
    und nur feste Attributwerte gespeichert.

-   Überschneiden sich die Geräte der Quell- und Zielauswahl, so ist es
    schwierig, den Überblick zu wahren, da alle Geräteschaltflächen
    aktiviert sind. Da hilft es, dass die ausgewählten Geräte in der
    Leiste oben am Bildschirm aufgelistet sind.

## Flip

Kopfbewegte Scheinwerfer können den gleichen Punkt der Bühne mit zwei
verschiedenen Kopfstellungen erreichen. Daher ist es zuweilen
erforderlich, bei einem Gerät diese Kopfstellung zu wechseln, damit das
Gerät synchron mit anderen läuft. Die Flip-Funktion ermöglicht das
schnell und einfach.

1. Wählen Sie das zu bearbeitende Gerät.

2. Im Hauptmenü drücken Sie <Keys.HardKey>ML Menu</Keys.HardKey>, danach C \[Flip Pan and
Tilt\].

Auf der Positions-Seite des Attribut-Editors steht ebenfalls die
Flip-Funktion zur Verfügung.

> Die Einstellungen für Flip sind in der Personality vorgegeben. 
Sollte Flip nicht wie erwartet funktionieren, muss evtl. die 
Personality-Bibliothek aktualisiert werden.

## Fan-Modus

Der Fan-Modus spreizt automatisch Attributwerte über mehrere angewählte
Geräte. Wird er etwa für Pan und Tilt benutzt, so ergibt sich eine
strahlenförmige Verteilung: das erste und letzte Gerät werden dabei am
meisten beeinflusst, das mittlere Gerät am wenigsten. Das Maß der
Spreizung lässt sich mit den Rädern ändern.

Wie bei Abläufen, so ist auch beim Fan-Modus die Reihenfolge der Geräte
bei der Auswahl wesentlich. Die als erstes und als letztes ausgewählten
Geräte werden am meisten von der Spreizung beeinflusst. Wird dazu eine
gespeicherte Gerätegruppe verwendet, so bezieht sich das auf die
Reihenfolge der Geräteauswahl beim Erstellen der Gruppe.

Der Fan-Modus ist nicht auf Pan und Tilt beschränkt, sondern kann auf
jedes Attribut angewendet werden.

1. Wählen Sie die zu bearbeitenden Geräte.

2. Drücken Sie die <Keys.HardKey>Fan</Keys.HardKey>-Taste.

3. Wählen Sie das Attribut, auf das der Effekt angewendet werden soll,
mit den Attribut-Tasten.

4. Stellen Sie das gewünschte Maß von Spreizung mit den Rädern ein.

5. Verlassen Sie den Fan-Modus wieder durch Betätigen der
<Keys.HardKey>Fan</Keys.HardKey>-Taste. Werden andere Geräte angewählt, wird 'Fan' automatisch beendet.

Haben Sie Geräte aus verschiedenen Gruppen ausgewählt, so können Sie
wählen, ob die Gruppenaufteilung beim Fan beachtet werden soll oder
nicht. Haben Sie etwa 12 Geräte auf der Bühne, die in 3 Gruppen à 4
Stück aufgeteilt sind, so können Sie entweder eine gleichmäßige
Verteilung auf alle 12 Geräte, oder ein Aufspreizen innerhalb jeder
Gruppe erreichen.

Während die <Keys.HardKey>Fan</Keys.HardKey>-Taste gedrückt gehalten wird, lassen sich im Menü
verschiedene Einstellungen vornehmen:

-   <Keys.SoftKey>Ignore Groups</Keys.SoftKey>: Sämtliche ausgewählten Geräte werden als eine
    große Gruppe behandelt.

-   <Keys.SoftKey>Fan Group as Fixture</Keys.SoftKey>: alle Geräte innerhalb einer Gruppe werden
    identisch behandelt.

-   <Keys.SoftKey>Fan Within Groups</Keys.SoftKey>: Die Fan-Aufspreizung erfolgt innerhalb jeder
    einzelnen Gruppe.

Ferner lässt sich bei gedrückter <Keys.HardKey>Fan</Keys.HardKey>-Taste die gewünschte Kurve
auswählen. Mit unterschiedlichen Kurven lassen sich unterschiedliche
Effekte erzielen.

Für gute Ergebnisse sind mindestens 4 Geräte erforderlich. Bei einer
ungeraden Anzahl von Geräten wird das mittlere Gerät im Fan-Modus nicht
beeinflusst.

Betätigen Sie die <Keys.HardKey>Fan</Keys.HardKey>-Taste, um den Fan-Modus zu verlassen.
Sämtliche Einstellungen verbleiben dabei im Programmierspeicher.

> Es kann rasch passieren, dass der Fan-Modus versehentlich aktiviert bleibt, was zu der irrigen Annahme führen kann, dass die Räder nicht ordnungsgemäß funktionieren. Stellen Sie daher sicher, den Fan-Modus zu verlassen, wenn Sie mit den Einstellungen fertig sind. Um dies zu vermeiden, gibt es die [Benutzereinstellung](../system-settings/user-settings.md) <Keys.SoftKey>Press and hold Fan</Keys.SoftKey>. Ist diese aktiviert, muss die <Keys.HardKey>Fan</Keys.HardKey>-Taste gedrückt gehalten werden, um den Fan anzuwenden.

### Fan-Kurven

Es lassen sich verschiedene Kurven definieren, die die Fan-Funktion
beeinflussen. Halten Sie dazu <Keys.HardKey>Fan</Keys.HardKey> gedrückt und wählen <Keys.SoftKey>Curve</Keys.SoftKey>. Es
stehen folgende Auswahlmöglichkeiten zur Verfügung:

-   Line: der gewohnte Fan, das erste und letzte Gerät werden am
    meisten, aber gegensinnig beeinflusst, das mittlere Gerät bleibt
    unverändert. Insbesondere sinnvoll bei Pan.\
    ![Fan Line](/docs/images/Fan-Line.png)

-   Mirror- die Gesamtauswahl wird in zwei Hälften geteilt, die in
    entgegengesetztem Sinn gesteuert werden.\
    ![Fan Mirror](/docs/images/Fan-Mirror.png)

-   Wings -- die Gesamtauswahl wird in drei Teile geteilt, deren beide
    äußere in entgegengesetztem Sinn gesteuert werden, während der
    Mittelteil unverändert bleibt.\
    ![Fan Wings](/docs/images/Fan-Wings.png)

-   Arrow -- die ersten und letzten Geräte werden ebenso beeinflusst wie
    die mittleren, aber in entgegengesetzter Richtung. Ebenfalls
    geeignet für Farbmischung, Tilt und Dimmer.\
    ![Fan Arrow](/docs/images/Fan-Arrow.png)

-   Pull Middle -- Das erste und das letzte Gerät bleiben auf dem
    ursprünglichen Wert, das mittlere Gerät wird am meisten beeinflusst.
    Besonders geeignet für Farbmischung, Tilt und Dimmer.\
    ![Fan Pull Middle](/docs/images/Fan-Pull-Middle.png)

-   Pull Ends -- Wie vor, aber das mittlere Gerät bleibt unverändert,
    die äußeren Geräte werden am meisten (aber gleichsinnig)
    beeinflusst. Besonders geeignet für Farbmischung, Tilt und Dimmer.\
    ![Fan Pull Ends](/docs/images/Fan-Pull-Ends.png)

-   Pull End -- Wie vor, aber das erste Gerät bleibt unverändert, das
    letzte Gerät wird am meisten beeinflusst.\
    ![FanPull End](/docs/images/FanPull-End.png)

### Fan-Teile

Die Fan-Funktion, d.h. das Auffächern der Veränderung, lässt sich auch
gruppieren. Wählen Sie dazu die gewünschten Geräte aus, halten <Keys.HardKey>Fan</Keys.HardKey>
gedrückt, und geben die Anzahl der gewünschten Gruppen mit den
Zifferntasten ein:

Normal (1):\
![Fan 1 Part](/docs/images/Fan-1-Part.png)

2:\
![Fan 2 Parts](/docs/images/Fan-2-Parts.png)

3:\
![Fan 3 Parts](/docs/images/Fan-3-Parts.png)

## Speichern von Zeiten für Attribute und Geräte

Fade- und Delayzeiten können direkt für einzelne Geräte oder einzelne
Attribute gesetzt werden. Werden diese dann in einen Cue gespeichert, so
sind auch die Zeiten Bestandteil des Cues.

Zeiten lassen sich auf mehrere Arten einstellen:

-   Mit der Funktionstaste <Keys.SoftKey>Wheels=</Keys.SoftKey> im Hauptmenü lassen sich die
    Räder in die entsprechende Betriebsart schalten, und man kann Zeiten
    mit den Rädern einstellen.

-   Individuelle Zeiten lassen sich auch mit den @-Tasten und der Taste
    <Keys.HardKey>TIME</Keys.HardKey> vorgeben.

-   Ebenso kann man auch die Geräte auswählen und mit der <Keys.HardKey>TIME</Keys.HardKey>-Taste
    in den jeweiligen Untermenüs individuelle Zeiten einstellen.

-   Schließlich gibt es auch eine Syntax, um Zeiten per Tastatur
    einzustellen. So setzt z.B. die Tastenfolge\
    <Keys.HardKey>TIME</Keys.HardKey> <Keys.HardKey>FIXTURE</Keys.HardKey> <Keys.HardKey>Position</Keys.HardKey> 5 <Keys.HardKey>@</Keys.HardKey> 3 
    5s Fadezeit, 3s Delayzeit für die Positionsattribute der gerade
    ausgewählten Geräte. Die @-Tasten lassen sich auch in der
    Tastatursyntax verwenden, und mittels <Keys.HardKey>THRO</Keys.HardKey> ergeben sich auch
    Optionen zum Auffächern.

Wird für ein Attribut eine Zeit vergeben, so wird dieses Attribut
als 'im Programmierspeicher' angezeigt.

In der Kanalübersicht (Channel Grid) gibt es eine
Kontext-Schaltfläche <Keys.SoftKey>Times</Keys.SoftKey>, damit lassen sich alle momentan im
Programmierspeicher befindlichen Zeiten anzeigen und editieren. Mit
Off können die Zeiten temporär deaktiviert und mit Off wieder
aktiviert werden.

Zeiten können auch getestet werden: dazu dient die Kombination
<Keys.HardKey>Avo</Keys.HardKey>+<Keys.HardKey>TIME</Keys.HardKey>, oder Sie drücken zweimal die Taste <Keys.HardKey>TIME</Keys.HardKey>.

Auf früheren Konsolen liegt die Funktion der Taste <Keys.HardKey>TIME</Keys.HardKey> entweder
auf der Taste <Keys.HardKey>SET</Keys.HardKey> (Titan Mobile/Sapphire Touch) oder auf der
Taste <Keys.HardKey>NEXT TIME</Keys.HardKey> (Tiger Touch/Pearl Expert).

## Attribute mit "Off" deaktivieren

Wurde ein Attribut editiert, so ist der aktuelle Wert im Programmer, und
kann entsprechend in Cues und Paletten gespeichert werden. Wurde ein
Wert versehentlich editiert (und in den Programmer gebracht) und soll
aber nicht gespeichert werden, so kann er mittels Off deaktiviert
werden.

1. Drücken Sie die Taste <Keys.HardKey>Off</Keys.HardKey>, um das Off-Menü zu öffnen.

2. Wählen Sie die Attribut-Bänke, um die entsprechenden Attribute zu
deaktivieren. Drücken Sie dann auf <Keys.SoftKey>Attributes Off</Keys.SoftKey>.

3. Mit den Menütasten lassen sich auch einzelne Attribute Off schalten,
z.B. mit <Keys.SoftKey>Dimmer Off</Keys.SoftKey>.


-   Um komplette Geräte im Programmer zu deaktivieren, wählen Sie diese
    an, drücken <Keys.HardKey>Off</Keys.HardKey> und dann <Keys.SoftKey>Selected Fixtures Off</Keys.SoftKey>.
