## Installation
- sudo apt update 
- sudo apt install nikto
- alternative for other linux distributions 
	- git clone https://github.com/sullo/nikto.git
	- cd nikto
	- sudo chmod +x nikto.pl
Once you have installed nikto:
- nikto.pl -Version
	This is so you can check the version


## Best practices 
- you can schedule regular scans to allow for continious monitoring 
- It can generate a lot of traffic so avoid scanning critical environments without the correct permissions
- Use Scan results to guide mitigations 
	- implementing secuirty headers and close access to expose directories based off the findings 


## Examples 


Rate limiting -  the -Pause parameter functions to add some delay between requests during scans, minimizing server impact and reducing detections by IDS/IPS

```bash
nikto -h 10.42.142.113 -Pause 3
```

- the -Pause 3 will mean there is a 3 second pause for every request that is sent through nikto



## Scanning for Vulnerabilities 
- This is for scanning for specific types of bulnerabilties by using the -Tuning option 
- This allows you to specify the scan focus for file upload vulnerabilities
```bash
nikto -h <http://www.testwebstire.com> -Tuning 4 
```

- This is for scanning for specific types of Injection VVulnerabilities by using the -Tuning option 
- This allows you to specify the scan focus for file upload vulnerabilities
```bash
nikto -h <http://www.testwebstire.com> -Tuning 5 
```




