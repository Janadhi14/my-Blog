---
title: FinalRecon
tags:
  - CyberSecurity
  - WebRecon
  - OSINT
---

## What is FinalRecon?

- [FinalRecon](https://github.com/thewhiteh4t/FinalRecon) is a A Python-based reconnaissance tool offering a range of modules for different tasks like SSL certificate checking, Whois information gathering, header analysis, and crawling. Its modular structure enables easy customisation for specific needs.

## About FinalRecon 
`FinalRecon` offers a wealth of recon information:

- `Header Information`: Reveals server details, technologies used, and potential security misconfigurations.
- `Whois Lookup`: Uncovers domain registration details, including registrant information and contact details.
- `SSL Certificate Information`: Examines the SSL/TLS certificate for validity, issuer, and other relevant details.
- `Crawler`:
    - HTML, CSS, JavaScript: Extracts links, resources, and potential vulnerabilities from these files.
    - Internal/External Links: Maps out the website's structure and identifies connections to other domains.
    - Images, robots.txt, sitemap.xml: Gathers information about allowed/disallowed crawling paths and website structure.
    - Links in JavaScript, Wayback Machine: Uncovers hidden links and historical website data.
- `DNS Enumeration`: Queries over 40 DNS record types, including DMARC records for email security assessment.
- `Subdomain Enumeration`: Leverages multiple data sources (crt.sh, AnubisDB, ThreatMiner, CertSpotter, Facebook API, VirusTotal API, Shodan API, BeVigil API) to discover subdomains.
- `Directory Enumeration`: Supports custom wordlists and file extensions to uncover hidden directories and files.
- `Wayback Machine`: Retrieves URLs from the last five years to analyse website changes and potential vulnerabilities.

## Final recon installation process:
### Environment configuration 
First you will need to create an environment for you to install FinalRecon. If you are running Kali Linux which runs an externally managed environment direction installations using pip will be restricted.
``` bash
sudo apt install python3-venv
```
This is to create a virtual environment 
```bash 
python3 -m venv myenv
```
Now we need to activate the environment
```bash
source myenv/bin/activate
```
Navigate into the environment using cd command
```bash 
cd myenv
```
### Final recon Installation step
To complete the FinalRecon installation we can run the following commands:
```bash 
sudo git clone https://github.com/thewhiteh4t/FinalRecon.git
```
This is so we clone the git repo in the environment
```bash 
cd FinalRecon
```
Navigating to the directory 
```bash 
pip3 install -r requirements.txt
```
Installing the requirements.txt file 
```bash
chmod +x ./finalrecon.py
```
Making the finalrecon.py file executable
```bash 
./finalrecon.py --help
```
output:
```bash
usage: finalrecon.py [-h] [--url URL] [--headers] [--sslinfo] [--whois]
                     [--crawl] [--dns] [--sub] [--dir] [--wayback] [--ps]
                     [--full] [-nb] [-dt DT] [-pt PT] [-T T] [-w W] [-r] [-s]
                     [-sp SP] [-d D] [-e E] [-o O] [-cd CD] [-k K]

FinalRecon - All in One Web Recon | v1.1.6

optional arguments:
  -h, --help  show this help message and exit
  --url URL   Target URL
  --headers   Header Information
  --sslinfo   SSL Certificate Information
  --whois     Whois Lookup
  --crawl     Crawl Target
  --dns       DNS Enumeration
  --sub       Sub-Domain Enumeration
  --dir       Directory Search
  --wayback   Wayback URLs
  --ps        Fast Port Scan
  --full      Full Recon

Extra Options:
  -nb         Hide Banner
  -dt DT      Number of threads for directory enum [ Default : 30 ]
  -pt PT      Number of threads for port scan [ Default : 50 ]
  -T T        Request Timeout [ Default : 30.0 ]
  -w W        Path to Wordlist [ Default : wordlists/dirb_common.txt ]
  -r          Allow Redirect [ Default : False ]
  -s          Toggle SSL Verification [ Default : True ]
  -sp SP      Specify SSL Port [ Default : 443 ]
  -d D        Custom DNS Servers [ Default : 1.1.1.1 ]
  -e E        File Extensions [ Example : txt, xml, php ]
  -o O        Export Format [ Default : txt ]
  -cd CD      Change export directory [ Default : ~/.local/share/finalrecon ]
  -k K        Add API key [ Example : shodan@key ]
```

## Example
Example of running FinalRecon against the target https://www.inlanefreight.com
```bash 
                                                                                                                                                                                                                  
┌──(finalReconEnv)─(janadhi㉿Kali)-[~/finalReconEnv/FinalRecon]
└─$ ./finalrecon.py --headers --whois --url https://www.inlanefreight.com

 ______  __   __   __   ______   __                                                                                                                                                                               
/\  ___\/\ \ /\ "-.\ \ /\  __ \ /\ \                                                                                                                                                                              
\ \  __\\ \ \\ \ \-.  \\ \  __ \\ \ \____                                                                                                                                                                         
 \ \_\   \ \_\\ \_\\"\_\\ \_\ \_\\ \_____\                                                                                                                                                                        
  \/_/    \/_/ \/_/ \/_/ \/_/\/_/ \/_____/                                                                                                                                                                        
 ______   ______   ______   ______   __   __                                                                                                                                                                      
/\  == \ /\  ___\ /\  ___\ /\  __ \ /\ "-.\ \                                                                                                                                                                     
\ \  __< \ \  __\ \ \ \____\ \ \/\ \\ \ \-.  \                                                                                                                                                                    
 \ \_\ \_\\ \_____\\ \_____\\ \_____\\ \_\\"\_\                                                                                                                                                                   
  \/_/ /_/ \/_____/ \/_____/ \/_____/ \/_/ \/_/                                                                                                                                                                   

[>] Created By   : thewhiteh4t
 |---> Twitter   : https://twitter.com/thewhiteh4t
 |---> Community : https://twc1rcle.com/
[>] Version      : 1.1.7

[+] Target : https://www.inlanefreight.com

[+] IP Address : 134.209.24.248

[!] Headers :

Date : Sun, 06 Oct 2024 10:03:34 GMT
Server : Apache/2.4.41 (Ubuntu)
Link : <https://www.inlanefreight.com/index.php/wp-json/>; rel="https://api.w.org/", <https://www.inlanefreight.com/index.php/wp-json/wp/v2/pages/7>; rel="alternate"; type="application/json", <https://www.inlanefreight.com/>; rel=shortlink
Vary : Accept-Encoding
Content-Encoding : gzip
Content-Length : 5483
Keep-Alive : timeout=5, max=100
Connection : Keep-Alive
Content-Type : text/html; charset=UTF-8

[!] Whois Lookup : 

   Domain Name: INLANEFREIGHT.COM
   Registry Domain ID: 2420436757_DOMAIN_COM-VRSN
   Registrar WHOIS Server: whois.registrar.amazon.com
   Registrar URL: http://registrar.amazon.com
   Updated Date: 2024-07-02T22:07:11Z
   Creation Date: 2019-08-05T22:43:09Z
   Registry Expiry Date: 2025-08-05T22:43:09Z
   Registrar: Amazon Registrar, Inc.
   Registrar IANA ID: 468
   Registrar Abuse Contact Email: trustandsafety@support.aws.com
   Registrar Abuse Contact Phone: +1.2024422253
   Domain Status: clientDeleteProhibited https://icann.org/epp#clientDeleteProhibited
   Domain Status: clientTransferProhibited https://icann.org/epp#clientTransferProhibited
   Domain Status: clientUpdateProhibited https://icann.org/epp#clientUpdateProhibited
   Name Server: NS-1303.AWSDNS-34.ORG
   Name Server: NS-1580.AWSDNS-05.CO.UK
   Name Server: NS-161.AWSDNS-20.COM
   Name Server: NS-671.AWSDNS-19.NET
   DNSSEC: unsigned
   URL of the ICANN Whois Inaccuracy Complaint Form: https://www.icann.org/wicf/


[+] Completed in 0:00:08.094466

[+] Exported : /home/janadhi/.local/share/finalrecon/dumps/fr_inlanefreight.com_06-10-2024_23:04:35
                                                                                 
```


