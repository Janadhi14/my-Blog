No(Not all azure AD license editions include the same featuers)
Yes (use the azure portal to manage the AD tennet )
No (You dont need to deploy a VM to host an AD tennent )
In the shared responsibility model for zure microsoft solely responsible for managing the management of physical hardware 

Azure subscription resource lock
y You can adda resource lock to an azure subscription 
n
n you cant delete a resource group containing resources that have resource locks 
- to delete resource group, you must first remove any underlying resource locks and backup data 
- If you have a Delete lock on a resource and attempt to delete its resource group, the feature blocks the whole delete operation.
- Resource locks override RBAC permissions even the owner cant delete a resource if theres a lock in place 
- You can add more than one resrouce lock to a azure resrouce 
- 2 types of lokcs
	- ReadOnly 
	- Delete
How to add resource lock:
1. Go to **Subscriptions** → Choose your subscription.
    
2. Click **Locks** from the menu.
    
3. Click **Add**.
    
4. Choose **Lock type** (`ReadOnly` or `Delete`) and give it a name.
Sensitive labels 
- users can apply sensitivity labels manually yes users can do this  
- Multiple sensitivity labels can be applied to the same file- no you can only apply one sensitivity label for a file 
- A sensitivity label can apply a watermark to a microsoft word document - yes 

Data loss prevention policies in 365
- we use microsoft purview for this 
- by defining and applying DLP policies 
	- allows you to monitor, identfy and automatically protect sensitive items across: 365, teams, exchange, shareopint and onedrive accounts Power Bi non microsoft cloud apps 
	- endpoints, windows 10, 11 and mac os 
	- 
	- 
## Compliance manager
- continiouslly asses compliance data for an organisation
- What does compliance manager track?
	- Compliance Manager tracks Microsoft managed controls, customer-managed controls, and shared controls
	- assessments - Compliance Manager assessments help your organization evaluate its compliance with industry and regional regulations
## Sensitivity labels
adds headers and footers to documents 
applies watermakrs to emails 
can be used to encrypt documents 


You can configure a sensitivity label to:

Encrypt emails, meeting invites, and documents to prevent unauthorized people from accessing this dat


## Insider risk management solution 
- can be accessed in microsoft 365 compliance center 
- Insider risk management helps minimize internal risks from users. These include:
✑ Leaks of sensitive data and data spillage
✑ Confidentiality violations
✑ Intellectual property (IP) theft
✑ Fraud
✑ Insider trading
✑ Regulatory compliance violations

## Azure policy 
Azure policy is a service in azure that allows you to create assign and manage policies to enforce rules and effects on your azure resources
- it functions to ensure that resources in the organization stay compliant with your governance standards 
	- eg only allow a specific VM size 
	- require tags on all resources 
	- enforce use of certain regions 
It works by evaluating resources both at creation and regularly afterwards to check if they comply with the defined policies 
Resources are evaluated at specific times during the resource lifecycle, the policy assignment lifecycle, and for regular ongoing compliance evaluation

**Automatic remediation** in Azure Policy refers to the ability to **fix** non-compliant resources automatically. It’s not just about _detecting_ issues — it’s about **correcting them** without manual intervention

When Azure Policy runs the template in the deployIfNotExists policy definition, it does so using a managed identity. Azure Policy creates a managed identity for each assignment, but must have details about what roles to grant the managed identity. If the managed identity is missing roles, an error is displayed during the assignment of the policy or an initiative. When using the portal, Azure Policy automatically grants the managed identity the listed roles once assignment starts. When using SDK, the roles must manually be granted to the managed identity. The location of the managed identity doesn't impact its operation with Azure Policy.

## Defender 
eneables security teams to resopnd and mitigate detected threats 
There are cards - these are designed to tell you how many threats, user accounts and endpoints or other assests were affected 



**Security Health** in **Azure** refers to the overall security posture of your resources and subscription. It helps you track and improve security by highlighting potential vulnerabilities, misconfigurations, and risks that could leave your Azure environment exposed
## Compliance center
- can be accessed in purvew 
- an assesement in compliance manger is a grouping of controls from a specific regulation, standard or policy 

## threats 
Prevailing = Trackers

Real-time = Explorer

Impersonation = Anti-phishing

You can't remove the default rules, but you can override them by creating rules with higher priorities.

## Privacy principles of microsoft:
Control: We will put you in control of your privacy with easy-to-use tools and clear choices.

