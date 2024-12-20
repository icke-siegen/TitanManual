---
id: theatre-programming
title: Theatre Programming Quick Guide
sidebar_label: Theatre Programming
original_id: theatre-programming
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

If you are used to programming other theatre-style consoles, you will be
more familiar with using a keypad/syntax style interface, rather than the Titan
touchscreen. But fear not because you can program a theatre show on
Titan using keypad syntax and this is how you do it.

- Labelled buttons on the console are shown like this: <Keys.HardKey>Enter</Keys.HardKey>.
- The <Keys.HardKey>@</Keys.HardKey> button< is the one next to the numeric keypad.
- The <Keys.HardKey>Cue</Keys.HardKey> button is labelled <Keys.HardKey>Connect</Keys.HardKey> or <Keys.HardKey>Connect/Cue</Keys.HardKey> on some consoles.
- The <Keys.HardKey>Thru</Keys.HardKey> button is labelled <Keys.HardKey>Thru</Keys.HardKey> or <Keys.HardKey>Through</Keys.HardKey> on some consoles.
- The <Keys.HardKey>And</Keys.HardKey> and <Keys.HardKey>Thru</Keys.HardKey> buttons are not provided as fixed buttons on some consoles, softkey <Keys.SoftKey>And</Keys.SoftKey> and <Keys.SoftKey>Through</Keys.SoftKey> options are provided instead.

