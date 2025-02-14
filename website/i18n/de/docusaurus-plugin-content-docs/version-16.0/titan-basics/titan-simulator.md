---
id: titan-simulator
title: Der Titan Simulator
sidebar_label: Der Titan Simulator
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Soll vorab programmiert oder eine Show angepasst werden, ohne bereits
ein Pult zu verwenden? Kein Problem, genau dazu dient der Titan
Simulator. Damit lassen sich auf jedem normalen PC alle Typen von
Titan-Pulten simulieren und Shows erstellen und verändern.

> Zum Starten des Titan Simulators ist ein Editor AvoKey oder andere Avolites-Hardware erforderlich (T1, T2 oder Titan Mobile). Editor AvoKeys sind bei Ihrem lokalen Avolites-Vertrieb oder im Avolites-Webshop erhältlich.

![titansimulator](/docs/images/Titan-Simulator.jpeg)

## Den Titan Simulator installieren

Sie müssen Administrator-Berechtigungen auf dem Computer haben, um den
Titan Simulator zu installieren oder auszuführen. Ab Titan v12 ist für
den Simulator ein Editor AvoKey oder ein angeschlossener T1, T2 oder Titan Mobile
erforderlich.

> Zu den Systemanforderungen siehe [Inbetriebnahme von Titan Mobile und T1/T2](../titan-basics.md#inbetriebnahme-von-titan-mobile-und-t1t2).                 

- Capture verlangt dabei eine leistungsstarke Grafikkarte. Sollten dabei 
Probleme auftreten, stellen Sie bitte sicher, die aktuellsten Treiber
für Ihre Grafikkarte installiert zu haben.   

Laden Sie einfach die **Titan PC-Suite** herunter (verfügbar im
Download-Bereich auf www.avolites.com) und installieren sie. Beim ersten
Programmstart muss eventuell noch [der AvoKey lizenziert](../system-settings/recovering-reinstalling-the-console#software-lizenzierung) werden; folgen Sie dazu den
Anweisungen des Authenticator-Hilfsprogramms, das automatisch startet.

Einmal lizenziert, kann man die Software entweder als Titan Go oder als Titan Simulator starten:

-   Wird die Software als Titan Go mit dem Editor AvoKey gestartet, so lässt sich nur ein
    DMX-Universum über Artnet/sACN ausgeben. Mit einem T1/T2 werden
    eine bzw. zwei Linien als DMX und über Netzwerk ausgegeben.

-   Wird die Software als Titan Simulator gestartet (zu erkennen an der Anzeige 'Offline' rechts
    oberhalb der Arbeitsfenster), so können sämtliche Pulte dargestellt
    werden, auch lassen sich der Visualiser oder Art-Net-Knoten
    verwenden. Allerdings werden in unregelmäßigen Abständen Störsignale
    an die Ausgänge geschickt (der sog. Spoiler). Dann einfach ein paar
    Sekunden warten, bevor mit dem Programmieren weitergemacht wird.

## Verwenden des Titan Simulator

Beim Start des Titan Simulators können Sie das zu emulierende Pult
wählen. Daraufhin erscheint ein Fenster mit dem 'Virtual Panel'
(virtuelle Pultoberfläche), sowie weitere Fenster mit den
Monitorausgängen der gewählten Konsole.

> Der Inhalt des Touchscreens wird jeweils in einem separaten Fenster gezeigt. Es empfiehlt sich daher, mit mehreren Monitoren zu arbeiten.

Das 'Virtual Panel' arbeitet wie die richtige Pultoberfläche. Um eine
Taste gedrückt zu halten (für Tastenkombinationen), klicken Sie diese
mit der rechten Maustaste.

## Verwenden des Virtuellen Panels mit dem Pult

Das virtuelle Panel ist nicht nur für den Visualiser wichtig, sondern
kann auch sonst auf dem Pult hilfreich sein. Wenn etwa aus irgendwelchen
Gründen die Pult-Hardware defekt sein sollte (auch wenn nur z.B.
einzelne Fader oder Knöpfe betroffen sind), kann man damit immer noch
das Pult bedienen.

Das Virtuelle Panel wird über das Tools-Menü gestartet: Tools-\>Other
Programs-\>Virtual Panel. Die Steuerelemente wirken parallel zu den
'echten' Bedienelementen des Pultes.