Transparency: We will be transparent about data collection and use so you can make informed decisions.

Security: We will protect the data you entrust to us through strong security and encryption.

Strong legal protections: We will respect your local privacy laws and fight for legal protection of your privacy as a fundamental human right.

No content-based targeting: We will not use your email, chat, files or other personal content to target ads to you.

Benefits to you: When we do collect data, we will use it to benefit you and to make your experiences better.

## Shared responsibility model 
responsibilities always retained by the customer organization include:

- Information and data

- Devices (mobile and PCs)

- Accounts and identities
## Federation
,Multiple sso
- accessing resources from another company using your credentials
- establishes a trust relationship between 2 organisations


On-prem and cloud
- the primary secuirty perimeter should be identity 
- This is a shift from the traditional focus on network security 
- best practice center securit controls and detections around user and service identities 
- use AD to allocate controls and identitites 


## Conditional access 
- using identity protection for customers iwth IP , user risk can be evaluated as part of a conditional access policy 
- Done using policies in Entra ID 
- **Azure AD Identity Protection** works with **Conditional Access** to evaluate **user risk**,
- user risk is is an indication of whether a user account **might have been compromised**.

- **User risk** is based on factors like:
    
    - Unusual sign-in behavior (e.g., impossible travel)
        
    - Leaked credentials
        
    - Sign-ins from anonymous IP addresses or unfamiliar locations
- Can be applied to any device OS
## Sentinel 
- uses playboooks and **azure logic apps** to automate and ochestrate responses to alerts
- Provides quick insight into data by using monitor workbook templates
- uses analytics for collerating alerts into incidents 
- After you onboard Microsoft Sentinel into your workspace, use data connectors to start ingesting your data into Microsoft Sentinel. Microsoft Sentinel comes with many out of the box connectors for Microsoft services, which integrate in real time. For example, the Microsoft 365 Defender connector is a service-to-service connector that integrates data from Office 365, Azure Active Directory (Azure AD), Microsoft Defender for Identity, and Microsoft Defender for Cloud Apps.
- access and applicaiton contorl functions to block against malware and other unwated aplications whislt reducing the network attack surface on azure virtual machines 
- the hunting search and query tools of sentinetl are based n teh MITRE ATT&CK framework
- uses analytics to correlate alerts into incidents 
## Purview
Microsoft Purview comes with multiple pretrained classifiers. They appear in the **Microsoft Purview portal** > **Data classification** > **Trainable classifiers** view with the status of `Ready to use`

Microsoft Purview is a unified data governance and compliance solution from Microsoft. It helps organizations manage, discover, classify, and protect their data across various platforms—whether it's on-premises, in Microsoft services like Microsoft 365 and Azure, or in multi-cloud environments
1. **Data Governance**
    
    - Provides a **data catalog** so you can discover and understand your data sources.
        
    - Helps define **data policies and access controls**.
        
2. **Data Discovery and Classification**
    
    - Automatically scans and classifies data using built-in and custom **sensitive info types** (e.g., credit card numbers, personal data).
        
    - Helps track where sensitive data is stored and how it's used.
        
3. **Data Compliance & Risk Management**
    
    - Offers **compliance manager**, **insider risk management**, **information protection**, and **data loss prevention (DLP)** tools.
        
    - Helps you stay compliant with regulations like GDPR, HIPAA, etc.
        
4. **Multi-cloud Support**
    
    - Works not only with Microsoft environments but also integrates with **AWS**, **Google Cloud**, and on-premises databases.
        
5. **Insights & Reporting**
    
    - Gives dashboards and reports to monitor your data estate’s health, classification coverage, and policy enforcement.

Microsoft Purview Information Barriers are designed to restrict communication and collaboration between specific groups or users to prevent conflicts of interest and safeguard internal information
## eDiscovery 
**eDiscovery** (short for **electronic discovery**) is the process of identifying, collecting, reviewing, and producing electronically stored information (**ESI**) for legal cases, investigations, or compliance audits.

In the context of **Microsoft Purview**, eDiscovery tools are used to manage legal requests and investigations involving data stored in Microsoft 365 (like emails, Teams chats, SharePoint, etc.).

Integration with Insider Risk Management requires eDiscovery (Premium)

eDiscovery (Electronic Discovery) is a feature in Microsoft Purview that allows organizations to identify, hold, and export electronic information for legal or compliance investigations. It is commonly used in scenarios such as litigation, regulatory requests, and internal audits.