Dimmers/Fixtures have a User Number *(which is equivalent to the Channel
Number on other consoles)*, shown in the top left corner of the fixture
button. This is the number <strong>n</strong> shown in the keypad commands below. You can
change this number using the <Keys.SoftKey>Set Legend</Keys.SoftKey> softkey, see section [Changing the Patch](../patching/changing-the-patch.md#setting-legends).
Groups also have a User Number.

![Fixtures Window showing user numbers](/docs/images/Fixtures-Window-showing-user-numbers.png)

## Setting Dimmer/Fixture Levels

 Keypresses | Action
------------|-------------------
 <strong>n</strong> <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> | Set fixture <strong>n</strong> to 100%
 <strong>n</strong> <Keys.HardKey>@</Keys.HardKey> <strong>v</strong> <Keys.HardKey>Enter</Keys.HardKey> | Set fixture <strong>n</strong> to <strong>v%</strong> *(you need to enter 2 digits so "50" for 50%)*
 <strong>n</strong> <Keys.HardKey>Thru</Keys.HardKey> <strong>m</strong> <Keys.HardKey>@</Keys.HardKey> <strong>v</strong> <Keys.HardKey>Enter</Keys.HardKey> | Set fixtures <strong>n - m</strong> to <strong>v%</strong>
 <strong>n</strong> <Keys.HardKey>And</Keys.HardKey> <strong>m</strong> <Keys.HardKey>And</Keys.HardKey> <strong>p</strong> <Keys.HardKey>@</Keys.HardKey> <strong>v</strong> <Keys.HardKey>Enter</Keys.HardKey> | Set fixtures <strong>n</strong>, <strong>m</strong>, <strong>p</strong> to <strong>v%</strong>
 <Keys.HardKey>Group</Keys.HardKey> <strong>n</strong> <Keys.HardKey>@</Keys.HardKey> <strong>v</strong> <Keys.HardKey>Enter</Keys.HardKey> | Set fixtures in group <strong>n</strong> to <strong>v%</strong>
 <Keys.HardKey>Clear</Keys.HardKey> | Snap release edited channels back to programmed state - *like Cheat on ETC*
 <strong>t</strong> <Keys.HardKey>Clear</Keys.HardKey> | Release edited channels fading over time <strong>t</strong>

## Setting Other Attributes of Intelligent Fixtures

 Keypresses | Action
------------|-------------------
 <strong>n</strong> <Keys.HardKey>Enter</Keys.HardKey> | Select fixture <strong>n</strong> for control
 <strong>n</strong> <Keys.HardKey>Thru</Keys.HardKey> m <Keys.HardKey>Enter</Keys.HardKey> | Select fixtures <strong>n</strong> to <strong>m</strong> for control
 <Keys.HardKey>Group</Keys.HardKey> <strong>n</strong> <Keys.HardKey>Enter</Keys.HardKey> | Select all fixtures in group <strong>n</strong> for control

Once you have selected the fixtures:
-   Press one of the <strong>Attribute Bank buttons</strong> <Keys.HardKey>Colour</Keys.HardKey> <Keys.HardKey>Gobo</Keys.HardKey> etc. The
    current function of the wheels is shown bottom right on the screen.
    Press the same Attribute Bank again to page through different
    attributes *e.g. if there are 2 gobo wheels keep pressing <Keys.HardKey>Gobo</Keys.HardKey> to
    access the other attributes*.

-   Use the <strong>wheels</strong> to set the value. Or press the <Keys.HardKey>@</Keys.HardKey> button next to
    the wheel and type in a value on the keypad.

## Programming Cues

Titan can have multiple cue lists. To start a cue list press <Keys.HardKey>Record</Keys.HardKey>
then select <Keys.SoftKey>Create Cue List</Keys.SoftKey> from the touch screen. Then press a <strong>Select</strong>
button above the fader where you want to store the cue list.

Titan will record into the cue only the dimmers/fixtures you have changed
since you last pressed <Keys.HardKey>Clear</Keys.HardKey>, and that have changed from the
previous cue *(so if you put up another playback, that won't get
recorded)*. To record everything with intensity above zero, switch
&nbsp;<Keys.SoftKey>Record Mode</Keys.SoftKey> to "Record by Stage" (see [Creating a Cue](../cues/creating-a-cue.md#creating-a-cue)).

 Keypresses | Action
------------|-------------------
<Keys.HardKey>Record</Keys.HardKey> &#123;fader select&#125; &#123;fader select&#125; | Record the next cue onto the end of the cue list on this fader
<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <strong>n</strong> <Keys.HardKey>Enter</Keys.HardKey> | Record cue <strong>n</strong> *(will prompt for merge/overwrite if it exists already)*
<Keys.HardKey>Time</Keys.HardKey> <strong>t</strong> <Keys.HardKey>Enter</Keys.HardKey> | Set fade time into programmer *(does not affect stored cues; will save with the cue when you record it)*
<Keys.HardKey>Cue</Keys.HardKey> <strong>n</strong> <Keys.HardKey>Time</Keys.HardKey> <strong>t</strong> <Keys.HardKey>Enter</Keys.HardKey> | Set fade time of cue <strong>n</strong> to <strong>t</strong> seconds
<Keys.HardKey>Delete</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <strong>n</strong> <Keys.HardKey>Enter</Keys.HardKey> <Keys.HardKey>Enter</Keys.HardKey> | Delete cue <strong>n</strong> *(2^nd^ <Keys.HardKey>Enter</Keys.HardKey> confirms)*
<Keys.HardKey>Copy</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <strong>n</strong> <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <strong>m</strong> <Keys.HardKey>Enter</Keys.HardKey> | Copy cue <strong>n</strong> to new cue <strong>m</strong>
<Keys.HardKey>Copy</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <strong>n</strong> <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>Enter</Keys.HardKey> | Copy cue <strong>n</strong> onto the end of the cue list
<Keys.HardKey>View/Open</Keys.HardKey> &#123;fader select&#125; | Show the list of cues on screen, click on individual times to edit them

- For the <strong>copy</strong> commands, you can use <Keys.HardKey>Move</Keys.HardKey> in place of <Keys.HardKey>Copy</Keys.HardKey>to <strong>move</strong> cues. For consoles
  which don't have a <Keys.HardKey>Move</Keys.HardKey> button you can press (<Keys.HardKey>Avo</Keys.HardKey> and <Keys.HardKey>Copy</Keys.HardKey>) together to get Move.

- You can select multiple cues using <Keys.HardKey>Thru</Keys.HardKey>, <Keys.HardKey>And</Keys.HardKey> and <Keys.SoftKey>Not</Keys.SoftKey>. For example to copy cues 3, 4 ,5 ,7, 10
  into a new block of cues starting at cue 20 you could do 


  <Keys.HardKey>Copy</Keys.HardKey> &#123;fader select&#125; <strong>3</strong> <Keys.HardKey>Thru</Keys.HardKey> <strong>7</strong> <Keys.SoftKey>Not</Keys.SoftKey> <strong>6</strong> <Keys.HardKey>And</Keys.HardKey> <strong>10</strong> <Keys.HardKey>@</Keys.HardKey> <strong>20</strong> <Keys.HardKey>Enter</Keys.HardKey>

- To make a <strong>Block</strong> cue (changes from previous cues do not track), view the cue list as above,
	in the Tracking column click the cell for the cue you want to change and
	select <Keys.SoftKey>Block</Keys.SoftKey> from the softkeys.

- To [link cues](cue-list-timing.md#cue-linking--link-offset) so they automatically run after each other,
	the easiest way is on the screen. Click on the "Link" cell
	(which normally shows "Wait For Go". Then select from the softkeys
	<Keys.SoftKey>Link After Previous Cue</Keys.SoftKey> or <Keys.SoftKey>Link With Previous Cue</Keys.SoftKey>. For Link
	After, set the "Delay Out" time to set how long the cue will remain
	before the next cue starts.

## Running Cues

Push up the fader of the cue list to make it active. Titan calls this the *connected* cue list and the control buttons
such as Go will operate on this cue list.

 Keypresses | Action
------------|-------------------
<Keys.HardKey>Cue</Keys.HardKey> &#123;fader select&#125; |If another cue list is active, connect this cue list as the current list
<Keys.HardKey>Go</Keys.HardKey> | Run next cue with programmed times
<Keys.HardKey>Cue</Keys.HardKey> <strong>n</strong> <Keys.HardKey>Go</Keys.HardKey> | Go cue <strong>n</strong> with programmed times
&nbsp;<strong>t</strong> <Keys.HardKey>Go</Keys.HardKey> | Next cue go with fade time <strong>t</strong>
&nbsp;<strong>n</strong> <Keys.HardKey>Cue</Keys.HardKey> <strong>t</strong> <Keys.HardKey>Go</Keys.HardKey> | Jump to cue <strong>n</strong> with fade time <strong>t</strong>

- If you want moving fixtures to automatically position themselves ready
	for the next cue, enable the <Keys.SoftKey>Move In Dark</Keys.SoftKey> option, see [Move In Dark](./cue-list-options#move-in-dark).
	This option is Off by default.

## Editing Cues While Running

Often you need to make changes to cues while the cue is active in a
running show. Press <Keys.HardKey>Clear</Keys.HardKey> before you make changes to be sure that
the programmer does not contain any previous changes.

 Keypresses | Action
------------|-------------------
<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> | Update current cue by merging programmer
<Keys.HardKey>Time</Keys.HardKey> <strong>t</strong> <Keys.HardKey>Enter</Keys.HardKey> <Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> | Set fade in time of current cue (It is probably easier to use <Keys.HardKey>View</Keys.HardKey> and click on the time on  screen to edit it)

## Effects/Shapes

You can't select Effects/Shapes from the keypad on Titan, but it's still
easy:

1. Select fixtures for control

2. At the top level menu press <Keys.SoftKey>Shapes and Effects</Keys.SoftKey>, <Keys.SoftKey>Shape
    Generator</Keys.SoftKey>, <Keys.SoftKey>Create</Keys.SoftKey>

3. Select the type of shape <Keys.SoftKey>Dimmer</Keys.SoftKey>, <Keys.SoftKey>Pan/Tilt</Keys.SoftKey> etc

4. Select a shape from the softkeys *or from the Shapes window which
    appears*

5. Set the *Speed*, *Size*, *Spread* using the wheels

Shapes will record into cues, and will track through subsequent cues.
You can deactivate tracked shapes in the Playback View, or set the
Shape Tracking in the Playback Options.
