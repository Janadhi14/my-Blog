#CCNA 
## Networking Devices 
What is a network?
- A computer network is a digital telecommunications network which allows nodes to share resources 
- Router
- ![[content/Certifications/CCNA/Jeremys IT Lab/Screenshot.png | 50]]
- Switch
- Firewall 
	- software 
	- hardware
- server- stores information(end point/host)
- client(end point/host)

Building a network
- A LAN is a local area network - a group of interconnected devices in a limited area such as an office 

The connection between offices is called a wide area network(WAN) - a network that extends over a large geographical area

We can define a computer network as a **telecommunications network that allows nodes to share resources** 

A node is any device that connects to a network

A resource is anything that can be accessed or used over the network

A client is a device that accesses a service provided by a server and a server is a device that provides services for clients 

clients and servers aren't specific types 

## examples
Let’s list a few examples of client–server pairs:


Client—A network-enabled TV that streams a movie on Netflix


Server—A Netflix server that hosts the movie and sends it over the network


Client—An iPhone scrolling through X (formerly Twitter)


Server—X servers that host the tweets and send them to the iPhone


Client—A PC accessing an Excel spreadsheet located on an enterprise’s server


Server—An enterprise’s server containing spreadsheets and other internal files”



Client and server nodes are often called endpoints or end hosts


## 2.2.3 Routers 
Switches provide connectivity among devices within a LAN but changes are we want our end hosts to be able to communicate with eternal networks too for example , for end hosts to communicate over the internet we need a device that provides connectivity between LANs and the internet- this is type of device is called a *router* 

## 2.2.2 Switches
Devices connected to a switch are able to communicate with each other via the switch 
- The devices do not typically communicate with the switch itself, the switch only serves as infrastructure over which communication can occur 
- The role of a switch is to connect devices within a Local area network 
	- eg all the pcs, security cameras , printers,servers and other devices in an office are probably connected to one or more switches and thus switches have many ports for the end hosts to connect to- usually from 24 - 48 
- A port is a physical connector on a device 
- devices are physically connected by connecting one end of a cable to each of the two devices
- A port servers as the interface between one device and the other device in teh network nd for that reason the terms poert and interface are often used interchangabely
- Switches use a variety of technology to facilitate communications between the devices connected to them 
The role of a switch is not to provide connectivity between LANs or to external networks eg you would not connect a switch directly to the internet 
## Routers 
We want our end hosts to be able to communicate with external networks too. 
eg: for end hosts to communicate over the internet we need a device that provides connectivity between LANs and the internet which is called a router (on the edge of the LAN and connected to the switch)

Routers are not used to connect many end hosts within a LAN. 
Instead they are placed at the edge of a LAN and used to enable ommunications between LANs and external networks such as the internet 

Like switches, routers use a variety of technologies to play their role in the network - facilitation communications between LANs. 


Devices in the two LANs in are perfectly capable of communicaton with other devices over the internet. By allowing our devices to communication over the internet we aer exposing them to potential security risks 

## Firewalls
The internet is a large public network and anyone can connect to it, whether their intentions are good or not. 

To protect our network we should make use of firewalls 
firewalls can protect networks by denying certain kinds of network traffic 

There are different types of firewalls
- host based firewall
- network firewall
- dynamic firewall 
- packet filtering firewalls, 
- stateful inspection firewalls, 
- circuit-level gateways, 
- proxy firewalls, 
- application-level gateways, 
- next-generation firewalls (NGFWs), 
- web application firewalls (WAFs), 
- cloud firewalls,
- hardware firewalls,
- software firewalls

A network firewall is a seperate hardware applicance that serves a purpose similar to a host-based firewall but on a larger scale 


Firewalls are not a major focus of the CCNa 


## Summary 
“A computer network is a telecommunications network that allows nodes to share resources.


A node is any device that connects to a network: a personal computer, an iPhone, a router, etc.


A resource is anything that is shared over a network, such as a web page.


Various types of network devices are used to facilitate network communications.


Clients and servers are defined by their functions in relation to each other: clients access services provided by servers, and servers provide services for clients. Most types of devices can be both a client and a server.


Switches provide connectivity between devices in a LAN. They typically have many ports (24 to 48) for devices to connect to.


Routers provide connectivity between LANs and external networks, such as the internet.


A wireless router (Wi-Fi router/home router) is a multifunctional device that combines the roles of router, switch, wireless access point, and firewall.


Firewalls secure the network by inspecting traffic that enters or exits the network and allowing or denying it based on a set of configured rules”

“A local area network (LAN) is a group of interconnected devices in a limited area, such as an office.

A wide area network (WAN) is a network that extends over a large geographical area, such as between cities.

A computer network is a telecommunications network that allows nodes to share resources.

A node is any device that connects to a network: a personal computer, an iPhone, a router, etc.

A resource is anything that is shared over a network, such as a web page.

Various types of network devices are used to facilitate network communications.

