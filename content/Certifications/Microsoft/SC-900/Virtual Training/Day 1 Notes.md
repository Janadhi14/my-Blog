# Security compliance and identity 
## Defense in Depth 
![[content/Certifications/Microsoft/SC-900/Virtual Training/Screenshot.png]]
- Application layer security protects apps from 
## CIA Triad

- **C - Confidentiality:** Only authorized individuals can access sensitive data such as passwords or financial information.
    
- **I - Integrity:** Refers to keeping data or messages correct, consistent, and trustworthy.
    
- **A - Availability:** Ensuring that authorized users have reliable and timely access to data and systems when needed.
    

---

## Zero Trust Model

"Trust no one, verify everything."

**Zero Trust Guiding Principles:**

- **Verify Explicitly:** Always authenticate and authorize based on all available data points.
    
- **Least Privilege Access:** Grant users the minimum permissions necessary — just-in-time (temporary) or just-enough access — to reduce risk.
    
- **Assume Breach:** Operate with the mindset that your environment can be compromised at any time; continuously analyze and monitor for anomalies.
    

**6 Foundational Pillars of Zero Trust:**

1. **Identities:** These can include users, services, or devices.
    
2. **Devices:** Devices create a large attack surface, especially as data flows between them.
    
3. **Applications:** Applications are the way data is consumed, and shadow applications (unapproved apps) can present risks.
    
4. **Data:** Should be labeled, classified, and encrypted during storage, transit, and use.
    
5. **Infrastructure:** Physical and virtual infrastructure is another potential threat vector and must be secured.
    
6. **Network:** Should be segmented and monitored to increase security and limit lateral movement by attackers.
    

---

## Encryption

Encryption is the process of making data unreadable and unusable to unauthorized viewers.

- **Data at rest** — Stored data.
    
- **Data in transit** — Data moving from one system to another.
    
- **Data in use** — Data actively being processed by applications.
    

**Top 2 Levels of Encryption:**

- **Symmetric Encryption:** The same shared key is used to encrypt and decrypt data.
    
- **Asymmetric Encryption:** Uses a public key to encrypt and a private key to decrypt, or vice versa.
    

---

## Hashing

- Hashing is a deterministic process: the same input always produces the same output.
    
- Commonly used to verify passwords.
    
- Different from encryption: hashed values cannot be decrypted back to the original data.
    
- Passwords are often **salted** before hashing to mitigate risks from brute-force or dictionary attacks.
    

---

## Governance, Risk, and Compliance (GRC) Concepts

GRC helps organizations reduce risk and improve compliance effectiveness:

- **Governance:** Policies and procedures for managing and controlling an organization.
    
- **Risk Management:** Identifying and mitigating risks to assets and operations.
    
- **Compliance:** Ensuring adherence to laws, regulations, and internal policies.
    

---

## Identity Concepts

**Authentication and Authorization:**

- **AuthN (Authentication):** The process of verifying a user’s identity — confirming they are who they claim to be.
    
- **AuthZ (Authorization):** Determines the level of access or permissions an authenticated user has to data and resources.
    

---

## Identity as the Primary Security Perimeter

Identity has become the new security perimeter that enables organizations to secure their assets.

An identity can represent:

- A **user**
    
- An **application**
    
- A **device**
    
- Or **other** entities
    

---

### 4 Pillars of Identity Infrastructure

1. **Administration:** Who can manage identities and services.
    
2. **Authentication:** Verifying an identity’s legitimacy.
    
3. **Authorization:** Granting appropriate access based on roles and permissions.
    
4. **Auditing:** Logging and reviewing access activity to ensure security and compliance.
    

---

## Modern Authentication

Modern authentication is an umbrella term for authentication and authorization methods between a client and server.

- An **Identity Provider (IdP)** offers authentication, authorization, and auditing services.
    
- IdPs enable organizations to set authentication and authorization policies, monitor user behavior, and more.
    
- Key capabilities include support for secure authentication methods, Single Sign-On (SSO), and federation across multiple IdPs.
    
- **Microsoft Entra ID** is an example of a cloud identity provider (formerly known as Azure Active Directory).
    

---

## Directory Services Concept

A **directory service** stores directory data and makes it accessible to network users, administrators, services, and applications.

- A **directory** is a hierarchical structure that stores information about objects on a network.
    
- **Active Directory Domain Services (AD DS)** is one of the best-known directory services for on-premises IT infrastructure.
    
- **Microsoft Entra ID** represents the evolution of identity and access management, providing an **Identity as a Service (IDaaS)** solution for cloud and hybrid environments.
    

---

## Concept of Federation

Federation allows different identity providers to establish trust relationships, enabling users to authenticate across domains.

A simplified example:

- A website uses the authentication service of Identity Provider A.
    
- The user authenticates with Identity Provider B.
    
- Identity Provider A has a trust relationship configured with Identity Provider B.
    
- When the user signs in, the authentication is accepted via this trust relationship, even though the credentials were validated by IdP B.

# Describe the function and identity types in microsoft ID
Microsoft's cloud-based identity and access management service 
- organisations can enable their employees, guests, and others to sign in and access the resources they need 
- Provides a single identity system for their multicloud and o-premises applicaitons
- protects user identities and credentials and to meet the organisations access governance requirements 
- subsu
## Identity types
3 categories 
human(users) identities 
- internal users: employees 
- External users: Guests, partners, customers, vendors, consultants and so on 
workload identiteis: an identity assigned to an application roservice 
service principals - An id for an app or service that uses Entra Id for managining identitiy and access functions; app developers manage the credntials 
Managed identities - A servie principal managed in Entra ID that elimnites the need for app developers to manage crednetials

