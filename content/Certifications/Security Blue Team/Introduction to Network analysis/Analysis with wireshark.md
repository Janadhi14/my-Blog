#networking #wireshark
## Capture filters vs Display filters
Capture filters can be applied before capturing traffic where as display filters function to show the traffic that has already been captured that meet the criteria 

eg:
`tcp.port == 80` displays packets that have a source or destination port of 80 (HTTP)

`tcp.window_size_value >= 8000` displays TCP packets with a window size of 8000 bytes or over.


Multiple filter statements can be chained by using logical operators, including `and (&&)` and `(or/||).



To show TCP packets addressed to 192.168.1.7, you can use `ip.dst_host == 192.168.1.7 && tcp `,

to display either NTP traffic or UDP traffic from/to port 20000 you can use the command ntp or udp.port == 20000

the '`not (!)` operator excludes specific packets from being displayed such as `not ftp`


## Following streams and Custom columns
Image you want to analyze an HTTP communication between a web server and a host:
- You are interested in having an overall view of the dozens of HTTP requests and responses. 
- Looking at each individual packet will not be much of a profit to us 
- we can use wiresharks follow stream feature to see the stream of the data 
**Follow > TCP/UDP/SSL/HTTP Stream**

## Protocol heirachy window 
This window displays the percentages of the number of packets or bytes in a protocol conversation against the entire traffic.

- The protocols are organised from layers 2 to layer 7 
1. **Open Wireshark** and start capturing packets (or load a previously captured file).
    
2. **Go to the "Statistics" menu** at the top of the window.
    
3. From the drop-down menu, select **"Protocol Hierarchy..."**.
    
    - This will open a new window that displays a hierarchical breakdown of the protocols found in the capture. You'll see a tree structure of protocols, along with statistics like the number of packets and bytes for each protocol.
- After this we can click on a specific protocl and then use that as a filter(apply as filter)
**Apply as Filter > Selected or Not Selected**


analysis challenges in CTFs dealing with data exfiltration can be solved by identifying unusual protocols from the Protocol Hierarchy window


## Conversations
The conversation window also provides a wealth of information on teh traffi, including which hosts communicated 
- very useful fro identifiying different MAC and IP addresses that a host has communiccated with and the volume of traffic between them 
- Protocol Hierarchy window, the Conversations window can be very helpful in investigating data exfiltration attempts
- This is found in `statistics` at the top tool bar and then you can select conversations
- Similar to the Protocol Hierarchy window, you can right-click on a line, select `**Apply as Filter > Selected/Not Selected**` and choose the direction of traffic to apply a filter for the line.

## Endpoints 
End points whindow shows all fo the different hosts that appear in the capture and the ammount of packet they send and recieved 
- useful for sorting hosts by their network activity by either transmission or recieving volume or by both 
- if a host has been recieving much more traffic than they have been transmitting the shot is probably downloaindg a large file 

1. Which protocol was used over port 3942?
	1. SSDP
2. What is the IP address of the host that was pinged twice?
	192.168.2.7 and 8.8.4.4
3. How many DNS query response packets were captured?
	1. 224
4. What is the IP address of the host which sent the most number of bytes?
	1. 192.168.1.7

## **PCAP 2**

1. What is the WebAdmin password?
2. What is the version number of the attacker’s FTP server?
3. Which port was used to gain access to the victim Windows host?
4. What is the name of a confidential file on the Windows host?
5. What is the name of the log file that was created at 4:51 AM on the Windows host?