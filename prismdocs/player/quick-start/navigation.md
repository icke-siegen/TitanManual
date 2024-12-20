---
id: navigation
title: Navigation
sidebar_label: Navigation
---

import Keys from '@site/src/components/key.ts';

**Prism Player**'s user interface is organized into three main sections:

- [Main Menu](#header-menu)
- [View Tabs](#view-tabs)
- [Status Bar](#status-bar)

## Main Menu
![Prism Player File Menu Open Recent](/prismdocs/images/navigation/player-header-menu.png)

In this section it is possible to navigate the application menu, see the Project name and minimize, maximize or close the user interface.

### App Logo
Clicking on Prism Player logo will hide all [View Tabs](#view-tabs) showing the selected **Surface** in fullscreen.

### File

![Prism Player File Menu Open Recent](/prismdocs/images/navigation/header-file-recent.png)

|  Menu Item  |   Description   |
|-------------|-----------------|
| New Project |  Resets application state and starts a new project. |
| Save   | Saves the current project. |
| Save As | Save a new / replace project file. |
| Open | Open a project file. |
| Open Recent | Select to open from a list of previous projects. |

More information found at [Projects Management](./projects-management.md) 

|  Menu Item  |   Description   |
|-------------|-----------------|
| Import |  Imports either a **Bank** or **Encodelist**. |
| Export   | Exports either a **Bank** or **Encodelist**. |

More information found at [Import/Export](./import-export.md)

|  Menu Item  |   Description   |
|-------------|-----------------|
| Settings |  Navigates to the [Settings](../settings/settings.md) View.|

### Edit

![Prism Player Edit Menu](/prismdocs/images/navigation/header-edit.png)

|  Menu Item  |   Description   |
|-------------|-----------------|
|    Undo     |  Undo the last action. *Note: Not all features have Undo actions*. |
|    Redo   |  Redo the previous action. *Note: Not all features have Redo actions*. |

### View
![Prism Player Header Video Menu](/prismdocs/images/navigation/player-header-view.png)

|  Menu Item  |   Description   |
|-------------|-----------------|
| Enter Fullscreen  | Toggle fullscreen mode on to fill the video display also toggle by pressing <Keys.PrismKey>Fullscreen</Keys.PrismKey>. Fullscreen mode can be exited either by pressing <Keys.PrismKey>Minimise</Keys.PrismKey> at the top right of the screen or by using the <Keys.PrismKey>Esc</Keys.PrismKey> button on your keyboard.|
### Audio

![Prism Player Audio Menu](/prismdocs/images/navigation/header-audio.png)

|  Menu Item   |   Description   |
|--------------|-----------------|
| Audio Device | Set the audio device for **Prism Player** to output to, the same setting can configured on the [settings](../settings/settings-general.md#audio). |

### Video
![Prism Player Header Video Menu](/prismdocs/images/navigation/player-header-video.png)

|  Menu Item  |   Description   |
|-------------|-----------------|
| Aspect Mode |  Changes the way the media fills the media player canvas. |
| Show Grid   | Displays a reference grid over the media player / layer preview. |
| Transparency Preview | Toggles on the alpha channel showing a checkerboard in the transparent areas. |
### Help

![Prism Player Header Help Menu](/prismdocs/images/navigation/header-help.png)

| Menu Item | Description |
|-----------|-------------|
| Manual  | Opens the Desktop Manual App |
| Support | Shows a pop-up with company details |
| About   | About **Prism Player**

## View Tabs
![Prism Player File Menu Open Recent](/prismdocs/images/navigation/view-tabs.png)

In this section it is possible to navigate the following app **Views**:
- [Play](../play/play.md)
- [Encoder](../encoder/encoder.md)
- [Settings](../settings/settings.md)
An underline will give visual feedback of the selected **View**.

## Status Bar

This bar shows the following app informations at a glance.

![Prism Player Status Bar Left](/prismdocs/images/navigation/player-status-bar.png)

- App performance metrics - The full performance metrics are shown in [Settings System Info](../settings/settings-system-info.md)
- Prism Player release version
- User interface connection status led - red when disconnected, green when connected to the server.