devices:
- Entra registered  support for BYOD or moble device scenarios 
- Microsoft Entra ID joined: Device joined to Entra ID through an organisational account - owned by organisation

## Hybrid identity 
A common user identity for authentication and authN to on-premis and cloud 

## Demo
# Describe Authentication methods of Microsfot Entra
## Authentication methods of Microsfot Entra
- Passwords(primary auth)
- Phone based authentication 
	- SMS 
	- Voice
- OATH: standard for how one time password codes are generated(secondary auth)
	- Software tokens
	- Hardware tokens
- Passwordless (primary and secondary auth)
	- Windows Hello
	- Microsoft Authenticator
	- FIDO2
	- Certificates (primary auth)![[content/Certifications/Microsoft/SC-900/Virtual Training/Screenshot 1.png]]
	- Generally biometric authenticaotn is the best 
## MFA Authentication
Dramatically improve the security of an identiy, while still being simple for users 
MFA requires more than one form of verifcation:
- something you know 
- something you have 
- somehting you are 
Security defaults (free teir of Entra ID)
- requires all users to co,plete MFA as needed 
- forcing administrators to use MFA 
- Enforcing MFA for all users 
## Password protection and management capabilities 
reduce the risk of users setting weak passwords 
- global banned password list- real word live data used from microsoft 
- custom banned password list 
## Demo 
Tennent 
## Conditional
![[content/Certifications/Microsoft/SC-900/Virtual Training/Screenshot 2.png]]
- Access control determine how poliy is enforced 
	- block access 
	- Grant access: require one or more conditional to be met before gaining access 
	- session control - limited experience 

## Microsfot entra global secure access 
GSA converges zero trust network identity 


## Microsoft entra roles and role -based access contorl
Entral roles controal permimssions to manage microsoft entra resources 
- Built-in roles
- Custom roles
- Categories of microsoft-entra roles:
	- microsof-entra specific 
	- service -specific - sharepoint admin, teams admin
	- Cross service - security admin role, multiple roles within Entra
- Only grant the access users need 
Microsoft entra specific rules - grant permissions for microsof 
## demo
## Identity governance in Microsoft entra
- The tasks of microsoft entra admin governance 
	- Govern the identity lifecycle.
	- Govern access lifecycle.
	- Secure privileged access for administration.
- identity lifecycle 
	- join
	- move
	- leave
## Access review 
## PIM
## Identity protection
- automated remiadiation
- manual remediation

## security capabilities

## Describe microsoft security copilot 
- An AI powered cloud based security analysis tool that enables analyst to respondant to threats quickly 
- process signals at machine speed 
- assess risk 
- Incident summarization - distill complex security alerts into concise actional summaries 

## Describe how Microsoft security copiliot processes prompt requests 
How does it work?
initially the security admin submits a prompts 
- determines initial context and builds a plan using al the available sills
- executes the plan to get the required  
### Describe the elements of an effective prompts 
- gal
## How to enable security copilot 
we need security compute units 
need to step up the default environment 
configure data sharing options
assign data sharing permission
assign role options 
## Describe core security infrastructure
Azure DDOS protection
- Attacks that make resources unresponse 
- the goal of DDos is to make the reosuece unresponsive 
- public facing endpoint attack
3 most common:
- Volumetric
- protocol attack -layer 3 or layer 4 
- resource - attacks web appliation packets 
we can prevent this by using azure DDoS protection
- DDoS protection 2 free types 
- DDoS network proteciton - proteciton of networkk 
### Azure firewall
- protect your perimeter
- scalable and high AValiable soluton to meeting 
- IP, ports and protocols
- can use Microsoft threat intelligence feed to aleert ot filter traffic from/to known malicious IP addresses 
### Web application firewall(WAF)
- centralzed protection of your web application from common exploits and vulnerabilities 
	- protections against threats and intrusions 
	- protects web apliation DDoS attacks 
	- Patching a known vulnerability in one place
	- Integration with microsoft copilot for security 
## Network segmentation and Azure virtual networks 
VNets
0 Reasons for network segementaiton
- the ability to group related assets 
- solation of resources 
- governance policies set by the organisation
Azure virtual network:
- network-level containment of resources with no traffic allowed across VNets or inbound to VNets
- Communication needs to be explicitly provisioned 
- Control how resources in a VNet Communicate with other resources, the internet and on-prem networks
- VNets provide network level containment of resources 
![[content/Certifications/Microsoft/SC-900/Virtual Training/Screenshot 3.png]]
## Azure network security groups
Filter netowrk traffic between azure resources in an azure eirtual network
- An NSG is made up of inbound and outbound security rules that allow or deny traffic
- An NSG can contain many rules, the riles are processed based on their assigned priority 
- You cant remove the default rules, but you can override them by creating new rules with higher priority 

## demo
Applying NSG 
## Azure bastion
- Azure bastion offers secuire connectiveity to your virrual machins from the azure portal
- lets you connect to your virtual machine through your browser
- provides RDP and ssh connectivity with tSL 
- no client software to be installed
## Azure Key vault 
- cloud service for securitly storing and accessing secrets such as API keys, passwords, certificates or cryptographic keys
- Key vault benefits 
	- centralzed appllicaiton secrets 
	- store secrets and keys securely 
	- monitor access and use 
	- simplified administration of applicaiton secrets 
	- 2 teirs:
		- - standard: software-based encryption
		- Premium: hardware security modules (HSM) protected keys 