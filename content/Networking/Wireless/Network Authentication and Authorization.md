## What is Authentication and Authorization?

Authentication is a term used to describe the process of verifying who is trying to connect to the network.
Authorization on the other hand is the process of **determining what network resources and access levels that authenticated user or device should receive**. Once we know who you are (authentication), we then decide what you're allowed to do (authorization).

There are **three key components in any 802.1X authentication system: 
- the Supplicant (client device), 
- the Authenticator (network switch/access point), 
- the Authentication Server (like Cisco ISE/Radius server)**.

## Common Terms

**802.1X** is the overall authentication framework that encompasses the standards and protocols that control port-based network access. It acts as a gatekeeper that prevents unauthorized access to network resources until proper credentials are verified.

**EAP (Extensible Authentication Protocol)** works within the 802.1X framework and provides various methods for authentication:

- **EAP-PEAP**: Uses username/password with MSCHAPv2
- **EAP-TLS**: Uses digital certificates for stronger security

There are other **authentication methods for devices that cannot support 802.1X**:

**MAB (MAC Address Bypass)** is used as a process for devices that cannot perform 802.1X authentication, such as printers, Teams phones, or IoT devices like BMS controllers. The device's MAC address is used as the identifier for network access that we register in device portal that syncs with ISE to allow for authentication using the MAC address for these registered devices.

**IPSK (Identity Pre-Shared Key)** provides a way to give different users unique passwords while still using simpler WPA2-PSK authentication, often used for gaming consoles, IoT devices such as temperature loggers (eg in Lindo Ferguson basement).

**MSCHAPv2 (Microsoft Challenge Handshake Authentication Protocol version 2)** - if you are using username and password authentication, there will be the use of MSCHAPv2 as the underlying protocol that securely verifies credentials without sending passwords in clear text over the network.

## The Primary Service

The primary service that dictates this authentication and authorization process is **Cisco ISE (Identity Services Engine)**, which acts as the central policy decision point, integrating with Active Directory and applying network access policies based on user identity, device type, and organizational requirements. This essentially acts as a RADIUS server (Remote Authentication Dial-In User Service) itself.

ISE checks credentials using one or more identity sources:
- **Active Directory (AD)**
- **Certificate Authority (for EAP-TLS)**
- **Device Portal**
- **IPSK Manager**

Then ISE authorizes and profiles the endpoint (device) based off a **hierarchically-based rules engine** and puts the device into the **appropriate VLAN and assigns Security Group Tags (SGTs)**. This sort of works like a firewall in the sense it will check through the rules sequentially, and when there is a match, it will apply that policy set. Within those policy sets are **specific network authorizations including**:

- **VLAN assignment** (which network segment - based on the authentication and  authorization you will be assigned into a specific VLAN with specific IP ranges)
- **SGT tagging** (what network resources can be accessed)
- **Downloadable ACLs** (specific traffic restrictions)
- **Session timeout settings**
- **Bandwidth limitations**

  