## Active directory domain services 
**Active Directory Domain Services (AD DS)** is a core service of **Microsoft Active Directory** that helps **manage users, computers, and other resources** in a **Windows network**
- like a central database and brain of a wndows-based organisations IT environment 
- 
- 
- **Domain Controllers** – Servers that run AD DS and respond to authentication requests
    
- **Users & Groups** – Managed centrally to control access and roles
    
- **Organizational Units (OUs)** – Help structure resources by department, role, or region
    
- **Group Policy Objects (GPOs)** – Rules that manage settings on all connected machines

## Conditional access session controls
- functions to enavle limited experienices such as blocking downloading of sensitive information 

## Azure AD identity 
cannot add users to groups based on teh users risk level
AD can detect whenterh user creadentials were leaked to the public
can be used to envoke mfa based on users risk level
y
y


## Hybrid identity 
- a model wehre you users and devices are managed both on prem and in Azure Active direcyory 
- bridge between your on prem AD adn Azure AD - allowing usersto use a single identity to access both on-prem and cloud resources 
- SSO 
- centralized identity managemen t
- Secure and consistenet policies 
- You use a tool called **Azure AD Connect** to sync users and groups from **on-premises AD to Azure AD**
- **Password Hash Synchronization (PHS)**
    
    - Hashes of passwords are synced to Azure AD.
        
    - Simple to set up, no on-prem dependencies during sign-in.
        
- **Pass-through Authentication (PTA)**
    
    - Users authenticate directly against on-prem AD in real-time.
        
    - Passwords aren't stored in the cloud.
        
- **Federation with AD FS**
    
    - Full control over authentication on-prem.
        
    - Requires more infrastructure (servers, certificates).
- Syncronisation doesnt happen automatically - must use one of the menthods above 


## Digital signatures 
- use a private key to sign
- use the public key to verify 

## Windows hello
- biometric and doesnt need password 
- something you are and have 
- uses Fingerprint 
- pin or 
- face recognition

