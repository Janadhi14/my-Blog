## Preparation
Prior to an incident occurring we need to be ready and this is what the preparation stage is all about.

In this stage there are 2 main goals:
- Building an Incident Response Team
	- Have skilled people ready to handle cyber emergencies
	- Train your regular employees on security basics
	- Create clear policies and procedures everyone can follow
- Prevent Incidents from Happening:
	- Strengthen computer systems and servers (like installing better locks)
	- Use multi-factor authentication (requiring multiple forms of ID to log in)
	- Manage who has access to what systems
	- Implement security controls throughout the organization.


### Prevention
Prevention starts with preventing the most common type of attack; phishing. By far this is the most common type of attack where by users click on 
To prevent this from occuring we can use multiple frameworks and authentication methods to vaidate the emails that come into an organisations email box.
### DMARC
This is a email protection 
Stands for Domain-based Message Authentication, Reporting, and Conformance
[[https://dmarcly.com/blog/how-to-implement-dmarc-dkim-spf-to-stop-email-spoofing-phishing-the-definitive-guide#what-is-dkim |DMARC]]
This is built on top of SPF and DKIM

DMARC, SPF, and DKIM are three complementary email authentication protocols that work together to prevent email spoofing and improve email security. Here's how they differ:

**SPF (Sender Policy Framework)**

- **Purpose**: Verifies that emails are sent from authorized IP addresses/servers
- **How it works**: Domain owners publish a DNS record listing which IP addresses are allowed to send emails on their behalf
- **What it checks**: Whether the sending server's IP address matches the authorized list
- **Limitation**: Only validates the "envelope from" address, not the visible "From" header users see

**DKIM (DomainKeys Identified Mail)**

- **Purpose**: Uses cryptographic signatures to verify email authenticity and integrity
- **How it works**: The sending server adds a digital signature to email headers using a private key; recipients verify it using the public key published in DNS
- **What it checks**: Whether the email content has been tampered with and if it truly came from the claimed domain
- **Advantage**: Works regardless of which servers handle the email during transit

**DMARC (Domain-based Message Authentication, Reporting & Conformance)**

- **Purpose**: Provides a policy framework that builds on SPF and DKIM
- **How it works**: Domain owners publish policies specifying what to do when SPF/DKIM checks fail, and whether alignment is required between the "From" header and the domains validated by SPF/DKIM
- **What it adds**: Policy enforcement (reject, quarantine, or monitor), alignment requirements, and reporting capabilities
- **Key benefit**: Gives domain owners control over how their domain is used and provides visibility into email authentication results

**How they work together**: DMARC relies on SPF and/or DKIM to pass, then checks if the validated domains align with the visible "From" address. This three-layer approach provides comprehensive protection against email spoofing and phishing attacks.


### Endpoint hardening
Endpoint hardening is the systematic process of securing individual devices (endpoints) within a network by reducing their attack surface, eliminating vulnerabilities, and implementing robust security controls. This comprehensive approach transforms endpoints from potential entry points for attackers into fortified assets that actively contribute to the organization's overall security posture

Main this to focus on 
- Network protocols- Turning on LLMNR (Link layer Multicast Name Resolution) and NetBIOS protocols
- Deploy LAPS
- Powershell security 
- Defender 
- App execution Controls
- Network level protection
- Advanced threat detection -Install EDR solutions with AMSI integration because Endpoint Detection and Response tools provide visibility into system activities, while AMSI (Antimalware Scan Interface) gives antimalware products the ability to examine obfuscated scripts and content before execution, significantly improving detection of sophisticated threats.

### Network security
- This is a really useful technique for 
- For increased security generally you need to use IDS/IPS systems which function to detect and prevent intrusions into the network. They work better with SSL/TLS is enabled because they are able to decrypt the traffic at the network boundary and analyze the actual content within the packets and then reencrypt to forward to the destination.
### Passwords and MFA
The most commonly way that privilege is escalate is through stealing privileges user credentials in most AD environments.
- Password best practice:
	- Using phrases that are not typical 
	- using upper case and lower case 
	- using numbers 
	- using special characters 
- Using MFA is another factor that can increase the security and add another layer of security 
- using things like passkeys is another way to increase security (Passkeys represent a fundamental shift from passwords to a completely different authentication method based on public-key cryptography)

### Training
- The biggest risk in an organization is people and thus Training should be provided to clients and staff regarding phishing and other security related actions.
### Scanning 
Carrying out vulnerability scanning is an approach that is commonly used in order to
### Active Directory
Active directory security is one of the main things to focus on. 
Getting Third party companies to conduct penetration tests or even doing internal security penetration tests is a good way to increase the odds 

## Detection & Analysis 
The Detection & Analysis phase is the critical second stage of incident response that involves identifying security incidents through various sources and conducting initial investigation to understand the scope and impact

#### Sources of detection 
Human detection - such as employees noticing abnormal behaviour
Automated Tools and Alerts - Systems such as SIEM, EDR, IDS, Firewall that automatically generate alerts when there are certain activities occurring on the network
Threat Hunting - This is where Security analysts actively search for threats and vulnerability hunting 

### Investigating 
Investigations are initiated based off of initially gathered information 
- This initial information may not be enough so thus we hve to genreate a comprehensive picture 
- There is a 3 step cyclic process that is iterative that can be used to conduct the investigation:
	- Creation and usage of indicators of compromise 
	- Identification of new leads and impacted systems
	- Data collection and analysis from the new leads adn impacted systems
### IOCs
This stands for Indicator of compromise
Indicators of compromise are signs that an incident has occurred 
They should be documented in a structured way for example:
- Hash values
- Malware 
- IPAddresses
It can be anything that is related to an incident.

- We can use OpenIOC to document this artifacts. 
- OpenIOC provides a standard format and terms for describing the artifacts encountered during the course of an investigation. In this post we're going to provide a high-level overview of IOCs, including IOC use cases, the structure of an IOC and IOC logic
- Yara is another Standard that is used for IOC standardisation
- Mandiant's IOC Editor can be used to create or edit IOCs.
- This forms the basis of threat intelligence as you can share a standardized intelligence 

### Leads and Impact
After checking our environment for IOCs 
- We need to ensure that we are getting True Positives 
- 
### Data analysis
- **Malware analysis**: Examine malicious code and behavior
- **Disk forensics**: Deep dive into storage artifacts
- **Memory forensics**: Increasingly important for advanced attacks

Process management:
- Most time-consuming phase of incident response
- Continuously update investigation timeline with validated leads
- Maintain **chain of custody** documentation for court admissibility
## Containment, Eradication, & Recovery Stage
Once the investigation has been done we need to prevent the incident from getting worse. 
### Containment 
The main goal of this process is to prevent the infection to 
Can be separated into short term containment and long term containment 
 - Short term containment 
	 - To leave a minimal footprint on the systems that have been impacted.
	 - This can include putting the systems in separate VLANs and isolating them from the network connections
	 - This is done over a shorter timeframe to reduce the damage the attacker can do while we think of a more secure strategy.
 - Long term containment
	 - In this form of containment we need to focus on changes to systems that are persistent.
	 - This can mean applying system patches, changes to firewall rules and shutting down systems/legacy systems 
### Eradication
In this phase the main goal is to eliminate all artifacts that are related to the threat actor, any foothold they have and to ensure that our current systems are secure. 
- This may include rebooting systems 
- Restoring or rolling back to previous backups
- Applying patches 
### Recovery 
- The main goal of this is for bring our systems back to normal operations, 
- We need to re-evaluate our systems operational activities and that the data is all there
- Once all systems are back to normal and we have verified this the compromised systems will be the subject of heacy logging and monitoring because it is quitelikley that they can be the subject of another attack 
	- Generally look for:
		- Log on attempts that are unusual 
		- Processes that are not from the baseline 
		- Changes to the locations of files and registry
## Post-Incident Activities
The post-incident activity stage represents the critical final phase of incident response where organizations transform their incident experience into actionable intelligence and improved security capabilities.