Clients and servers are defined by their functions in relation to each other: clients access services provided by servers, and servers provide services for clients. Most types of devices can be both a client and a server.

Switches provide connectivity between devices in a LAN. They typically have many ports (24 to 48) for devices to connect to.

## 3 Cables, connectors and ports 

Ethernet is not one single thing but rather a collection of standards for physical wired connections as well as rules for communicating over those connections 

there are 2 different types of physical connections:
- copper cables 
- fibre-optic cables 
There are several governing bodies that define the standards used in computer networks 
- IEEE. which means institute of electrical and electronic engineers 
- and first they defined IEEE 802.3 standard which is better known as ethernet 
- wifi is known as IEEE 802.11 wireless 

Ethernet is not a single standard but rather a family of standards that define both **physical aspects of network communications** as well as **how data should be formatted into messages** 

### 3.2 Binary: Bits and bytes 
Terms like bit byte, megabit megabyte 
terms like gigabit internet connection or a file that is x gigaytes in size 


What is a **bit**?
- **This is the most basic unit of information used by computers**
- The word bit is simply a blend of the words binary digit
- Binary is a **number system** that expresses all values using only 2 digits : 
	- 0 and 1 
- **A byte on the other had is a simply a unit of 8 bits** 
- **8 bits are 1 byte** 
**Binary is the language of computers**

They Compute and communicate in binary 

In modern networks computers often send these bits at the rate of billions of bits per second 

Exactly how are these 0s and 1s conveyed depends on the medium 
for example 0s and 1s can be communicated over copper wirting by modifying the voltage of the electrical signal between the 2 devices, voltage x represents a value of 0 and voltage y represents a value of 1 

Understanding the binary number system is very important for the CCNA exam 


We measure the **speed of network connections by how many bits can be transmitted per second over the connection** 

The following are some common units of measuring bits:
“1 kilobit (kb) = 1,000 (thousand) bits


1 megabit (Mb) = 1,000,000 (million) bits (1,000 kilobits)


1 gigabit (Gb) = 1,000,000,000 (billion) bits (1,000 megabits)


1 terabit (Tb) = 1,000,000,000,000 (trillion) bits (1,000 gigabits)”

Network speeds are then stated as X bits per second 


Copper UTP connections
- The CCNA requires you to know 2 kinds of wired connections:
- - copper cables 
- fibre optic cables 

#### Copper cables
- This is the standard ethernet cable 
- **8P8C - 8 port 8 contact connector** of an ethernet cable on the right the name refers to the fact that there are **8 pins on the connector** 
- - one for each of the 8 wires inside of the cable 
- These connectors allow the cable to connect to ports 
- Another name for the is the **RJ45** - registered jack 

The type of fables used for these connections are called unshielded twisted pair cables (UTP)
There are also shielded twisted pair cables bit they are less common(STP)


Each UTP cable contains 8 individual wires inside, twisted together to make 4 pairs 


Unshielded-  meaning the wires don't have a metallic shield around them 
- this shield can reduce electromagnetic interference but is not present in UTP cables 
Twisted pair- the 8 wires in the cable are twisted together to or 4 pairs of 2 wires each, 
	- the twisting of the wires reduces EMI between the wires of each pair 

The name of the IEEE task group that defined the standard is also used to refer to the standard itself 
- these names begin with IEEE802.3 followed by a letter 
- The third name is an information name given by the IEEE that indicates both the speed and cable type 


The IEEE assigns working groups to develop specific technologies. The two main working groups relevant to the CCNA are 802.3 (tasked with developing the Ethernet standard for wired networks) and 802.11 (wireless LANs, also known as Wi-Fi).

A handful of ethernet standards 
![[Screenshot 1.png]]
Each of these stanrads supports a maximum cable length of 100meters. 
- using a cable length that is longer than the listed maximum can result in signal attenuation ad decreased performance 
- Maximum cable length can be a problem for copper UTP connections
- Increased maximum cable length is a major advantange of fibre-optic cables over copper UTP cables 

![[Screenshot 2.png]]
- Although these days all UTP cables used for network communications have 4 pairs of wires(8 wires) and not all of the ethernet standards use all 4 pairs of wires 


- 10BASE-T uses two pairs (four wires).
- 100BASE-T uses two pairs (four wires).
- 1000BASE-T uses four pairs (eight wires).
- 10GBASE-T uses four pairs (eight wires).”

Each wire inside of the cable is connected to one of the 8 pins of the 8pc8c connector

for devices to communicate over these wire pairs each wire pair forms an electrical circuit between the 2 connected devices 


### Straight through cables 
- 10BASE-T and 100BASE-T use 2 wire pairs, one for each direction 
- the pair connected to pins 1 and 2 
- the pars connected to 3 and 6 

### Crossover cables 

## Auto medium-dependent interface crossover 
- auto MDI-X 
- This allows a device to change which pins it will use to transmit and receive data depending on the device they are connected to 
- you should know about straight-through and crossover cables as a potential exam questions 
- 