## Software token
- This is not an example of a passwordless authentication
- (like OTP apps: Microsoft Authenticator, Google Authenticator) still require **something you know** (password or PIN) + **something you have** → **NOT truly passwordless** (it's multi-factor).
## Defender for cloud 
Foundational CSPM (for free) provides 
- continuous assessments
- security recommendations
- Secure Score
- Microsoft cloud security benchmark across Azure, 
- Amazon Web Services(AWS)
- Google Cloud.
**Defender for Cloud** can monitor **workloads across Azure, AWS, GCP, and on-premises** environments

**CSPM** (Cloud Security Posture Management) **baseline features are free** in Microsoft Defender for Cloud (standard subscriptions get deeper features with extra cost).

**Microsoft Defender for Cloud** can **protect Azure Storage** (blobs, files, etc.) by detecting **vulnerabilities and threats**.

**Azure Bastion** is a **fully managed service** that lets you **securely connect to your virtual machines (VMs)** in Azure **without** exposing the VM to the public internet

> Instead of opening RDP (port 3389) or SSH (port 22) directly to the VM, you connect **through Azure Bastion** using **the Azure Portal**.

- ✅ **No public IP needed** for your VMs.
    
- ✅ **Browser-based RDP and SSH** (directly from Azure Portal).
    
- ✅ **Secure and seamless** remote access.
    
- ✅ **Protection from port scanning** and **brute force attacks** from the internet.

The secure score in Microsoft Defender for Cloud can help you to improve your cloud security posture. The secure score aggregates security findings into a single score so that you can assess, at a glance, your current security situation. The higher the score, the lower the identified risk level is.

- devsecpos
- CSPM
- CWPP

## Microsoft Azure keyvault
Azure Key Vault is one of several [key management solutions in Azure](https://learn.microsoft.com/en-us/azure/security/fundamentals/key-management), and helps solve the following problems:
- **Secrets Management** - Azure Key Vault can be used to Securely store and tightly control access to tokens, passwords, certificates, API keys, and other secrets
- **Key Management** - Azure Key Vault can be used as a Key Management solution. Azure Key Vault makes it easy to create and control the encryption keys used to encrypt your data.
- **Certificate Management** - Azure Key Vault lets you easily provision, manage, and deploy public and private Transport Layer Security/Secure Sockets Layer (TLS/SSL) certificates for use with Azure and your internal connected resources.
Azure Key Vault has two service tiers: Standard, which encrypts with a software key, and a Premium tier, which includes hardware security module(HSM)-protected keys

## Cost 
Max number of resoruces that Azure DDoS protection standard can protect without additional cost 
Maximum = 100 public IP resources protected without extra cost.

## DDoS
Distributed denial of service, or DDoS, is a type of attack where an attacker sends more requests to an application than the application is capable of handling
Over the past few years, the industry has seen a sharp increase in attacks, with attacks becoming more sophisticated and larger in magnitude. DDoS attacks can be targeted at any endpoint that is publicly reachable through the Internet

When Application Gateway with WAF is deployed in a DDoS protected virtual network, there are no extra charges for WAF - you pay for the Application Gateway at the [lower non-WAF rate](https://azure.microsoft.com/pricing/details/application-gateway/). This policy applies to both Application Gateway v1 and v2 SKUs.

### Which Azure DDoS Protection tier should I choose?
If you need to protect less than 15 public IP resources, the IP Protection tier is the more cost-effective option. If you have more than 15 public IP resources to protect, then the Network Protection tier is more cost-effective. Network Protection also offers additional features, including DDoS Protection Rapid Response (DRR), cost protection guarantees, and Web Application Firewall (WAF) discounts.

## Resource health
resource health

## Information barriers in purview 
**Information Barriers** in **Microsoft Purview** are a set of policies used to restrict communication or collaboration between specific groups or individuals within an organization to meet compliance, regulatory, or data privacy requirements.


## Insider risk management 
-  configured from the compliance center 

## Compliance center 
- integrated in purview compliance protal 
- platform designed to help organizations manage compliance, data protection, and risk management across Microsoft 365 services
- insider risk manageme t 
- DLP
- audit eDiscovery 
- sensitivity labels 
- 3rd party integrations
- Information Governance
- Compliance manger - Provides a centralized dashboard to assess and improve your compliance posture. It offers regulatory templates to create assessments and tracks compliance progress against various standards.
- 

## Azure blueprints 
**Azure Blueprints** is a service in **Microsoft Azure** that allows you to define and deploy a set of resources, policies, and configurations in a consistent, repeatable manner across multiple Azure environments. It provides a way to automate and enforce governance, security, and compliance across your Azure subscriptions
- ensures repeatability 
## Sensitivity label 
When you assign a sensitivity label to content, it's like a stamp that's applied and is:

- Customizable. Specific to your organization and business needs, you can create categories for different levels of sensitive content in your organization. For example, Personal, Public, General, Confidential, and Highly Confidential.

- Clear text. Because a label is stored in clear text in the metadata for files and emails, third-party apps and services can read it and then apply their own protective actions, if required.

- Persistent. Because the label is stored in metadata for files and emails, the label stays with the content, no matter where it's saved or stored. The unique label identification becomes the basis for applying and enforcing policies that you configure.




## SaaS
- applying applicaiton updates is the responsibility of the clouud service provider - because t is only the software that the user is paying for 

## Azure virtual machines
You can create a user-assigned managed identity and assign it to one or more Azure Resources

Responsibility always retained by the customer:

- Information and Data

- Devices (Mobile and PCs)

- Accounts and Identities

## Security defaults 
**Security Defaults** in Microsoft Entra ID (formerly Azure Active Directory) are a set of **preconfigured security settings** designed to help protect organizations from common identity-related attacks, like **password spray, replay, and phishing**.
- have to be applied to all the users 
when this is enabled 
- admins must always use MFA 
- all users must register with authneticator 

## SSPR 
you can use external email addresses to authenticate self-service password reset 
can also use the authenticator app

## Microsoft 365 Endpoint data loss prevention
- can be used on windows 10 and newer and macOS only 
- 
## con

## System assigned managed identity 
Enabling a system-assigned managed identity creates a service principal that is automatically managed by Azure and tied to the lifecycle of the Azure resource. This means that the service principal is automatically created, enabled, disabled, and deleted as the corresponding resource is created, enabled, disabled, and delet

**system-assigned managed identity** is **tightly tied to ONE Azure resource**
A **Service Principal** is like a **user identity for an application or service** inside **Azure**.

- It **allows an app, script, or automation** to **log in** and **access Azure resources** — **without using a real user account**.
    
- It acts like a **robot account** just for that service.
## Azure AD role
- security. principal can be assigned to an azure ad role 
- A security principal is any entity that can be authenticated by the operating system, such as a user account, a computer account, or a thread or process that runs in the security context of a user or computer account, or the security groups for these accounts

Difference between security principal and service principal: A security principal is a broader term that refers to any entity that can be authenticated by Azure AD, including users, groups, service principals, and managed identities.
A service principal is a specific type of security principal that represents an application or service, allowing it to access specific Azure resources. It is essentially an identity created for use with applications, hosted services, and automated tools to access Azure resources

In summary, while all service principals are security principals, not all security principals are service principals.

## Cloud adoption framework for azure 
Strategy Plan Ready Adopt Secure Manage Govern
SPRASMG


## Microsoft Cloud Security Benchmark
Microsoft Cloud Security Benchmark (MCSB) is Microsoft's official set of security guidelines and recommendations for securing cloud services. It serves as a foundational framework for security best practices across Microsoft's cloud platforms

- Azure guidance
## User assigned identity 

A user-assigned identity is a standalone Azure recource that can be assigned to your app. An app can have multiple user-assigned identities



## Conditional access policies 
- applied after fisrt factor authenticaiton
- first factor authenticaiton -> applied 

## Conditional Access signals

## communication compliance 
**Communication Compliance** in Microsoft Purview (formerly in Microsoft 365 Compliance Center) is a powerful feature that helps organizations detect, investigate, and take action on **inappropriate or sensitive messages** across communication channels like
## Microsoft Entra permissions managemnet 
- this is a CIEM tool 
- purview and entra ID are 2 different tools
- you can control AWS permissions

## The Service Trust Portal 
This shows you how Microsoft complies with regulations, while the Purview Compliance Portal is where you implement and manage your own organization's compliance settings.

- this is for microsoft to show how their stuff complies 


## Microsoft authenticator 
- When a user authenticates by using passwordless sign in they need to use a number to authenticate them 

## Microsoft Entra ID Governance
Privilege Identity management 



## Purview Data calssification types
Trainiable classifiers-AI/ML 
SIT- regular expressions
Other

## Microsoft Entra Access Review 
**Microsoft Entra Access Reviews** help **organizations regularly review who has access** to what — especially in **groups, apps, or privileged roles** — to make sure that **only the right people** have access.

It's part of **Microsoft Entra ID Governance** (formerly Azure AD Identity Governance).

## Security center
- secure score 
- **Secure Score** is a **security rating** Microsoft gives to your organization based on **how secure your Microsoft 365 and Azure environment is**.

- It's like a **credit score**, but for your security.
    
- **Higher score = better security** (closer to Microsoft’s best practices).

## Compliance score vs Security score 
Security 
## access reviews

## Microsoft Defender for Identity 
is a cloud-based security solution that leverages your on-premises Active Directory signals to identify, detect, and investigate advanced threats, compromised identities, and malicious insider actions directed at your organization.
- Can use incidents to see what devices are afected 

## Microsoft Intune Admin Center
- The **Microsoft Intune Admin Center** is the **web portal** where you **manage and secure devices**, **apps**, and **users** for your organization.

- Think of it as **your command center** for **mobile device management (MDM)** and **mobile application management (MAM)**.
    
- It’s part of **Microsoft Endpoint Manager** (which includes Intune)

## Service principle 
A service principal is created in each tenant where the application is used and references the globally unique app object. The service principal object defines what the app can actually do 
in the specific tenant, who can access the app, and what resources the app can access.


## Azure Identity Protection

Enables organizations to accomplish three key tasks:

• Automate the detection and remediation of identity based risks.

• Investigate risks using data in the portal.

• Export risk detection data to third party utilities for further analysis.


## Defender for endpoints 
Microsoft Defender for Endpoint offers automatic investigation and remediation capabilities that help reduce the volume of alerts in minutes at scale. While The attack surface reduction set of capabilities provides the first line of defence in the stack.

The Microsoft 365 Defender connector for Azure Sentinel (preview) sends all Microsoft 365 Defender incidents and alerts information to Azure Sentinel and keeps the incidents synchronized.

Once you add the connector, Microsoft 365 Defender incidents—which include all associated alerts, entities, and relevant information received from Microsoft Defender for Endpoint, Microsoft Defender for Identity, Microsoft Defender for Office 365, and Microsoft Cloud App Security—are streamed to Azure Sentinel as security information and event management (SIEM) data, providing you with context to perform triage and incident response with Azure Sentinel.

## Microsoft Defender for Cloud Apps
- contorls for security in realtime 
- uses conditional access policies 


## Tracking protection status

trends = reports