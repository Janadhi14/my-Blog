#networking #TCP

TCPdump is a pain but it is quite good if you are being specific 


Quite a good resource for learning TCP dump
https://opensource.com/article/18/10/introduction-tcpdump

-v
-vv 
-vvv

These are 


how many UDP packets have been captured?
## **PCAP 4**

1. How many UDP packets have been captured?
		`sudo tcpdump -r SBT-PCAP4.pcap udp | wc -l`
2. How many TCP packets have both the SYN and ACK flags set?
		 `tcpdump -r SBT-PCAP4.pcap 'tcp[13] == 18' | wc -l`
3. Which version of Chrome was used to connect to securityblue.team?
		`tcpdump.- r `
4. How many packets have a TTL value of 38?
	` tcpdump -r SBT-PCAP4.pcap 'ip[8] == 38' | wc -l`

## **PCAP 5**

1. What is the name of the PNG file on the webserver at 192.168.56.111?
		 
2. Which version of OpenSSH is running on the server?
3. On which port is the .zip file being served?
	1. 
4. When was a packet with a TCP checksum value of 53203 captured? (Format: xx:xx:xx.xxxxxx)
	1. _tcpdump -v -r SBT-PCAP5.pcap | grep -i “0xcfd3”_





