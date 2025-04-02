#Blueteam
## Networking devices
Switch 
Router 
Hub
Bridge
Firewall

## Router
A router is a network device that uses a logical address(IP address). In the case of TCP/IP networks, the router would frward data based on IP addresses of systems. If you're on your home network and want to visit a certain website you would use that .....com address into your browser and then this request will be sent to the router. The router will use a DNS protocol (Domain name service) to locate the IP address that corresponds to the domain name. This request is sent over the internet to the websites unique server IPs.
- important to note there can be multiple server IPs that correspond to the same domain name
- There is also the concept of virtual hosting(name based virtual hosting) this is where a single IP address can host multiple websites and commonly used by web servers like apache or Nginx.
	- Name based virtual hosting 
	- IP based virtual hosting 
## Hub 
A hub is a network device that connects all devices on a LAN(local area network)
- when a device sends data to a hub on one port it sends a broadcast to all other devices (similar to an ARP request)
- referred to as dumb devices because they don't understand who is the intended recipient of the data 
- This generates unnecessary traffic and can also allow attackers to steal data if they are connected to the hub but also they are able to send data to all the other devices on the hub.
## Switch 
A switch works as a smart version of a hub because it actually understands where to send data.
- switches generate a MAC address table mapping between the devices's mac address and the port number. This MAC address table is used to generate a MAC address table that the switch will use to send the data frames tot the correct destination
- MAC addresses that are no longer active or in use for a certain period of time will "age out" and be removed from the MAC address table 
## Bridge 
A network bridge device connects separate networks to make them into one larger network
- different than a router 
- in the [[OSI model]] bridging works at layer 2 - the data link layer

## Firewall
A firewall is a network device that provides fundamental network security. 
- monitors incoming 
- monitors outgoing traffic 
- determines whether to allow or block this type of traffic 
- Firewalls can come in software as well as a hardware that can be plugged into a network infrastructure between the LAN and the internet 
- This allows the creation of private networks where only intended communications can come in or out.


## Ports and services 
FTP- 20 and 21 
- used for transferring files between systems 
Telnet - 23
- used before SSH and offers the same functionality 
- telnet DOESN'T USE ENCRYPTION 
- should not be used
- SSH -port 22,  should always be implemented instead.
SMTP-  25 
- simple mail transfer protocol 
- used to send emails between servers within the network or to external networks eg internet
- only a transport method 
- you will need to use POP(post office protocol or Internet message access protocol ) to download and view emails 
DNS- 53
- domain name service uses port 53 
- operates on TCP and UDP
- uses relational databases to convert human-readable hostnames and domain names eg google.com into an IP address 
- allows for conversion between logical address and ip address 
DHCP - 67, 68 
- dynamic host configuration protocol
- designed to assign IP address related information to any hosts on the network automatically 
- such as subnet mask and IP address 
- DHCP uses 2 ports that are using UDP(67 and 68)
HTTP - 80 or 8080(port knocking or port hiding)
- Allows clients to connect to web servers and request content(files, webpages streaming services)
- client request/ server response based communication OK 200 
- HTTP is not encrypted so this it is possible to conduct sniffing attacks 
- able to see clear text data that is transmitted between client and sever
HTTPS-443 
- Hypertext Transfer Protocol Secure 
- basically a secure encrypted version of HTTP 
- uses Transport layer security which was formerly known as SSL layer(Secure socket layer)
- less susceptible to man in the middle and sniffing 

