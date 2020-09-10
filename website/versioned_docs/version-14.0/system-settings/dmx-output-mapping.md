---
id: version-14.0-dmx-output-mapping
title: DMX Output Mapping
sidebar_label: DMX Output Mapping
original_id: dmx-output-mapping
---

There are various ways to connect fixtures to the console. As well as
the XLR sockets on the console, [you can connect fixtures using Ethernet](../networking/controlling-fixtures-over-a-network.md)
and wireless links.

All consoles can output up to 16 universes except **T1** which is limited to
one single universe and **T2** to two universes.

If you need to output more universes, you can network the console to one
or more [Avolites TitanNet Processing (TNP) nodes](../titan-net.md). This off-loads the DMX
processing, allowing the console to control up to 64 universes of DMX in
total.

> The software does not actually limit the number of universes from a
single console to 16, but performance of the console will be
degraded. A warning will be shown in the processing load section of
the TitanNet overview.

Configuring DMX Outputs
-----------------------

Switch the console to [System mode](the-system-menu.md) and select \[DMX Settings\].

The screen will initially show the node tab relating to the console
itself. It shows a list of available DMX *nodes* (places where you can
send the DMX to) on the left, and a list of the available DMX *lines*
(outputs generated by the console) on the right. Each DMX line can send
data to one or more nodes. If you assign more than one node to a line,
those nodes receive duplicated data. If you have Art-Net/sACN nodes or
TNP units connected they will show on the left hand side.

On the right hand side, under each DMX Line there is a list of which
nodes are linked to that line. The default setting on a new show is for
the physical DMX outputs on the console to be linked to the first DMX
lines.

![DMX Settings Window](/docs/images/DMX-Settings-Window.png)

You can individually assign Nodes to Lines using the arrow button, or
assign all Nodes of the same type using the group assign button. For
example, to assign each XLR output socket on the back of the console to
a DMX line, you would click on the Group Assign button of the ExpertDMX
nodes.

![Node in DMX Settings Window](/docs/images/Node-in-DMX-Settings-Window.png)

To assign a node to a line, click on the **arrow on the node** (the node
will be highlighted), then click the line you want to assign to it.

To delete a node from the DMX lines, click on the **X** button. To delete
all nodes from a line, click on the **Group delete button**.

You can show information about the DMX nodes, or the DMX lines, by
clicking the **i** button. For Ethernet/network type nodes, this allows you
to set detailed properties such as IP address ranges and net masks.

![DMX Output in DMX Settings Window](/docs/images/DMX-Output-in-DMX-Settings-Window.png)

If you have [TNPs](../titan-net.md) connected, these can be individually configured using
the tabs across the top of the screen.

 > When transferring shows between different console types, and especially when you have used the simulator, it's a good idea to check the DMX output settings to make sure the settings are what you expected. If you created a new show on the simulator, no outputs will be connected.


Module Properties
-----------------

A module is a method of sending DMX (such as Art-Net, or sACN) and can be
thought of as a collection of nodes.

You can set properties for Art-Net or sACN by going to the DMX Settings
window (switch to [System mode](the-system-menu.md) and select \[DMX Settings\]) and then
click the cog icon at the right hand side of the module name.

This allows you to adjust settings for each module, and to select which
network adapter to use to output the protocol. All consoles except
Quartz and Expert have two network adapters, Quartz has one, and on
Titan Mobile and Simulator this depends on your computer; many laptops
will have a wired network adapter and also a WiFi (wireless) adapter,
both of which will be shown.

### sACN Properties

![sACN DMX Module Properties](/docs/images/sACN-DMX-Module-Properties.png)

**DMX output:** Allows you to temporarily disable the output

**Merge Priority:** (0-200) The sACN specification allows multiple
consoles to send out DMX on the network. The priority value tells the
receiving node which console to listen to if it gets DMX from more than
one, higher values take priority. 

> You would normally use this to connect
a backup console with a lower priority setting.

**Block RDM:** If enabled, RDM traffic is blocked on this module.

**Synchronization Address:** If not zero, sets the universe used to
synchronise the DMX frames sent from the console. Listening devices will
receive all DMX frames and then wait for a packet on the synchronisation
universe before using or retransmitting the DMX frames. Synchronous sACN
reduces tearing effects which can result from non-synchronised
universes. If set to zero, synchronisation is disabled.

**Ethernet xxx:** Selects whether you want this protocol outputting on
this Ethernet adapter. If there are multiple adaptors in the system you
can select more than one, and identical information will be sent out on
each one.

### Art-Net Properties

![Art-Net DMX Module Properties](/docs/images/ArtNet-DMX-Module-Properties.png)

**DMX output:** Allows you to temporarily disable the output

**Continuous Art-Net DMX:** The Art-Net specification allows the console
to only send out changes in the DMX. This setting makes the console send
the Art-Net packets continuously even if there is no change.

**Always Broadcast Art-Net DMX:** Sets all Art-Net packets to Broadcast
mode, meaning they are sent to all nodes. Otherwise the packets are
addressed to the specific node they are intended for, which reduces
network traffic but requires more careful setting up of network
addresses.

**Block RDM:** If enabled, RDM traffic is blocked on this module.

**DMX Overrun:** Some Art-Net nodes ignore changes until they are sent
more than once. If this option is enabled then at least 3 packets are
sent for every change

**Legacy Mode:** If enabled, Art-Net is broadcast continuously from the
console at a high rate. May affect console performance.

**Ethernet xxx:** Selects whether you want this protocol outputting on
this Ethernet adapter. If there are multiple adaptors in the system you
can select more than one, and identical information will be sent out on
each one.

DMX Overview
------------

If you select the DMX Overview tab at the top of the screen, you can see
all the [TNPs](../titan-net.md) which are connected and which output lines they are
allocated to.

![DMX Overview in DMX Settings](/docs/images/DMX-Overview-in-DMX-Settings.png)

The left side of the screen shows the 64 possible DMX output lines on
the console. To the right of this are the processing nodes which are
connected, the top one being the console itself. Each node shows how the
lines are allocated to the physical outputs on the device. Clicking this
area will open the detail tab for the node.

Clicking any one of the nodes will show detailed information about that
node on the right, including the IP address, number of available
processing slots, number of lines assigned, status of the connection
with the node, and the processing load of the device. If more lines are
assigned than the maximum number of slots, a warning will be displayed.

If a show is loaded that had fixtures and lines assigned to processing
nodes which are no longer found on the TitanNet network, a screen will
appear listing nodes in use and available nodes, giving you the option
to reassign the lines.

DMX Merge
---------

The DMX merge window allows you to set up where DMX will be output in a
system where you have multiple consoles or processing nodes connected.

![DMX Merge Window](/docs/images/DMX-Merge-Window.png)

To configure an output port, click on **Patch Titan Lines**, enter universe
number then click on a port to assign.

To remove an assignment, click on **Clear sACN Merge** then select a port.

The DMX Output switch can be used to disable all DMX output.