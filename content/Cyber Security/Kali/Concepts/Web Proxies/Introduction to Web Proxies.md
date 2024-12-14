---
tags:
  - Proxy
  - WebRecon
---

## What is a Web Proxy?
Web proxies are specialised tools that can be set up between a browser/mobile application and a back-end sever to capture and view all the web requests being sent between both ends, essentially acting as a man in the middle. 

- Web proxies mainly work at web ports such as but not limited to HTTP/80 and HTTPS/443
- Web proxies function to capture and replay web requests.
![Screenshot](content/Cyber%20Security/Kali/Concepts/Web%20Proxies/clientservermodel.png)


## Burpsuite and ZAP
- Burpsuite and OWASP ZAP are the 2 main applications that are used for web proxy tools
- Burpsuite has some paid functionality where as ZAP is free.

## Burpsuite  installation process
### Step 1: System Requirements

1. **Check Compatibility**: Ensure your system meets the requirements (Windows, macOS, or Linux).
2. **Java Requirement**: Make sure you have the latest version of Java (JRE 8 or later) installed.

### Step 2: Download Burp Suite

1. **Visit the Official Site**: Go to the PortSwigger website.
2. **Choose the Free Version**: Select the option for the Community Edition (free version).
3. **Download**: Click the appropriate download link for your operating system.

### Step 3: Install Burp Suite

1. **For Windows**:
    
    - Locate the downloaded `.exe` file.
    - Double-click to run the installer.
    - Follow the on-screen instructions to complete the installation.
2. **For macOS**:
    
    - Locate the downloaded `.dmg` file.
    - Double-click to mount the image.
    - Drag the Burp Suite application to your Applications folder.
3. **For Linux**:
    
    - Locate the downloaded `.sh` file.
    - Open a terminal and navigate to the download directory.
    - Make the file executable with `chmod +x burpsuite_community_v*.sh`.
    - Run the installer with `./burpsuite_community_v*.sh` and follow the prompts.

### Step 4: Launch Burp Suite

1. **Open the Application**:
    - Windows: Find Burp Suite in your Start menu.
    - macOS: Open it from the Applications folder.
    - Linux: Run it from your terminal or application launcher.

### Step 5: Configure Burp Suite

1. **Initial Setup**:
    
    - Upon first launch, you can choose to create a new project or open an existing one.
    - Follow the setup wizard for the basic configuration.
2. **Set Up Your Browser**:
    
    - Configure your browser to use Burp Suite as a proxy (usually `127.0.0.1:8080`).
    - Install the Burp Certificate for SSL/TLS interception (found under "Proxy" -> "Options").

### Step 6: Start Testing

1. **Explore Features**: Familiarise yourself with the interface and tools available.
2. **Begin Testing**: Start using Burp Suite for your web application security testing.


## ZAP installation process 
### Step 1: System Requirements

1. **Check Compatibility**: Ensure your system meets the requirements (Windows, macOS, or Linux).
2. **Java Requirement**: Make sure you have the latest version of Java (JRE 8 or later) installed.

### Step 2: Download Burp Suite

1. **Visit the Official Site**: Go to the PortSwigger website.
2. **Choose the Free Version**: Select the option for the Community Edition (free version).
3. **Download**: Click the appropriate download link for your operating system.

### Step 3: Install Burp Suite

1. **For Windows**:
    
    - Locate the downloaded `.exe` file.
    - Double-click to run the installer.
    - Follow the on-screen instructions to complete the installation.
2. **For macOS**:
    
    - Locate the downloaded `.dmg` file.
    - Double-click to mount the image.
    - Drag the Burp Suite application to your Applications folder.
3. **For Linux**:
    
    - Locate the downloaded `.sh` file.
    - Open a terminal and navigate to the download directory.
    - Make the file executable with `chmod +x burpsuite_community_v*.sh`.
    - Run the installer with `./burpsuite_community_v*.sh` and follow the prompts.

### Step 4: Launch Burp Suite

1. **Open the Application**:
    - Windows: Find Burp Suite in your Start menu.
    - macOS: Open it from the Applications folder.
    - Linux: Run it from your terminal or application launcher.

### Step 5: Configure Burp Suite

1. **Initial Setup**:
    
    - Upon first launch, you can choose to create a new project or open an existing one.
    - Follow the setup wizard for the basic configuration.
2. **Set Up Your Browser**:
    
    - Configure your browser to use Burp Suite as a proxy (usually `127.0.0.1:8080`).
    - Install the Burp Certificate for SSL/TLS interception (found under "Proxy" -> "Options").

### Step 6: Start Testing

1. **Explore Features**: Familiarize yourself with the interface and tools available.
2. **Begin Testing**: Start using Burp Suite for your web application security testing.

### Additional Tips

- **Documentation**: Refer to the official Burp Suite documentation for detailed guidance and tutorials.
- **Community Forums**: Engage with the community for tips and support.

That’s it! You should now have Burp Suite Community Edition installed and ready for use.

4o mini

##### You said:

what about OWASP ZAP

###### ChatGPT said:

ChatGPT

Sure! Here’s a step-by-step outline for installing OWASP ZAP (Zed Attack Proxy):

### Step 1: System Requirements

1. **Check Compatibility**: Ensure your system runs on Windows, macOS, or Linux.
2. **Java Requirement**: Make sure you have the latest version of Java (JRE 8 or later) installed.

### Step 2: Download OWASP ZAP

1. **Visit the Official Site**: Go to the OWASP ZAP website.
2. **Choose the Version**: Select the appropriate version for your operating system (Windows, macOS, or Linux).
3. **Download**: Click the download link for the installer or package.

### Step 3: Install OWASP ZAP

1. **For Windows**:
    
    - Locate the downloaded `.exe` file.
    - Double-click to run the installer.
    - Follow the on-screen instructions to complete the installation.
2. **For macOS**:
    
    - Locate the downloaded `.dmg` file.
    - Double-click to mount the image.
    - Drag the ZAP application to your Applications folder.
3. **For Linux**:
    
    - Locate the downloaded `.tar.gz` or `.sh` file.
    - Open a terminal and navigate to the download directory.
    - If using `.tar.gz`, extract it with:
        
        bash
        
        Copy code
        
        `tar -xvf zap-*.tar.gz`
        
    - If using `.sh`, make the file executable:
        
        bash
        
        Copy code
        
        `chmod +x zap-*.sh`
        
    - Run the installer:
        
        bash
        
        Copy code
        
        `./zap-*.sh`
        

### Step 4: Launch OWASP ZAP

1. **Open the Application**:
    - Windows: Find ZAP in your Start menu.
    - macOS: Open it from the Applications folder.
    - Linux: Run it from your terminal or application launcher.

### Step 5: Configure OWASP ZAP

1. **Initial Setup**:
    
    - On first launch, you can choose to start a new session or load an existing one.
    - You can select the option to allow ZAP to run as a standalone application or in daemon mode.
2. **Set Up Your Browser**:
    
    - Configure your browser to use OWASP ZAP as a proxy (usually `127.0.0.1:8080`).
    - Install the ZAP Certificate for SSL/TLS interception (found under "Tools" -> "Options" -> "Dynamic SSL Certificates").

### Step 6: Start Testing

1. **Explore Features**: Familiarize yourself with the interface and tools available in ZAP.
2. **Begin Testing**: Start using ZAP for your web application security testing.

### Additional Tips

- **Documentation**: Refer to the official OWASP ZAP documentation for detailed guidance and tutorials.
- **Community Resources**: Engage with the community for tips and support through forums or the OWASP ZAP GitHub page.
