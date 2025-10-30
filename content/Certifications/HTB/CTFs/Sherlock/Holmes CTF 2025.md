## The Card
Analyze the provided logs and identify what is the first User-Agent used by the attacker against Nicole Vale's honeypot. (string)

It appears the threat actor deployed a web shell after bypassing the WAF. What is the file name? (filename.ext)

The threat actor also managed to exfiltrate some data. What is the name of the database that was exfiltrated? (filename.ext)

During the attack, a seemingly meaningless string seems to be recurring. Which one is it? (string)

OmniYard-3 (formerly Scotland Yard) has granted you access to its CTI platform. Browse to the first IP:port address and count how many campaigns appear to be linked to the honeypot attack.

How many tools and malware in total are linked to the previously identified campaigns? (number)

It appears that the threat actor has always used the same malware in their campaigns. What is its SHA-256 hash? (sha-256 hash)

Browse to the second IP:port address and use the CogWork Security Platform to look for the hash and locate the IP address to which the malware connects. (Credentials: nvale/CogworkBurning!)

What is the full path of the file that the malware created to ensure its persistence on systems? (/path/filename.ext)

Finally, browse to the third IP:port address and use the CogNet Scanner Platform to discover additional details about the TA's infrastructure. How many open ports does the server have?

Which organization does the previously identified IP belong to? (string)

One of the exposed services displays a banner containing a cryptic message. What is it? (string)





- Cluster set up with prox mox 
- make VM - ubuntu 
	- install Dcoker 
	- install portainer 
- Cloudflare zero trust 
- install tunnel - go to docker and paste into terminal in portaiern
- DDNs 
	- docker run cloudflare/cloudflared:latest tunnel --no-autoupdate run --token eyJhIjoiZjcxYmY3ZmU5ZDliYTk2YTBjNzNhMDA5ZjU5ZjEwNzAiLCJ0IjoiNzE1YzA1N2ItZDQ0ZS00NGM5LWIwY2QtOGFmMGI2MmU3MGMyIiwicyI6Ik1qUXdaVEF6WmpjdE16TTJZUzAwTW1RNUxUZ3hZekl0T0RVMk5ESm1PR015TURnMiJ9
