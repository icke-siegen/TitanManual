---
id: networking
title: Netzwerkeinrichtung
sidebar_label: Netzwerkeinrichtung
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Titan unterstützt über die üblichen DMX-Buchsen hinaus etliche
weitere Wege der Kommunikation mit Beleuchtungs- und anderen Geräten;
diese werden im Folgenden beschrieben.

Verfügt das Pult bzw. Der Computer über mehrere Netzwerkanschlüsse, so [kann
DMX über jeden davon ausgegeben werden](system-settings/dmx-output-mapping.md#einrichten-der-dmx-ausgänge). 
Ganz exakt lässt sich in den DMX-Einstellungen festlegen: für jeden 
Netzwerkport lässt sich die DMX-Ausgabe explizit aktivieren oder deaktivieren.

Ebenso lassen sich Prozessor-Knoten einbinden (TitanNet), womit die
Gesamtzahl möglicher Universen bis auf 64 gesteigert werden kann. 

Außerdem können mehrere Pulte per Netzwerk im Mehrbenutzerbetrieb sowie im
Backup-Modus betrieben werden.

Am Ende des Kapitels werden in einem separaten Abschnitt die [Grundlagen
der IP-Adressierung](networking/a-quick-guide-to-ip-addressing.md) 
erklärt, was etwa für Art-Net eine wichtige Voraussetzung ist.

> Netzwerke für Lichttechnik übertragen große Datenmengen. Um einen 
zuverlässigen Betrieb zu gewährleisten, empfiehlt es sich, dafür ein 
separates, physikalisch von anderen Netzwerken getrenntes Netzwerk 
vorzusehen.

Zwar kann man das Licht-Netzwerk auch mit anderen Netzwerken verbinden, 
doch kann das zu Übertragungsproblemen sowohl bei der Licht- als auch 
bei der anderen Peripherie führen. In einem solchen Fall sollten unbedingt 
die [Hinweise zur IP-Adressierung](networking/a-quick-guide-to-ip-addressing.md) 
beachtet werden. Ferner ist zu beachten, dass Managed Netzwerk-Switches 
ggf. Art-Net und ähnliche Protokolle blockieren können.
  